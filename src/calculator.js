'use strict';

export class Calculator {
  constructor() {
    this.reset();
  }

  calculate() {
    if (this._isNewInput) {
      this._memory = this._input;
    }
    const copyInput = this._input;
    this._input = this._function(this._input, this._memory);
    this._memory = copyInput;
    this._doCalculation = false;
  }

  delete() {
    this._input = 0;
  }

  input() {
    return this._input;
  }

  setFunction(func = (v1) => v1) {
    this._function = func;

    if (this._doCalculation) {
      this.calculate();
    }

    this._isNewInput = true;
    this._doCalculation = true;
  }

  setInput(number) {
    if (this._isNewInput) {
      this._memory = this._input;
      this._isNewInput = false;
    }
    this._input = number;
  }

  reset() {
    this._doCalculation = false;
    this._function = (value1) => value1;
    this._input = 0;
    this._isNewInput = false;
    this._memory = 0;
  }
}
