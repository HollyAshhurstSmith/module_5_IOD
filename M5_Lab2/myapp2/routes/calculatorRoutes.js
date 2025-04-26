const express = require('express');
const router = express.Router();

// Helper function to validate numbers
function getNumbers(req, res) {
  const number1 = parseFloat(req.query.num1);
  const number2 = parseFloat(req.query.num2);

  if (isNaN(number1) || isNaN(number2)) {
    res.status(400).json({ error: 'Invalid input numbers' });
    return null;
  }

  return { number1, number2 };
}

// Addition
router.get('/add', (req, res) => {
  const numbers = getNumbers(req, res);
  if (!numbers) return;

  const result = numbers.number1 + numbers.number2;
  console.log(`Adding ${numbers.number1} + ${numbers.number2} = ${result}`);
  res.json({ result });
});

// Subtraction
router.get('/subtract', (req, res) => {
  const numbers = getNumbers(req, res);
  if (!numbers) return;

  const result = numbers.number1 - numbers.number2;
  console.log(`Subtracting ${numbers.number1} - ${numbers.number2} = ${result}`);
  res.json({ result });
});

// Multiplication
router.get('/multiply', (req, res) => {
  const numbers = getNumbers(req, res);
  if (!numbers) return;

  const result = numbers.number1 * numbers.number2;
  console.log(`Multiplying ${numbers.number1} * ${numbers.number2} = ${result}`);
  res.json({ result });
});

// Division
router.get('/divide', (req, res) => {
  const numbers = getNumbers(req, res);
  if (!numbers) return;

  if (numbers.number2 === 0) {
    return res.status(400).json({ error: 'Cannot divide by zero' });
  }

  const result = numbers.number1 / numbers.number2;
  console.log(`Dividing ${numbers.number1} / ${numbers.number2} = ${result}`);
  res.json({ result });
});

module.exports = router;
