import { describe, expect, test } from '@jest/globals';
import { divide } from '../src/operations/divide.js';

describe('Test for multiply function', () => {
  test.each([
    [1, 0, Infinity],
    [1, 2, 0.5],
    [-1, 1, -1],
    [-1, -3, 1 / 3],
    [0, 1, 0],
  ])('divide %d / %d to equal %d', (value1, value2, expected) => {
    expect(divide(value1, value2)).toBe(expected);
  });
});
