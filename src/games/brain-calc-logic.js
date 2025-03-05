import startGame from '../index.js';
import getRandomNumber from '../utils.js';

const gameDescription = 'What is the result of the expression?';

const calculate = (num1, num2, mathSymb) => {
  const number1 = num1;
  const number2 = num2;
  const mathSign = mathSymb;
  let result;

  switch (mathSign) {
    case '+':
      result = number1 + number2;
      break;
    case '-':
      result = number1 - number2;
      break;
    case '*':
      result = number1 * number2;
      break;
    default:
      break;
  }

  return result;
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
