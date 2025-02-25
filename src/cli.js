import { question } from "readline-sync";

export default () => {
    const userName = question('May I have your name? ');
    console.log(`Hello, ${userName}`);

    return;
}