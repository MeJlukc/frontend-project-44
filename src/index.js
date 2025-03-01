import readline from "readline-sync";

export const inGame = (gameDescription, generateQuestion) => {
    const roundsCounts = 3;

    console.log('Welcome to the Brain Games!');
    const userName = readline.question('May I have your name? ');
    console.log(`Hello, ${userName}!`);

    console.log(gameDescription);

    for (let i = 0; i < roundsCounts; i++) {
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

    return;
}