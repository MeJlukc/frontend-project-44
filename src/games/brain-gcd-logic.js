import inGame from '../index.js';

const gameDescription = 'Find the greatest common divisor of given numbers.';

const findGcd = (number1, number2) => {
  let a = number1;
  let b = number2;

  while (b) {
    const temp = b;
    b = a % b;
    a = temp;
  }

  return a;
};

const generateQuestion = () => {
  const number1 = Math.abs(Math.floor(Math.random() * 100));
  const number2 = Math.abs(Math.floor(Math.random() * 100));
  const question = `${number1} ${number2}`;
  const correctAnswer = findGcd(number1, number2);

  return [question, String(correctAnswer)];
};

export default () => {
  inGame(gameDescription, generateQuestion);
};
