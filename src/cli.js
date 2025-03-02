import { question } from 'readline-sync';

export const sayHello = () => {
  console.log('Welcome to the Brain Games!');
  const name = question('May I have your name? ');
  console.log(`Hello, ${name}!`);
};
