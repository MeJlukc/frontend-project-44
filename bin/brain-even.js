import { question } from "readline-sync";

// Описываем функцию проверки корректности ответа
const isRight = (userAnswer, number) => {
    if (userAnswer === 'yes' | userAnswer === 'no') {
        if (userAnswer === 'yes' && number % 2 === 0) {
            return true;
        } else if (userAnswer === 'no' && number % 2 !== 0) {
            return true;
        }
    }

    return false;
};

// Временно
let name = 'yarik';
//

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
            console.log(`Congratulations, ${name}`);
            break;
        }
    } else {
        isCorrect = false;
        console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'\nLet's try again, ${name}`);
    }
}