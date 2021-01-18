import { formatToTimeDisplayed } from '../utils';

describe('formatting tests for', () => {
  describe('formatToTimeDisplayed', () => {
    it('should return string with : symbol for a specific amount of seconds', () => {
      expect(formatToTimeDisplayed(124)).toEqual('2:04');
    });
  });
});
