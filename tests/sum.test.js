'use strict';

import { describe, expect, test } from '@jest/globals';
import { sum } from '../src/operations/sum.js';

describe('Test for sum function', () => {
  test.each([
    [1, 2, 3],
    [-1, 1, 0],
    [-1, -3, -4],
  ])('adds %d + %d to equal %d', (value1, value2, expected) => {
    expect(sum(value1, value2)).toBe(expected);
  });
});
