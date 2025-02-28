import { userName } from "../../bin/brain-games.js";
import { question } from "readline-sync";

const isRight = (userAnswer, correctAnswer) => {
    if (userAnswer === correctAnswer) {
        return true;
    }

    return false;
}

export const brainCalc = () => {
    console.log('What is the result of the expression?');

    let i = 0;
    let isCorrect = true;
    const mathSigns = ['+', '-', '*'];
    let correctAnswer;
    while (isCorrect) {

        const randNumber1 = Math.floor(Math.random() * 50);
        const randNumber2 = Math.floor(Math.random() * 50);
        const mathSign = mathSigns[Math.floor(Math.random() * 3)];

        switch (mathSign) {
            case '+':
                console.log(`Question: ${randNumber1} ${mathSign} ${randNumber2}`);
                correctAnswer = randNumber1 + randNumber2;
                break;
            case '-':
                console.log(`Question: ${randNumber1} ${mathSign} ${randNumber2}`);
                correctAnswer = randNumber1 - randNumber2;
                break;
            case '*':
                console.log(`Question: ${randNumber1} ${mathSign} ${randNumber2}`);
                correctAnswer = randNumber1 * randNumber2;
                break;
        }

        const userAnswer = question('Your Answer: ');
        if (isRight(Number(userAnswer), correctAnswer)) {
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