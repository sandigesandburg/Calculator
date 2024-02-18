'use strict';

import { describe, expect, test } from '@jest/globals';
import { multiply } from '../src/operations/multiply.js';

describe('Test for multiply function', () => {
  test.each([
    [1, 0, 0],
    [1, 2, 2],
    [-1, 1, -1],
    [-1, -3, 3],
  ])('multiply %d * %d to equal %d', (value1, value2, expected) => {
    expect(multiply(value1, value2)).toBe(expected);
  });
});
