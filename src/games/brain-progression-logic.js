import startGame from '../index.js';
import getRandomNumber from '../utils.js';

const gameDescription = 'What number is missing in the progression?';

const generateArray = (startNum, step, len) => {
  const startNumber = startNum;
  const arrayStep = step;
  const arrayLength = len;
  const array = [startNumber];

  for (let i = 0; i < arrayLength; i += 1) {
    array.push(array[i] + arrayStep);
  }

  return array;
};

const generateQuestion = () => {
  const startNumber = getRandomNumber(1, 50);
  const arrayStep = getRandomNumber(1, 5) + 2;
  const arrayLength = getRandomNumber(5, 10) + 5;

  const readyArray = generateArray(startNumber, arrayStep, arrayLength);
  const indexSkip = getRandomNumber(0, arrayLength - 1);
  const correctAnswer = readyArray[indexSkip];
  readyArray[indexSkip] = '..';
  const question = readyArray.join(' ');

  return [question, String(correctAnswer)];
};

export default () => {
  startGame(gameDescription, generateQuestion);
};
