import { CLAFile, claFileDefaults } from './cla-file';

export interface CultureEvent extends CLAFile {
  _isPE: boolean
  _id: string
  title: string
  searchWords: string[]
  date: string
  speakers: string[]
  location: string
  audience: string
  tags: string[]
  generalRecordings: string[]
  claUnit: number
  note: string
  phoneticTranscription: string
}
export const cultureEventDefaults = (): CultureEvent => ({
  ...claFileDefaults(),
  _isPE: false,
  _id: '',
  title: '',
  searchWords: [],
  date: '',
  speakers: [],
  location: '',
  audience: '',
  tags: [],
  generalRecordings: [],
  claUnit: 1,
  note: '',
  phoneticTranscription: '',
});
