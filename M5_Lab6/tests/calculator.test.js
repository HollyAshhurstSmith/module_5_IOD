// also in Lab 5 with the rest of the code
const request = require('supertest');
const express = require('express');
const calculatorRoutes = require('../routes/calculatorRoutes');

// Create an app instance and use the calculator routes
const app = express();
app.use('/calculator', calculatorRoutes);

describe('Calculator Routes', () => {
  let number1;
  let number2;

  beforeEach(() => {
    number1 = Math.floor(Math.random() * 1_000) + 1; // avoid 0 for division
    number2 = Math.floor(Math.random() * 1_000) + 1;
  });

  test('GET /calculator/add => sum of numbers', () => {
    return request(app)
      .get(`/calculator/add?num1=${number1}&num2=${number2}`)
      .expect('Content-Type', /json/)
      .expect(200)
      .then((response) => {
        expect(response.body).toEqual({
          result: number1 + number2
        });
      });
  });

  test('GET /calculator/subtract => difference of numbers', () => {
    return request(app)
      .get(`/calculator/subtract?num1=${number1}&num2=${number2}`)
      .expect('Content-Type', /json/)
      .expect(200)
      .then((response) => {
        expect(response.body).toEqual({
          result: number1 - number2
        });
      });
  });

  test('GET /calculator/multiply => product of numbers', () => {
    return request(app)
      .get(`/calculator/multiply?num1=${number1}&num2=${number2}`)
      .expect('Content-Type', /json/)
      .expect(200)
      .then((response) => {
        expect(response.body).toEqual({
          result: number1 * number2
        });
      });
  });

  test('GET /calculator/divide => quotient of numbers', () => {
    return request(app)
      .get(`/calculator/divide?num1=${number1}&num2=${number2}`)
      .expect('Content-Type', /json/)
      .expect(200)
      .then((response) => {
        expect(response.body).toEqual({
          result: number1 / number2
        });
      });
  });

  test('GET /calculator/divide with 0 => returns 400 error', () => {
    return request(app)
      .get(`/calculator/divide?num1=${number1}&num2=0`)
      .expect('Content-Type', /json/)
      .expect(400)
      .then((response) => {
        expect(response.body).toEqual({
          error: 'Cannot divide by zero'
        });
      });
  });

  test('GET /calculator/add with invalid input => returns 400 error', () => {
    return request(app)
      .get(`/calculator/add?num1=abc&num2=5`)
      .expect('Content-Type', /json/)
      .expect(400)
      .then((response) => {
        expect(response.body).toEqual({
          error: 'Invalid input numbers'
        });
      });
  });
});
