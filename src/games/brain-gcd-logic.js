import { inGame } from '../index.js';

const gameDescription = 'Find the greatest common divisor of given numbers.';

const findGcd = (number1, number2) => {
    while (number2) {
        let temp = number2;
        number2 = number1 % number2;
        number1 = temp;
    }

    return number1;
}

const generateQuestion = () => {
    const number1 = Math.abs(Math.floor(Math.random() * 100));
    const number2 = Math.abs(Math.floor(Math.random() * 100));
    const question = `${number1} ${number2}`;
    const correctAnswer = findGcd(number1, number2);

    return [question, String(correctAnswer)];
}

export const brainGcd = () => {
    inGame(gameDescription, generateQuestion);
}