import {numberFormatter} from "./index";

describe('Test Utilities', () => {
  describe('format number', () => {
    it('can format thousands', () => {
      expect(numberFormatter(3000)).toEqual("3K");
    })

    it('handles LOGIN', () => {
      
      
    });

    it('handles SET_SEARCH_QUERY', () => {
      
    });
  });
});