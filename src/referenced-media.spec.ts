import { TableNames } from './constants';
import { collectReferencedMediaFiles } from './referenced-media';

describe('collectReferencedMediaFiles', () => {
  it('collects each source table and skips empty or missing filenames', () => {
    const files = collectReferencedMediaFiles({
      [TableNames.ACTIVITY_PLANS]: new Map([
        ['ap1', {
          tasks: [
            { taskPhotos: ['task.jpg', ''] },
            { taskPhotos: [] },
          ],
        }],
        ['ap2', { tasks: undefined }],
      ]),
      [TableNames.GENERAL_RECORDINGS]: new Map([
        ['grAudio', { filename: 'rec.m4a', isVideo: false }],
        ['grVideo', { filename: 'rec.mp4', isVideo: true }],
        ['grEmpty', { filename: '', isVideo: false }],
        ['grMissing', null],
      ]),
      [TableNames.GENERAL_QUESTIONS]: new Map([
        ['q1', { filename: 'q.m4a' }],
        ['q2', { filename: '' }],
        ['q3', {}],
      ]),
      [TableNames.DRE]: new Map([
        ['dre1', { recording1: ['a.m4a', ''], recording2: ['b.m4a'] }],
        ['dre2', { recording1: [], recording2: undefined }],
        ['dre3', null],
      ]),
      [TableNames.PEOPLE]: new Map([
        ['p1', { photoFilename: 'person.jpg' }],
        ['p2', { photoFilename: '' }],
      ]),
      [TableNames.USERS]: new Map([
        ['u1', { photoFilename: 'user.jpg' }],
      ]),
      [TableNames.GENERAL_PHOTOS]: new Map([
        ['ph1', { filename: 'photo.jpg' }],
        ['ph2', { filename: '' }],
      ]),
    });

    expect(files).toEqual([
      { filename: 'task.jpg', kind: 'photo' },
      { filename: 'rec.m4a', kind: 'audio' },
      { filename: 'rec.mp4', kind: 'video' },
      { filename: 'q.m4a', kind: 'audio' },
      { filename: 'a.m4a', kind: 'audio' },
      { filename: 'b.m4a', kind: 'audio' },
      { filename: 'person.jpg', kind: 'photo' },
      { filename: 'user.jpg', kind: 'photo' },
      { filename: 'photo.jpg', kind: 'photo' },
    ]);
  });

  it('treats a legacy string DRE recording field as a single filename', () => {
    const files = collectReferencedMediaFiles({
      [TableNames.DRE]: new Map([
        ['dre1', { recording1: 'legacy.m4a', recording2: 'legacy2.m4a' }],
      ]),
    });

    expect(files).toEqual([
      { filename: 'legacy.m4a', kind: 'audio' },
      { filename: 'legacy2.m4a', kind: 'audio' },
    ]);
  });

  it('returns an empty list when no tables are present', () => {
    expect(collectReferencedMediaFiles({})).toEqual([]);
  });
});
