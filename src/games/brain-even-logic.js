import startGame from '../index.js';
import getRandomNumber from '../utils.js';

const gameDescription = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (num) => (num % 2 === 0 ? 'yes' : 'no');

const generateQuestion = () => {
  const number = getRandomNumber(0, 100);
  const correctAnswer = isEven(number);

  return [number, correctAnswer];
};

export default () => {
  startGame(gameDescription, generateQuestion);
};
