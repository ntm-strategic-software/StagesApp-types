import { CLAFile, claFileDefaults } from './cla-file';

export type SplitTextColorDetails = ({[key: string]: {observations: string, notes: string}}|object)[]
export type SplitCompareText1 = ({text: string, className: string}|object)[][];

export interface DRE extends CLAFile {
  _isSimple: boolean
  recording1: string
  recording2: string
  speaker1: string
  speaker2: string
  transcription1: string
  transcription2: string
  splitText1: string[]
  splitText2: string[]
  splitTextColorDetails: SplitTextColorDetails
  splitCompareText1: SplitCompareText1
  splitCompareText2: string[]
}
export const dreDefaults = (): DRE => ({
  ...claFileDefaults(),
  _isSimple: false,
  recording1: '',
  recording2: '',
  speaker1: '',
  speaker2: '',
  transcription1: '',
  transcription2: '',
  splitText1: [],
  splitText2: [],
  splitTextColorDetails: [],
  splitCompareText1: [],
  splitCompareText2: [],
});

export interface DreHelper {
  set(dre: DRE, data: Partial<DRE>): DRE
}
export const dreHelper = {
  /**
   * Creates an updated DRE object
   */
  set(dre: DRE, data: Partial<DRE>): DRE {
    return {
      ...dre,
      ...data,
    };
  },
};
