import { isEven, power, round } from 'lib/math';

/**
 * @group math
 */
describe('lib/math', () => {
  it('power(a, b)', () => {
    expect(power(2, 1)).toEqual(2);
    expect(power(3, 3)).toEqual(27);
  });

  describe('round(value, fractionDigits)', () => {
    type TestCase = [number, number | undefined, number];
    const cases: TestCase[] = [
      [0.777, 1, 0.8],
      [0.846, 2, 0.85],
      [0.8, undefined, 1],
      [0.8, 0, 1],
      [0.8, 3, 0.8],
      [0.8, -1, 1],
    ];

    it.each(cases)(`round(value: %d, fractionDigits: %d) => %d`, (value, fractionDigits, expected) => {
      expect(round(value, fractionDigits)).toEqual(expected);
    });
  });

  describe('isEven(value)', () => {
    it('should return true if value is even', () => {
      expect(isEven(0)).toBeTruthy();
      expect(isEven(1)).toBeFalsy();
      expect(isEven(-1)).toBeFalsy();
      expect(isEven(4)).toBeTruthy();
    });
  });
});
