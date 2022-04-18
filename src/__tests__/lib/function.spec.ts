import { runIf } from 'lib/function';

/**
 * @group lib
 * @group function
 */
describe('lib/function', () => {
  describe('runIf(predicate, fn, ...args)', () => {
    it('should run function if function or else return value', () => {
      const makeMockFn = (result = 1) => jest.fn(() => result);

      let mockFn = makeMockFn();
      let result = runIf(false, mockFn);
      expect(result).toStrictEqual(false);
      expect(mockFn).not.toHaveBeenCalled();

      mockFn = makeMockFn();
      result = runIf(true, mockFn);
      expect(result).toStrictEqual(1);
      expect(mockFn).toHaveBeenCalled();
    });
  });
});
