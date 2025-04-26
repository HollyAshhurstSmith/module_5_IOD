const Calculator = require('../libraries/calculator');

function getNumbers(req, res) {
  const number1 = parseFloat(req.query.num1);
  const number2 = parseFloat(req.query.num2);

  if (isNaN(number1) || isNaN(number2)) {
    res.status(400).json({ error: 'Invalid input numbers' });
    return null;
  }

  return { number1, number2 };
}

const handleOperation = (method) => (req, res) => {
  const numbers = getNumbers(req, res);
  if (!numbers) return;

  const calculator = new Calculator();

  try {
    const result = calculator[method](numbers.number1, numbers.number2);
    res.json({ id: calculator.id, result });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

module.exports = {
  add: handleOperation('add'),
  subtract: handleOperation('subtract'),
  multiply: handleOperation('multiply'),
  divide: handleOperation('divide')
};
