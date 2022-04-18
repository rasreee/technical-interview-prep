import { is } from 'lib/is';

test('is number', () => {
  expect(is.number(1.2)).toBeTruthy();
  expect(is.number('20')).toBeFalsy();
});

test('is object', () => {
  expect(is.object([])).toBeFalsy();
  expect(is.object({})).toBeTruthy();
});

test('is empty', () => {
  expect(is.empty([])).toBeTruthy();
  expect(is.empty({})).toBeTruthy();
  expect(is.empty('')).toBeTruthy();
  expect(is.empty(null)).toBeTruthy();

  expect(is.empty([1, 2])).toBeFalsy();
  expect(is.empty({ a: 2 })).toBeFalsy();
  expect(is.empty('df')).toBeFalsy();
});

test('is empty object', () => {
  expect(is.emptyObject({})).toBeTruthy();
  expect(is.emptyObject({ a: 3 })).toBeFalsy();
});

test('is array', () => {
  expect(is.array([1])).toBeTruthy();
});

test('is empty array', () => {
  expect(is.emptyArray([])).toBeTruthy();
});

test('is function', () => {
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  expect(is.function(() => {})).toBeTruthy();
});

test('is defined', () => {
  expect(is.defined('1')).toBeTruthy();
});

test('is undefined', () => {
  expect(is.undefined(undefined)).toBeTruthy();
});

test('is string', () => {
  expect(is.string('1')).toBeTruthy();
});

test('should check is object is not empty', () => {
  expect(!is.emptyObject({})).toBeFalsy();
  expect(!is.emptyObject({ size: 'sm' })).toBeTruthy();
});
