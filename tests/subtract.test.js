'use strict';

import { describe, expect, test } from '@jest/globals';
import { subtract } from '../src/operations/subtract.js';

describe('Test for sum function', () => {
  test.each([
    [1, 2, -1],
    [-1, 1, -2],
    [-1, -3, 2],
  ])('subtract %d - %d to equal %d', (value1, value2, expected) => {
    expect(subtract(value1, value2)).toBe(expected);
  });
});
