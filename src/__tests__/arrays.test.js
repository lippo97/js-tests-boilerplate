const { allSame, member } = require('../arrays');

describe('My custom array functions tests', () => {
  describe('All same function', () => {
    it('should return true if all the elements are the same', () => {
      expect(allSame([1, 1, 1, 1, 1])).toBeTruthy();
    });
  });
});
