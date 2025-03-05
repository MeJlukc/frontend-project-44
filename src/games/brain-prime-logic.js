import startGame from '../index.js';
import getRandomNumber from '../utils.js';

const gameDescription = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (number) => {
  if (number === 1) return true;

  for (let i = 2; i < number; i += 1) {
    if (number % i === 0) return false;
  }

  return true;
};

const generateQuestion = () => {
  const number = getRandomNumber(1, 199);
  const correctAnswer = (isPrime(number) ? 'yes' : 'no');

  return [number, String(correctAnswer)];
};

export default () => {
  startGame(gameDescription, generateQuestion);
};
