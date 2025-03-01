import { inGame } from "../index.js";
/*const isRight = (userAnswer, number) => {
    if (userAnswer === 'yes' | userAnswer === 'no') {
        if (userAnswer === 'yes' && number % 2 === 0) {
            return true;
        } else if (userAnswer === 'no' && number % 2 !== 0) {
            return true;
        }
    }

    return false;
};

export const brainEven = () => {
    console.log('Answer "yes" if the number is even, otherwise answer "no".');

    let isCorrect = true;
    let i = 0;

    while (isCorrect) {
        const number = Math.floor(Math.random() * 100);
        const correctAnswer = number % 2 === 0 ? 'yes' : 'no';
        console.log(`Question: ${number}`);

        const userAnswer = question('Your answer: ');

        if (isRight(userAnswer, number)) {
            console.log('Correct!');
            i++;
            if (i === 3) {
                console.log(`Congratulations, ${userName}`);
                break;
            }
        } else {
            isCorrect = false;
            console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'\nLet's try again, ${userName}`);
        }
    }
}
*/

const gameDescription = 'Answer "yes" if the number is even, otherwise answer "no".';

const generateQuestion = () => {
    const number = Math.floor(Math.random() * 100);
    const correctAnswer = number % 2 === 0 ? 'yes' : 'no';

    return [number, correctAnswer];
}

export const brainEven = () => {
    inGame(gameDescription, generateQuestion);
}