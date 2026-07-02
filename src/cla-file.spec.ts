import { ClaFileType } from './constants';
import { claFileDefaults, claFileHelper } from './cla-file';
import type { CLAFile } from './cla-file';

/** Builds a minimal CLAFile with extra duck-typing discriminator fields mixed in */
const makeFile = (extra: Record<string, unknown> = {}): CLAFile =>
  ({ ...claFileDefaults(), ...extra } as CLAFile);

describe('claFileHelper', () => {
  describe('claFileType', () => {
    it('classifies a bare CLAFile (no recordings, no _isPE) as CULTURE_EVENT', () => {
      expect(claFileHelper.claFileType(makeFile())).toBe(ClaFileType.CULTURE_EVENT);
    });

    it('classifies _isPE: true (no recordings) as PE', () => {
      expect(claFileHelper.claFileType(makeFile({ _isPE: true }))).toBe(ClaFileType.PE);
    });

    it('classifies _isPE: false (no recordings) as CULTURE_EVENT', () => {
      expect(claFileHelper.claFileType(makeFile({ _isPE: false }))).toBe(ClaFileType.CULTURE_EVENT);
    });

    it('classifies recording1 + recording2 as DRE', () => {
      expect(claFileHelper.claFileType(makeFile({ recording1: 'a.mp3', recording2: 'b.mp3' }))).toBe(ClaFileType.DRE);
    });

    it('classifies recording1 + recording2 + _isSimple: true as SIMPLE_DRE', () => {
      expect(claFileHelper.claFileType(makeFile({ recording1: 'a.mp3', recording2: 'b.mp3', _isSimple: true })))
        .toBe(ClaFileType.SIMPLE_DRE);
    });

    it('classifies recording1 + recording2 + _isSimple: false as DRE', () => {
      expect(claFileHelper.claFileType(makeFile({ recording1: 'a.mp3', recording2: 'b.mp3', _isSimple: false })))
        .toBe(ClaFileType.DRE);
    });

    it('discriminates on property presence, so empty-string recordings still classify as DRE', () => {
      expect(claFileHelper.claFileType(makeFile({ recording1: '', recording2: '' }))).toBe(ClaFileType.DRE);
    });

    it('requires BOTH recording1 and recording2; only one present falls through to CULTURE_EVENT', () => {
      expect(claFileHelper.claFileType(makeFile({ recording1: 'a.mp3' }))).toBe(ClaFileType.CULTURE_EVENT);
      expect(claFileHelper.claFileType(makeFile({ recording2: 'b.mp3' }))).toBe(ClaFileType.CULTURE_EVENT);
    });

    it('recordings take precedence over _isPE (recording1/recording2 + _isPE is a DRE)', () => {
      expect(claFileHelper.claFileType(makeFile({ recording1: 'a.mp3', recording2: 'b.mp3', _isPE: true })))
        .toBe(ClaFileType.DRE);
    });
  });

  describe('predicates', () => {
    const ce = makeFile();
    const pe = makeFile({ _isPE: true });
    const dre = makeFile({ recording1: 'a.mp3', recording2: 'b.mp3' });
    const simpleDre = makeFile({ recording1: 'a.mp3', recording2: 'b.mp3', _isSimple: true });

    it('isCE is true only for a CultureEvent', () => {
      expect(claFileHelper.isCE(ce)).toBe(true);
      expect(claFileHelper.isCE(pe)).toBe(false);
      expect(claFileHelper.isCE(dre)).toBe(false);
      expect(claFileHelper.isCE(simpleDre)).toBe(false);
    });

    it('isPE is true only for a PE', () => {
      expect(claFileHelper.isPE(pe)).toBe(true);
      expect(claFileHelper.isPE(ce)).toBe(false);
      expect(claFileHelper.isPE(dre)).toBe(false);
      expect(claFileHelper.isPE(simpleDre)).toBe(false);
    });

    it('isDRE is true only for a full DRE', () => {
      expect(claFileHelper.isDRE(dre)).toBe(true);
      expect(claFileHelper.isDRE(simpleDre)).toBe(false);
      expect(claFileHelper.isDRE(ce)).toBe(false);
      expect(claFileHelper.isDRE(pe)).toBe(false);
    });

    it('isSimpleDRE is true only for a SimpleDRE', () => {
      expect(claFileHelper.isSimpleDRE(simpleDre)).toBe(true);
      expect(claFileHelper.isSimpleDRE(dre)).toBe(false);
      expect(claFileHelper.isSimpleDRE(ce)).toBe(false);
      expect(claFileHelper.isSimpleDRE(pe)).toBe(false);
    });

    it('isAnyCE is true for CultureEvent and PE, false for DRE variants', () => {
      expect(claFileHelper.isAnyCE(ce)).toBe(true);
      expect(claFileHelper.isAnyCE(pe)).toBe(true);
      expect(claFileHelper.isAnyCE(dre)).toBe(false);
      expect(claFileHelper.isAnyCE(simpleDre)).toBe(false);
    });

    it('isAnyDRE is true for DRE and SimpleDRE, false for CE variants', () => {
      expect(claFileHelper.isAnyDRE(dre)).toBe(true);
      expect(claFileHelper.isAnyDRE(simpleDre)).toBe(true);
      expect(claFileHelper.isAnyDRE(ce)).toBe(false);
      expect(claFileHelper.isAnyDRE(pe)).toBe(false);
    });
  });

  describe('set', () => {
    it('merges partial data over an existing CLAFile without mutating it', () => {
      const file = claFileDefaults();
      const updated = claFileHelper.set(file, { title: 'Market day', fileNumber: 42 });
      expect(updated.title).toBe('Market day');
      expect(updated.fileNumber).toBe(42);
      expect(file.title).toBe('');
      expect(file.fileNumber).toBe(0);
    });
  });
});
