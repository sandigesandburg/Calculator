import { describe, expect, test } from '@jest/globals';
import { Calculator } from '../src/calculator.js';

describe('Test for Calculator', () => {
  function sum(value1, value2) {
    return value1 + value2;
  }

  test('"no input" => "0"', () => {
    const calculator = new Calculator();
    expect(calculator.input()).toBe(0);
  });

  test('"123" => "132"', () => {
    const calculator = new Calculator();
    calculator.setInput(123);
    expect(calculator.input()).toBe(123);
  });

  test('"123" "+" => "123"', () => {
    const calculator = new Calculator();
    calculator.setInput(123);
    calculator.setFunction(sum);
    expect(calculator.input()).toBe(123);
  });

  test('"2" "=" => "2"', () => {
    const calculator = new Calculator();
    calculator.setInput(2);
    calculator.calculate();
    expect(calculator.input()).toBe(2);
  });

  test('"2" "+" "=" => "4"', () => {
    const calculator = new Calculator();
    calculator.setInput(2);
    calculator.setFunction(sum);
    calculator.calculate();
    expect(calculator.input()).toBe(4);
  });

  test('"2" "-" "=" => "0"', () => {
    const calculator = new Calculator();
    calculator.setInput(2);
    calculator.setFunction((v1, v2) => v1 - v2);
    calculator.calculate();
    expect(calculator.input()).toBe(0);
  });

  test('"2" "+" "3" => "3"', () => {
    const calculator = new Calculator();
    calculator.setInput(2);
    calculator.setFunction(sum);
    calculator.setInput(3);
    expect(calculator.input()).toBe(3);
  });

  test('"2" "+" "3" "=" => "5"', () => {
    const calculator = new Calculator();
    calculator.setInput(2);
    calculator.setFunction(sum);
    calculator.setInput(3);
    calculator.calculate();
    expect(calculator.input()).toBe(5);
  });

  test('"2" "+" "3" "=" "=" => "8"', () => {
    const calculator = new Calculator();
    calculator.setInput(2);
    calculator.setFunction(sum);
    calculator.setInput(3);
    calculator.calculate();
    calculator.calculate();
    expect(calculator.input()).toBe(8);
  });

  test('"2" "+" "3" "+" => "5"', () => {
    const calculator = new Calculator();
    calculator.setInput(2);
    calculator.setFunction(sum);
    calculator.setInput(3);
    calculator.setFunction(sum);
    expect(calculator.input()).toBe(5);
  });

  test('"2" "+" "3" "delete" => "0"', () => {
    const calculator = new Calculator();
    calculator.setInput(2);
    calculator.setFunction(sum);
    calculator.setInput(3);
    calculator.delete();
    expect(calculator.input()).toBe(0);
  });

  test('"2" "+" "4" "=" "delete" "3" "=" => "7"', () => {
    const calculator = new Calculator();
    calculator.setInput(2);
    calculator.setFunction(sum);
    calculator.setInput(4);
    calculator.calculate();
    calculator.delete();
    calculator.setInput(3);
    calculator.calculate();
    expect(calculator.input()).toBe(7);
  });

  test('"2" "+" "4" "=" "delete" "3" "+" "1" "=" => "4"', () => {
    const calculator = new Calculator();
    calculator.setInput(2);
    calculator.setFunction(sum);
    calculator.setInput(4);
    calculator.calculate();
    calculator.delete();
    calculator.setInput(3);
    calculator.setFunction(sum);
    calculator.setInput(1);
    calculator.calculate();
    expect(calculator.input()).toBe(4);
  });

  test('"2" "+" "3" "=" "+" "=" => "10"', () => {
    const calculator = new Calculator();
    calculator.setInput(2);
    calculator.setFunction(sum);
    calculator.setInput(3);
    calculator.calculate();
    calculator.setFunction(sum);
    calculator.calculate();
    expect(calculator.input()).toBe(10);
  });

  test('"2" "+" "3" "+" "=" => "10"', () => {
    const calculator = new Calculator();
    calculator.setInput(2);
    calculator.setFunction(sum);
    calculator.setInput(3);
    calculator.setFunction(sum);
    calculator.calculate();
    expect(calculator.input()).toBe(10);
  });
});
