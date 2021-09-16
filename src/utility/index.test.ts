import {numberFormatter} from "./index";

describe('Test Utilities', () => {
  describe('format number', () => {
    it('can ignore formatting <999', () => {
      expect(numberFormatter(800)).toEqual(800);
    })

    it('can format thousands', () => {
      expect(numberFormatter(3000)).toEqual("3K");
    })

    it('can format millions', () => {
      expect(numberFormatter(3000000)).toEqual("3M");
    });

  });
});