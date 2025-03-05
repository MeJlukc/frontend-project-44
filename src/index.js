import readline from 'readline-sync';

const roundsCount = 3;

export default (gameDescription, generateQuestion) => {
  console.log('Welcome to the Brain Games!');
  const userName = readline.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);

  console.log(gameDescription);

  for (let i = 0; i < roundsCount; i += 1) {
    const [question, correctAnswer] = generateQuestion();

    console.log(`Question: ${question}`);
    const userAnswer = readline.question('Your answer: ');

    if (userAnswer !== correctAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${userName}!`);
      return;
    }

    console.log('Correct!');
  }

  console.log(`Congratulations, ${userName}!`);
};
