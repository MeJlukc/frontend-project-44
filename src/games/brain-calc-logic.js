/* eslint-disable consistent-return */

import startGame from '../index.js';
import getRandomNumber from '../utils.js';

const gameDescription = 'What is the result of the expression?';

const calculate = (number1, number2, mathSign) => {
  switch (mathSign) {
    case '+':
      return number1 + number2;
    case '-':
      return number1 - number2;
    case '*':
      return number1 * number2;
    default:
      break;
  }
};

const generateQuestion = () => {
  const number1 = getRandomNumber(1, 50);
  const number2 = getRandomNumber(1, 50);
  const mathSigns = ['+', '-', '*'];
  const mathSign = mathSigns[getRandomNumber(0, 3)];

  const question = `${number1} ${mathSign} ${number2}`;
  const correctAnswer = calculate(number1, number2, mathSign);

  return [question, String(correctAnswer)];
};

export default () => {
  startGame(gameDescription, generateQuestion);
};
