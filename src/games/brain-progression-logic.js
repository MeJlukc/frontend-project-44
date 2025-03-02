import inGame from '../index.js';

const gameDescription = 'What number is missing in the progression?';

const generateQuestion = () => {
  const startNumber = Math.abs(Math.floor(Math.random() * 50));
  const progressiveStep = Math.abs(Math.floor((Math.random() * 5) + 2));
  const progressiveLength = (Math.abs(Math.floor(Math.random() * 4)) + 5);
  const progressiveArray = [startNumber];

  for (let i = 0; i < progressiveLength; i += 1) {
    progressiveArray.push(progressiveArray[i] + progressiveStep);
  }

  const progressiveArrayWithSkip = progressiveArray;
  const indexSkip = Math.abs(Math.floor(Math.random() * (progressiveLength - 1)));
  const correctAnswer = progressiveArray[indexSkip];
  progressiveArrayWithSkip[indexSkip] = '..';
  const question = progressiveArrayWithSkip.join(' ');

  return [question, String(correctAnswer)];
};

export default () => {
  inGame(gameDescription, generateQuestion);
};
