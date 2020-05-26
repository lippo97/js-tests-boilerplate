const { fibonacci } = require('../example.js');

describe('My example module testing', () => {
  it('should compute properly fibonacci of 10', () => {
    expect(fibonacci(10)).toBe(55);
  });
});
