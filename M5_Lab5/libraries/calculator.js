const { v4: uuidv4 } = require('uuid');
const Logger = require('./logger');

class Calculator {
  constructor() {
    this.id = uuidv4(); // Unique ID instead of timestamp
    this.logger = new Logger(this.id); // Use external Logger
  }

  add(num1, num2) {
    const value = num1 + num2;
    this.logger.log('add', num1, num2, value);
    return value;
  }

  subtract(num1, num2) {
    const value = num1 - num2;
    this.logger.log('subtract', num1, num2, value);
    return value;
  }

  multiply(num1, num2) {
    const value = num1 * num2;
    this.logger.log('multiply', num1, num2, value);
    return value;
  }

  divide(num1, num2) {
    if (num2 === 0) {
      throw new Error('Cannot divide by zero');
    }
    const value = num1 / num2;
    this.logger.log('divide', num1, num2, value);
    return value;
  }
}

module.exports = Calculator;


