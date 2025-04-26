class Logger {
    constructor(calculatorId) {
      this.calculatorId = calculatorId;
    }
  
    log(operation, num1, num2, result) {
      const timestamp = new Date().toISOString();
      console.log(`[${timestamp}] [Calculator:${this.calculatorId}] ${operation.toUpperCase()} - ${num1} & ${num2} = ${result}`);
    }
  }
  
  module.exports = Logger;
  