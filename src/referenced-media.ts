import { TableNames } from './constants';

/** Kind of media file referenced by sync records. */
export type ReferencedMediaKind = 'audio' | 'video' | 'photo';

/** One media file referenced by mobile (or desktop) sync table rows. */
export interface ReferencedMediaFile {
  filename: string;
  kind: ReferencedMediaKind;
}

/** Table-shaped object that can yield rows (JS Map, Immutable Map, etc.). */
export type ValuesTable<T> = {
  values(): Iterable<T | null | undefined>;
};

/**
 * Sync tables that can name media files. Structural so callers can pass partial
 * Maps without importing entity types into this module.
 */
export interface ReferencedMediaTables {
  [TableNames.ACTIVITY_PLANS]?: ValuesTable<{ tasks?: Array<{ taskPhotos?: string[] }> }>;
  [TableNames.GENERAL_RECORDINGS]?: ValuesTable<{ filename?: string; isVideo?: boolean }>;
  [TableNames.GENERAL_QUESTIONS]?: ValuesTable<{ filename?: string }>;
  [TableNames.DRE]?: ValuesTable<{ recording1?: string[] | string; recording2?: string[] | string }>;
  [TableNames.PEOPLE]?: ValuesTable<{ photoFilename?: string }>;
  [TableNames.USERS]?: ValuesTable<{ photoFilename?: string }>;
  [TableNames.GENERAL_PHOTOS]?: ValuesTable<{ filename?: string }>;
}

const recordingFilenames = (track: string[] | string | undefined): string[] => {
  if (!track) return [];
  if (Array.isArray(track)) return track.filter(Boolean);
  if (typeof track === 'string' && track) return [track];
  return [];
};

const pushIfNamed = (
  files: ReferencedMediaFile[],
  filename: string | undefined,
  kind: ReferencedMediaKind,
): void => {
  if (filename) {
    files.push({ filename, kind });
  }
};

/**
 * Source of truth for which record fields name shared files/ media.
 * Desktop generateFileLists (mobile→desktop request set) and mobile's inbound
 * size map both call this — add a new media-bearing field here, do not duplicate
 * the walk at either caller. Empty names are skipped. Desktop's outbound list
 * (playlist items, etc.) is a different walk and stays in generateFileLists.
 */
export const collectReferencedMediaFiles = (tables: ReferencedMediaTables): ReferencedMediaFile[] => {
  const files: ReferencedMediaFile[] = [];

  for (const ap of tables[TableNames.ACTIVITY_PLANS]?.values() ?? []) {
    if (!ap?.tasks) continue;
    for (const task of ap.tasks) {
      for (const photoFilename of task.taskPhotos ?? []) {
        pushIfNamed(files, photoFilename, 'photo');
      }
    }
  }

  for (const recording of tables[TableNames.GENERAL_RECORDINGS]?.values() ?? []) {
    if (!recording) continue;
    pushIfNamed(files, recording.filename, recording.isVideo ? 'video' : 'audio');
  }

  for (const question of tables[TableNames.GENERAL_QUESTIONS]?.values() ?? []) {
    pushIfNamed(files, question?.filename, 'audio');
  }

  for (const dre of tables[TableNames.DRE]?.values() ?? []) {
    if (!dre) continue;
    for (const filename of [
      ...recordingFilenames(dre.recording1),
      ...recordingFilenames(dre.recording2),
    ]) {
      pushIfNamed(files, filename, 'audio');
    }
  }

  for (const person of [
    ...(tables[TableNames.PEOPLE]?.values() ?? []),
    ...(tables[TableNames.USERS]?.values() ?? []),
  ]) {
    pushIfNamed(files, person?.photoFilename, 'photo');
  }

  for (const photo of tables[TableNames.GENERAL_PHOTOS]?.values() ?? []) {
    pushIfNamed(files, photo?.filename, 'photo');
  }

  return files;
};
