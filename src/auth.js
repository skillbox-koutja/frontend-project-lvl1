import readlineSync from 'readline-sync';

export default () => {
  console.log('Welcome to the Brain Games!');
  const user = readlineSync.question('Your name: ');
  console.log(`Hello, ${user}!`);

  return user;
};
