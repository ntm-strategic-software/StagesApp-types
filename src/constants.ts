// noinspection JSUnusedGlobalSymbols

/** Enum of TaskBoxes */
export enum TaskBox {
  PLAN = 'PLAN',
  PROCESS = 'PROCESS',
  COMMUNITY = 'COMMUNITY',
  HELPER = 'HELPER',
  PLAYLIST = 'PLAYLIST',
}
export type TaskBoxEnum = typeof TaskBox[keyof typeof TaskBox];

/**
 * Enum of Draggable type
 * This enum is in StagesApp-Types because it is used in Task.droppableTypes,
 * and Task is used in both Desktop and Mobile apps.
 */
export enum Draggable {
  PI_TEXT_ONLY_DRAGGABLE = 'PI_TEXT_ONLY_DRAGGABLE', // Pending Idea
  PI_CE_DRAGGABLE = 'PI_CE_DRAGGABLE', // Pending Idea with a CE
  PI_PE_DRAGGABLE = 'PI_PE_DRAGGABLE', // Pending Idea with a PE
  PI_DRE_DRAGGABLE = 'PI_DRE_DRAGGABLE', // Pending Idea with a DRE
  PI_DRE_SIMPLE_DRAGGABLE = 'PI_DRE_SIMPLE_DRAGGABLE', // Pending Idea with a Simple DRE
  PHOTO_DRAGGABLE = 'PHOTO_DRAGGABLE',
  NEW_PHOTO_DRAGGABLE = 'NEW_PHOTO_DRAGGABLE',
  PHOTO_GROUP_DRAGGABLE = 'PHOTO_GROUP_DRAGGABLE',
  CE_DRAGGABLE = 'CE_DRAGGABLE',
  PE_DRAGGABLE = 'PE_DRAGGABLE',
  DRE_DRAGGABLE = 'DRE_DRAGGABLE',
  DRE_SIMPLE_DRAGGABLE = 'DRE_SIMPLE_DRAGGABLE',
  NOT_DRAGGABLE = 'NOT_DRAGGABLE', // Dragging not allowed
}
export type DraggableEnum = typeof Draggable[keyof typeof Draggable];

/** Enum of recorder types */
export enum RecorderButtonType {
  GENERAL_RECORDER_PROMPT = 'GENERAL_RECORDER_PROMPT',
  GENERAL_RECORDER_PROMPT_OPTIONAL = 'GENERAL_RECORDER_PROMPT_OPTIONAL',
  GENERAL_RECORDER_MAIN = 'GENERAL_RECORDER_MAIN',
  GENERAL_RECORDER_MAIN_OPTIONAL = 'GENERAL_RECORDER_MAIN_OPTIONAL',
  DUAL_RECORDER1 = 'DUAL_RECORDER1',
  DUAL_RECORDER2 = 'DUAL_RECORDER2',
  DUAL_RECORDER1_SIMPLE = 'DUAL_RECORDER1_SIMPLE',
  DUAL_RECORDER2_SIMPLE_OPTIONAL = 'DUAL_RECORDER2_SIMPLE_OPTIONAL',
  PE_RECORDER = 'PE_RECORDER',  // this will result in a main (not prompt) CLA File
}
export type RecorderButtonTypeEnum = typeof RecorderButtonType[keyof typeof RecorderButtonType];

/** Enum of player types */
export enum PlayerType {
  GENERAL_RECORDING_PROMPT_PLAYER = 'GENERAL_RECORDING_PROMPT_PLAYER',
  GENERAL_RECORDING_MAIN_PLAYER = 'GENERAL_RECORDING_MAIN_PLAYER',
}
export type PlayerTypeEnum = typeof PlayerType[keyof typeof PlayerType];

/**
 * Enum for Stages Desktop in the Planner..Tasks tab, where clicking the lightning bolt for a task will jump the user to.
 * Since this is used in Task.jumpToView and Task is used in both Desktop and Mobile apps,
 * this enum is in StagesApp-Types.
 */
export enum JumpToView {
  HOME_REVIEW = 'HOME_REVIEW',
  HOME_PROCESS = 'HOME_PROCESS',
  HOME_OBSERVATIONS = 'HOME_OBSERVATIONS',
  PLANNER_ACTIVITIES_TASK = 'PLANNER_ACTIVITIES_TASK',
  PLANNER_UNIT = 'PLANNER_UNIT',
  PLANNER_MEDIA = 'PLANNER_MEDIA',
  PLANNER_REFLECTION = 'PLANNER_REFLECTION',
  PLANNER_SELF_EVALUATION = 'PLANNER_SELF_EVALUATION',
  PHOTO_VIEWER = 'PHOTO_VIEWER',
}
export type JumpToViewEnum = typeof JumpToView[keyof typeof JumpToView];

/** Enum for the CLA Stages that the user progresses through */
export enum CLAStage {
  WARMUP = 'WARMUP',
  STAGE_1 = 'STAGE_1',
  STAGE_2 = 'STAGE_2',
  STAGE_3 = 'STAGE_3',
  STAGE_4 = 'STAGE_4',
  WRAPUP = 'WRAPUP',
}
export type CLAStageEnum = typeof CLAStage[keyof typeof CLAStage];

/** Enum of the possible types of a CLA File */
export enum ClaFileType {
  CULTURE_EVENT = 'CULTURE_EVENT',
  DRE = 'DRE',
  PE = 'PE',
  SIMPLE_DRE = 'SIMPLE_DRE',
}
export type ClaFileTypeEnum = typeof ClaFileType[keyof typeof ClaFileType];

/** Enum of the possible types of an advanced filter */
export enum AdvancedFilterType {
  NORMAL_FILTER = 'NORMAL_FILTER',
  TRANSCRIPTION_FILTER = 'TRANSCRIPTION_FILTER',
}
export type AdvancedFilterTypeEnum = typeof AdvancedFilterType[keyof typeof AdvancedFilterType];

/** Enum of all Activities */
export enum ActivityKey {
  // COMMUNITY EXPERIENCE ACTIVITIES
  GET_ACQUAINTED = 'GET_ACQUAINTED',
  EXPERIENCE_CULTURE_EVENT = 'EXPERIENCE_CULTURE_EVENT',
  VISIT_IN_COMMUNITY = 'VISIT_IN_COMMUNITY',
  HOST_VISITORS = 'HOST_VISITORS',
  JOIN_COMMUNITY_GROUP = 'JOIN_COMMUNITY_GROUP',

  // BASIC LEARNING ACTIVITIES - not sure whether this is still a category
  // Listen and Do Activities
  LISTEN_AND_DO_SILENT = 'LISTEN_AND_DO_SILENT',
  LISTEN_DO_AND_SPEAK = 'LISTEN_DO_AND_SPEAK',

  // INTERACTIVE ACTIVITIES
  COMMENT_ON_PHOTO_ANSWER_QUESTIONS = 'COMMENT_ON_PHOTO_ANSWER_QUESTIONS',
  TALK_ABOUT_PHOTO_ASK_QUESTIONS = 'TALK_ABOUT_PHOTO_ASK_QUESTIONS',

  // ROLE PLAY ACTIVITIES
  ELICIT_PRACTICAL_EXPRESSIONS = 'ELICIT_PRACTICAL_EXPRESSIONS',
  ACT_OUT_ROLE_PLAY = 'ACT_OUT_ROLE_PLAY',

  // RECORD AND PROCESS ACTIVITIES
  RECORD_LISTEN_PROCESS_1 = 'RECORD_LISTEN_PROCESS_1',
  RECORD_LISTEN_PROCESS_2 = 'RECORD_LISTEN_PROCESS_2',
  INTERVIEW_NATIVE_SPEAKER = 'INTERVIEW_NATIVE_SPEAKER',
  RECORD_NATIVE_SPEAKER_INTERACTION = 'RECORD_NATIVE_SPEAKER_INTERACTION',
  RECORD_NATIVE_SPEAKER_DISCUSSION = 'RECORD_NATIVE_SPEAKER_DISCUSSION',

  // MODELING ACTIVITIES
  RECORD_LISTEN_RETELL = 'RECORD_LISTEN_RETELL',
  RECORD_SELF_FOR_FEEDBACK = 'RECORD_SELF_FOR_FEEDBACK',
  LISTEN_MODEL_COMPARE = 'LISTEN_MODEL_COMPARE',

  // COMMUNITY PRACTICE ACTIVITIES
  REVIEW_VOCABULARY = 'REVIEW_VOCABULARY',
  HAVE_PREPLANNED_CONVERSATION = 'HAVE_PREPLANNED_CONVERSATION',
  DESCRIBE_OBJECT_EVENT_ROUTINE = 'DESCRIBE_OBJECT_EVENT_ROUTINE',
  TELL_STORY = 'TELL_STORY',
  CONTRAST_COMPARE = 'CONTRAST_COMPARE',
  DISCUSS_UNKNOWN_TOPICS = 'DISCUSS_UNKNOWN_TOPICS',
  PRODUCE_HIGH_LEVEL_GENRES = 'PRODUCE_HIGH_LEVEL_GENRES',

  // SOUND AND GRAMMAR ACTIVITIES
  // Focused Content Activities - not sure whether this is still a category
  PRACTICE_DIFFICULT_SOUNDS = 'PRACTICE_DIFFICULT_SOUNDS',
  PRACTICE_DIFFICULT_GRAMMAR_FEATURES = 'PRACTICE_DIFFICULT_GRAMMAR_FEATURES',
  ELICIT_GRAMMAR_FEATURES = 'ELICIT_GRAMMAR_FEATURES',

  // PLANNING AND PROCESSING ACTIVITIES
  PLAN_NEXT_DAY = 'PLAN_NEXT_DAY',
  PLAN_NEW_ACTIVITIES = 'PLAN_NEW_ACTIVITIES',
  PLAN_NEXT_UNIT = 'PLAN_NEXT_UNIT',
  PROCESS_PENDING_MEDIA = 'PROCESS_PENDING_MEDIA',
  PROCESS_QUICK_NOTES = 'PROCESS_QUICK_NOTES',

  // ASSESSMENT ACTIVITIES
  REFLECT_ON_PROGRESS = 'REFLECT_ON_PROGRESS',
  DAILY_REFLECT_ON_PROGRESS = 'DAILY_REFLECT_ON_PROGRESS',
  EVALUATE_PROGRESS = 'EVALUATE_PROGRESS',

  // ANALYSIS AND CONCLUSION ACTIVITIES
  REFLECT = 'REFLECT',
  ANALYZE = 'ANALYZE',
  FINALIZE_CONCLUSIONS = 'FINALIZE_CONCLUSIONS',

  // OBSOLETE
  RECORD_CLARIFY_EXPAND = 'RECORD_CLARIFY_EXPAND',
  INTERACT_ABOUT_SCENE = 'INTERACT_ABOUT_SCENE',
}
export type ActivityKeyEnum = typeof ActivityKey[keyof typeof ActivityKey];

/** Enum for the different types of pending files */
export enum PendingFileType {
  GENERAL_RECORDER = 'GENERAL_RECORDER',
  PE_RECORDER = 'PE_RECORDER',
  DUAL_RECORDER = 'DUAL_RECORDER',
  DUAL_RECORDER_SIMPLE = 'DUAL_RECORDER_SIMPLE',
  QUICK_PHOTO = 'QUICK_PHOTO',
  QUICK_NOTE = 'QUICK_NOTE',
}
export type PendingFileTypeEnum = typeof PendingFileType[keyof typeof PendingFileType];

/** Enum for the different groups of reflection questions */
export enum ReflectionQuestionSets {
  HOW_CLA_WENT = 'HOW_CLA_WENT',
  OBSERVED = 'OBSERVED',
  SCHEDULE = 'SCHEDULE',
  HELP = 'HELP',
  READY_FOR_NEXT_UNIT = 'READY_FOR_NEXT_UNIT',
}
export type ReflectionQuestionSetsEnum = typeof ReflectionQuestionSets[keyof typeof ReflectionQuestionSets];

/** Enum for the different types of answers */
export enum AnswerTypes {
  TEXT = 'TEXT',
  /** Allow user to select only one option from a list of options */
  MULTIPLE_CHOICE_ONE = 'MULTIPLE_CHOICE_ONE',
  /** User answers the question by checking the box or not checking the box */
  CHECKBOX = 'CHECKBOX',
  /** No answer allowed.  This is for showing text only. */
  NONE = 'NONE',
  /** No answer allowed.  This is for showing the question text and statistics only. */
  STATS = 'STATS',
  /** Answer is a list of texts of Pending Ideas */
  PENDING_IDEAS = 'PENDING_IDEAS',
  /** Answer is a list of ActivityKeys with current created, completed, recommended, and extra user wants to do */
  EXTRA_ACTIVITIES = 'EXTRA_ACTIVITIES',
  /** Answer is a list of ActivityKeys with true/false for each, plus a NONE option */
  NEW_ACTIVITIES = 'NEW_ACTIVITIES',
}
export type AnswerTypesEnum = typeof AnswerTypes[keyof typeof AnswerTypes];

/** Error types that we want to handle specially */
export enum ErrorType {
  OLD_MOBILE_VERSION = 'OLD_MOBILE_VERSION',
  OLD_DESKTOP_VERSION = 'OLD_DESKTOP_VERSION',
  NO_DESKTOP_USER = 'NO_DESKTOP_USER',
  /** Desktop disk cannot accept the incoming mobile payload */
  INSUFFICIENT_DISK_SPACE = 'INSUFFICIENT_DISK_SPACE',
  /** Mobile disk cannot accept the incoming desktop payload */
  MOBILE_INSUFFICIENT_DISK_SPACE = 'MOBILE_INSUFFICIENT_DISK_SPACE',
  DESKTOP_USER_CANCELLED = 'DESKTOP_USER_CANCELLED',
  MOBILE_USER_CANCELLED = 'MOBILE_USER_CANCELLED',
  /** Unexpected socket disconnect mid-sync */
  SYNC_PEER_DISCONNECTED = 'SYNC_PEER_DISCONNECTED',
  /** Locale file failed JSON parse or shape validation during DOWNLOAD_LOCALES. */
  INVALID_LOCALE_FILE = 'INVALID_LOCALE_FILE',
}
export type ErrorTypeEnum = typeof ErrorType[keyof typeof ErrorType];

/**
 * Enum for table names of all tables in all databases in Stages Desktop.
 * Stages Mobile has a subset of these tables, plus mobile-only tables (see localTableNames in StagesApp-mobile).
 *
 * NOTE:  all tables include properties createdAt and updatedAt, which are ISO date strings (e.g., '2022-06-20T15:50:40.055Z')
 */
export enum TableNames {
  USERS = 'Users',
  DESKTOP_SETTINGS = 'DesktopSettings',
  CULTURE_EVENTS = 'CultureEvents',
  GENERAL_RECORDINGS = 'GeneralRecordings',
  GENERAL_PHOTOS = 'GeneralPhotos',
  GENERAL_QUESTIONS = 'GeneralQuestions',
  MARKERS = 'Markers',
  PEOPLE = 'People',
  LOCATIONS = 'Locations',
  SEARCH_WORDS = 'SearchWords',
  MOBILE_DEVICES = 'MobileDevices',
  DELETED_ITEMS = 'DeletedItems',
  TRANSCRIPTIONS = 'Transcriptions',
  DRE = 'DRE',
  ADVANCED_FILTERS = 'AdvancedFilters',
  PLAYLIST_ITEMS = 'PlaylistItems',
  PENDING_IDEAS = 'PendingIdeas',
  OBSERVATIONS = 'Observations',
  TAGS = 'Tags',
  ACTIVITY_PLANS = 'ActivityPlans',
  // PENDING_MEDIA = 'PendingMedia',
  TASK_BOX_SORT_ORDER = 'TaskBoxSortOrder',
  PHOTO_GROUPS = 'PhotoGroups',
  QUICK_NOTES = 'QuickNotes',
  REFLECTION_QUESTIONS = 'ReflectionQuestions',
  DAILY_REFLECTION_QUESTIONS = 'DailyReflectionQuestions',
  SELF_EVALUATION_QUESTIONS = 'SelfEvaluationQuestions',
  CONSULTANT_RECOMMENDATIONS = 'ConsultantRecommendations',
  TIMESHEET = 'Timesheet',
  UNIT_WEEKS = 'UnitWeeks',
}
export type TableNamesEnum = typeof TableNames[keyof typeof TableNames];

/**
 * Enum for table names to sync from mobile to desktop.
 * Tables that are synced from desktop to mobile are listed in StagesApp-desktop db-schema.js desktopTablesToSendToMobile
 */
export const mobileTablesToSendToDesktop = [
  TableNames.USERS,
  TableNames.CULTURE_EVENTS,
  TableNames.GENERAL_RECORDINGS,
  TableNames.MARKERS,
  TableNames.PEOPLE,
  TableNames.LOCATIONS,
  TableNames.GENERAL_PHOTOS,
  TableNames.GENERAL_QUESTIONS,
  TableNames.SEARCH_WORDS,
  TableNames.DRE,
  TableNames.PLAYLIST_ITEMS,
  TableNames.QUICK_NOTES,
  TableNames.ACTIVITY_PLANS,
  TableNames.TASK_BOX_SORT_ORDER,
  TableNames.TIMESHEET,
];

/** Key for storing _id's of all CLA Files on Mobile during sync */
export const MOBILE_ALL_CLA_FILE_IDS = 'MOBILE_ALL_CLA_FILE_IDS';
/** Key for storing _id's of all Activity Plans on Mobile during sync */
export const MOBILE_ALL_ACTIVITY_PLAN_IDS = 'MOBILE_ALL_ACTIVITY_PLAN_IDS';
/** Key for storing CLAFile _id's that Desktop is requesting from Mobile during sync */
export const REQUESTED_CLA_FILE_IDS = 'REQUESTED_CLA_FILE_IDS';
/** Key for storing ActivityPlan _id's that Desktop is requesting from Mobile during sync */
export const REQUESTED_ACTIVITY_PLAN_IDS = 'REQUESTED_ACTIVITY_PLAN_IDS';

/** _id for the single row in the TaskBoxSortOrder table */
export const TASK_BOX_SORT_ORDER_ID = '8cf436a9-c7a2-4222-bf4f-3b047b93116a';

/**
 * For restoring files to Mobile from a mobile backup.
 * Mobile backups are stored on Desktop.  Restoring a mobile backup involves transferring the backup from Desktop to Mobile.
 */
export const backupHostSuffix = '/backup';

/** Enum of the possible types of data transfers between mobile and desktop */
export enum DataTransferType {
  SYNC = 'SYNC',
  IMPORT_USER = 'IMPORT_USER',
  BACKUP_ALL_DATA = 'BACKUP_ALL_DATA',
  RESTORE_ALL_DATA = 'RESTORE_ALL_DATA',
  DOWNLOAD_LOCALES = 'DOWNLOAD_LOCALES',
}
export type DataTransferTypeEnum = typeof DataTransferType[keyof typeof DataTransferType];

/** Enum of socket endpoints used for communication between Mobile and Desktop during sync and data transfer */
export enum socketEndpoints {
  // used for sync
  GET_PUBLIC_KEY = 'GET_PUBLIC_KEY',
  KEY_CHALLENGE = 'KEY_CHALLENGE',
  TRANSFER_TYPE = 'TRANSFER_TYPE',
  /** Mobile sends its estimated outbound data size so Desktop can verify it has enough disk space before data transfer begins */
  SEND_MOBILE_DATA_SIZE = 'SEND_MOBILE_DATA_SIZE',
  GET_LAST_SYNC_TIME = 'GET_LAST_SYNC_TIME',
  SEND_MOBILE_DATA = 'SEND_MOBILE_DATA',
  GET_DESKTOP_PHOTO = 'GET_DESKTOP_PHOTO',
  // GET_TABLE_ITEMS = 'GET_TABLE_ITEMS',  // Not currently used, but I'm leaving it here in case we ever want it.
  SEND_EXTRA_MOBILE_DATA = 'SEND_EXTRA_MOBILE_DATA',
  FINALIZE_DESKTOP = 'FINALIZE_DESKTOP',
  MOBILE_ERROR = 'MOBILE_ERROR',
  DESKTOP_ERROR = 'DESKTOP_ERROR',
  SEND_LOCALE_FILE = 'SEND_LOCALE_FILE',
}
export type socketEndpointsEnum = typeof socketEndpoints[keyof typeof socketEndpoints];

/** Enum of POST paths used for uploading files from Mobile to Desktop during sync and data transfer */
export enum PostPaths {
  UPLOAD_FILE = '/uploadfile',
  UPLOAD_FILE_BACKUP = '/uploadfilebackup',
}
export type PostPathsEnum = typeof PostPaths[keyof typeof PostPaths];

// ********************************************************************************************************************
// Sync protocol constants — shared between Mobile and Desktop to ensure protocol agreement
// ********************************************************************************************************************

/** Socket event name: desktop emits public key immediately on connect (skips GET_PUBLIC_KEY round trip) */
export const DESKTOP_PUBLIC_KEY_EVENT = 'desktopPublicKey';

/** Field name in TRANSFER_TYPE payload: base64-encoded AES-256 session key from mobile */
export const AES_SESSION_KEY_FIELD = 'aesSessionKey';

/** Field name in TRANSFER_TYPE payload: mobile user ID for inline lastSyncTime resolution */
export const MOBILE_USER_ID_FIELD = 'mobileUserId';

/**
 * Field name in TRANSFER_TYPE response: opt-in error-report email from Desktop.
 * Empty string means Desktop unchecked include / no email — Mobile should clear its stored copy.
 */
export const ERROR_REPORT_EMAIL_FIELD = 'errorReportEmail';

/** Field name in SEND_MOBILE_DATA payload: estimated outbound data size (replaces SEND_MOBILE_DATA_SIZE round trip) */
export const ESTIMATED_SIZE_FIELD = 'estimatedSize';

/** Field name in SEND_MOBILE_DATA payload: mobile-reported mtime/size for DRE audio files in the payload */
export const MOBILE_DRE_AUDIO_FILE_STATS = 'mobileDreAudioFileStats';

/** Filesystem metadata for one DRE audio file, reported by mobile during sync */
export interface DreAudioFileStat {
  mtimeMs: number;
  size: number;
}

/** Map of DRE audio filename -> filesystem metadata from mobile */
export type DreAudioFileStatsMap = Record<string, DreAudioFileStat>;

/** Field name used in compressed payload wrapper: contains base64-encoded gzipped data */
export const COMPRESSED_FIELD = 'compressed';

/** HTTP route path for downloading desktop photos via HTTP instead of socket.io */
export const PHOTO_ROUTE_PATH = '/photo';

/** HTTP route path for downloading desktop audio/video files via HTTP during sync */
export const MEDIA_ROUTE_PATH = '/media';

/** Max socket.io HTTP buffer size in bytes — must match on both mobile and desktop */
export const MAX_HTTP_BUFFER_SIZE = 200 * 1024 * 1024; // 200 MB

/** AES-256-GCM key length in bytes */
export const AES_KEY_LENGTH = 32;

/** AES-GCM initialization vector length in bytes */
export const AES_IV_LENGTH = 12;

/** Capabilities that mobile and desktop negotiate during TRANSFER_TYPE to enable sync optimizations */
export interface SyncCapabilities {
  /** Whether gzip compression is supported for SEND_MOBILE_DATA / SEND_EXTRA_MOBILE_DATA payloads */
  compression: boolean;
  /** Whether HTTP GET /photo/:filename is supported for downloading desktop photos */
  httpPhotos: boolean;
  /** Number of concurrent photo downloads allowed (default 1) */
  parallelUploads: number;
  /** Whether AES-256-GCM session encryption is supported (replaces RSA after TRANSFER_TYPE) */
  aesSession: boolean;
}

/** The wrapper format for encrypted socket responses */
export interface EncryptedSocketResponse {
  encrypted: string;
}

/** The JSON format for AES-256-GCM encrypted messages exchanged between mobile and desktop */
export interface AesEncryptedMessage {
  /** Base64-encoded 12-byte initialization vector */
  iv: string;
  /** Base64-encoded ciphertext */
  ct: string;
  /** Base64-encoded 16-byte GCM authentication tag */
  tag: string;
}

// ********************************************************************************************************************
// Sync handshake v2 — X25519 key agreement + Ed25519 device identity, bound to a QR pairing secret.
// Replaces the hybrid-crypto-js RSA handshake. See StagesApp-desktop/ai-docs/SYNC_HANDSHAKE_REDESIGN.md
// for the protocol, the rationale, and the migration.
//
// Every value below is protocol-visible: changing one without changing the other side breaks the
// handshake, so both apps read them from here rather than declaring their own.
// ********************************************************************************************************************

/** Bytes of pairing secret carried in the QR code. Regenerated for every sync window. */
export const PAIRING_SECRET_LENGTH = 32;

/** Field name in the QR payload holding the base64url pairing secret. */
export const PAIRING_SECRET_FIELD = 'k';

/** Raw byte length of an X25519 or Ed25519 public key. */
export const CURVE25519_PUBLIC_KEY_LENGTH = 32;

/** Raw byte length of an Ed25519 signature. */
export const ED25519_SIGNATURE_LENGTH = 64;

/**
 * HMAC-SHA256 domain-separation labels for the pairing proofs. Distinct per direction so a proof
 * captured in one direction cannot be replayed in the other.
 */
export const DESKTOP_HELLO_LABEL = 'stages-desktop-hello';
export const MOBILE_HELLO_LABEL = 'stages-mobile-hello';

/** HKDF info prefix. Bump the version suffix on any change to the key schedule. */
export const SYNC_HKDF_INFO = 'stages-sync-v2';

/** Handshake message field names. */
export const IDENTITY_PUB_FIELD = 'identityPub';
export const EPHEMERAL_PUB_FIELD = 'ephemeralPub';
export const PAIRING_PROOF_FIELD = 'proof';
export const IDENTITY_SIG_FIELD = 'sig';

/** Desktop's hello, emitted on connect. Replaces the bare public-key string of handshake v1. */
export interface DesktopHelloMessage {
  /** Base64 Ed25519 device identity public key — the value stored in TRUSTED_MACHINES. */
  [IDENTITY_PUB_FIELD]: string;
  /** Base64 X25519 ephemeral public key, fresh per connection (this is what gives forward secrecy). */
  [EPHEMERAL_PUB_FIELD]: string;
  /** Base64 HMAC-SHA256(pairingSecret, DESKTOP_HELLO_LABEL || identityPub || ephemeralPub). */
  [PAIRING_PROOF_FIELD]: string;
}

/** Mobile's hello, sent as KEY_CHALLENGE. */
export interface MobileHelloMessage {
  /** Base64 Ed25519 device identity public key — the value stored in MOBILE_DEVICES. */
  [IDENTITY_PUB_FIELD]: string;
  /** Base64 X25519 ephemeral public key, fresh per connection. */
  [EPHEMERAL_PUB_FIELD]: string;
  /**
   * Base64 HMAC-SHA256(pairingSecret,
   *   MOBILE_HELLO_LABEL || mobileIdentityPub || mobileEphemeralPub || desktopEphemeralPub).
   * Desktop verifies this before anything else — it is what proves the caller scanned the QR.
   */
  [PAIRING_PROOF_FIELD]: string;
  /** Base64 Ed25519 signature over the handshake transcript. */
  [IDENTITY_SIG_FIELD]: string;
}

/** Desktop's KEY_CHALLENGE response: its signature over the same transcript. */
export interface DesktopHelloResponse {
  [IDENTITY_SIG_FIELD]: string;
}

// ********************************************************************************************************************
// Encrypted media transport — chunked AES-256-GCM over the HTTP file routes.
// TLS is not usable here: React Native cannot configure trust for a self-signed cert on a DHCP LAN
// address, and its WebSocket layer ignores TLS options entirely. See the ADR for the full reasoning.
// ********************************************************************************************************************

/**
 * Plaintext bytes per encrypted chunk. Fixed so a plaintext offset maps to a chunk index by
 * arithmetic, which is what keeps ranged resume working. Chosen to keep the React Native JSI call
 * count low (~800 calls per 200 MB) rather than for raw throughput.
 *
 * Must divide the ranged-download chunk size evenly so range boundaries land on chunk boundaries.
 */
export const MEDIA_CHUNK_PLAINTEXT_LENGTH = 256 * 1024;

/** Bytes appended to each chunk: the GCM authentication tag. */
export const MEDIA_CHUNK_TAG_LENGTH = 16;

/** On-the-wire size of one full chunk. */
export const MEDIA_CHUNK_WIRE_LENGTH = MEDIA_CHUNK_PLAINTEXT_LENGTH + MEDIA_CHUNK_TAG_LENGTH;

/**
 * Bytes of random nonce prefix sent once at the head of an encrypted media stream. Each chunk's
 * 12-byte GCM nonce is `noncePrefix || uint64BE(chunkIndex)`, so nonces are unique per chunk and
 * never repeat under one session key — the one failure that would catastrophically break GCM.
 */
export const MEDIA_NONCE_PREFIX_LENGTH = 4;

/** Header sent by mobile / set by desktop to mark a file body as chunk-encrypted. */
export const MEDIA_ENCRYPTION_HEADER = 'x-stages-media-encryption';

/** Value of MEDIA_ENCRYPTION_HEADER for the scheme above. */
export const MEDIA_ENCRYPTION_AES_GCM_CHUNKED = 'aes-256-gcm-chunked-v1';
