import inGame from '../index.js';

const gameDescription = 'What is the result of the expression?';

const generateQuestion = () => {
  const randNumber1 = Math.floor(Math.random() * 50);
  const randNumber2 = Math.floor(Math.random() * 50);
  const mathSigns = ['+', '-', '*'];
  const mathSign = mathSigns[Math.floor(Math.random() * 3)];
  let question;
  let correctAnswer;

  switch (mathSign) {
    case '+':
      question = `${randNumber1} ${mathSign} ${randNumber2}`;
      correctAnswer = randNumber1 + randNumber2;
      break;
    case '-':
      question = `${randNumber1} ${mathSign} ${randNumber2}`;
      correctAnswer = randNumber1 - randNumber2;
      break;
    case '*':
      question = `${randNumber1} ${mathSign} ${randNumber2}`;
      correctAnswer = randNumber1 * randNumber2;
      break;
    default:
      break;
  }

  return [question, String(correctAnswer)];
};

export default () => {
  inGame(gameDescription, generateQuestion);
};
