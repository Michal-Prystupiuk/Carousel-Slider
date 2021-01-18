import { formatToTimeDisplayed } from '../utils';

describe('formatting tests for', () => {
  describe('formatToTimeDisplayed', () => {
    it('should return string starting with "0:0" symbol for the time < 10sec', () => {
      expect(formatToTimeDisplayed(0)).toEqual('0:00');
      expect(formatToTimeDisplayed(2)).toEqual('0:02');
      expect(formatToTimeDisplayed(9)).toEqual('0:09');
    });

    it('should return string containing ":0" symbol for the amount of sec < 10', () => {
      expect(formatToTimeDisplayed(62)).toEqual('1:02');
      expect(formatToTimeDisplayed(124)).toEqual('2:04');
      expect(formatToTimeDisplayed(300)).toEqual('5:00');
    });

    it('should return string containing ":" symbol for the amount of sec > 10', () => {
      expect(formatToTimeDisplayed(70)).toEqual('1:10');
      expect(formatToTimeDisplayed(154)).toEqual('2:34');
      expect(formatToTimeDisplayed(359)).toEqual('5:59');
    });

    it('should return "0:00" for a null or undefined amount of sec', () => {
      expect(formatToTimeDisplayed(null)).toEqual('0:00');
      expect(formatToTimeDisplayed(undefined)).toEqual('0:00');
    });
  });
});
