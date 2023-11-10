import { CLAFile, claFileDefaults } from './cla-file';

export interface CultureEvent extends CLAFile {
  _isPE: boolean
  searchWords: string[]
  date: string
  speakers: string[]
  location: string
  audience: string
  tags: string[]
  generalRecordings: string[]
  phoneticTranscription: string
}
export const cultureEventDefaults = (): CultureEvent => ({
  ...claFileDefaults(),
  _isPE: false,
  searchWords: [],
  date: '',
  speakers: [],
  location: '',
  audience: '',
  tags: [],
  generalRecordings: [],
  phoneticTranscription: '',
});
