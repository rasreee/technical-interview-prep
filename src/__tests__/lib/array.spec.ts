import { arrayUtils } from 'lib/array';

/**
 * @group array
 */
describe('lib/array', () => {
  describe('fromSet', () => {
    it('converts set to array', () => {
      const array = [1, 3, 4];
      const set = new Set(array);
      const result = arrayUtils.fromSet(set);
      expect(result).toEqual(expect.arrayContaining(array));
    });
  });

  describe('findEquals', () => {
    it('finds item that equals given value within array', () => {
      expect(arrayUtils.findEquals([1, 2], 2)).toEqual(2);
    });
  });

  describe('sortNumbers', () => {
    it('sorts array of numbers', () => {
      expect(arrayUtils.sortNumbers([3, 2, 1])).toEqual(expect.arrayContaining([1, 2, 3]));
    });
  });
});
