import readlineSync from 'readline-sync';
import { STATUS_END } from './constants/statuses.js';

export default (user, play) => {
  const infinityLoop = true;
  while (infinityLoop) {
    const { status, round } = play();
    if (STATUS_END === status) {
      console.log(`Congratulations, ${user}!`);
      return;
    }

    const { question, correctAnswer } = round;
    console.log(question);
    const answer = readlineSync.question('Your answer: ');
    if (correctAnswer === answer) {
      console.log(`Correct, ${user}!`);
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${user}!`);
      return;
    }
  }
};
