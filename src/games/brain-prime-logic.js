import { inGame } from '../index.js';

const gameDescription = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (number) => {
  if (number === 1) return 'yes';

  for (let i = 2; i < number; i++) {
    if (number % i === 0) return 'no';
  }

  return 'yes';
};

const generateQuestion = () => {
  const number = Math.abs(Math.floor((Math.random() * 199) + 1));
  const correctAnswer = isPrime(number);

  return [number, String(correctAnswer)];
};

export const brainPrime = () => {
  inGame(gameDescription, generateQuestion);
};
