const { allSame, count, isMember } = require('../arrays');

describe('My custom array functions tests', () => {
  describe('All same function', () => {
    it('should return true if all the elements are the same', () => {
      expect(allSame([1, 1, 1, 1, 1])).toBeTruthy();
    });
    it('should return false if all the elements aren\'t the same', () => {
      expect(allSame([1, 1, 1, 1, 2])).toBeFalsy();
    });
    it('should return true if the array is empty', () => {
      expect(allSame([])).toBeTruthy();
    });
  });
  describe('Count function', () => {
    it('should return 1 if the element is contained once', () => {
      expect(count([0, 1, 2], 1)).toBe(1);
    });
    it('should return more than 1 if the element is container multiple times', () => {
      expect(count([0, 0, 0, 1, 3, 0], 0)).toBe(4);
    });
    it('should return 0 if the element is not contained', () => {
      expect(count([0, 1, 2, 3])).toBe(0);
    });
  });
  describe('Is member function', () => {
    it('should return true if the array contains the target element', () => {
      expect(isMember([0, 1, 2, 3], 3)).toBeTruthy();
    });
    it('should return false if the array doesn\'t contain the target element', () => {
      expect(isMember([0, 1, 2, 3], 4)).toBeFalsy();
    });
    it('should return false if the array is empty', () => {
      expect(isMember([], 5)).toBeFalsy();
    });
  });
});
