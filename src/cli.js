import readlineSync from 'readline-sync';

export default function cli() {
    console.log('Welcome to the Brain Games!');
    const name = readlineSync.question('Your answer: ');
    console.log(`Hello, ${name}!`);
}