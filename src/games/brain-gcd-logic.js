import inGame from '../index.js';

const gameDescription = 'Find the greatest common divisor of given numbers.';

const findGcd = (number1, number2) => {
  while (number2) {
    const temp = number2;
    number2 = number1 % number2;
    number1 = temp;
  }

  return number1;
};

const generateQuestion = () => {
  const num1 = Math.abs(Math.floor(Math.random() * 100));
  const num2 = Math.abs(Math.floor(Math.random() * 100));
  const question = `${num1} ${num2}`;
  const correctAnswer = findGcd(num1, num2);

  return [question, String(correctAnswer)];
};

export default () => {
  inGame(gameDescription, generateQuestion);
};
