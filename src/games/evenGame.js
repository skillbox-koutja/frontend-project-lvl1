import _ from 'lodash';
import { STATUS_END, STATUS_NEXT_ROUND } from '../constants/statuses.js';

const DEFAULT_COUNT_ROUNDS = 3;
const MIN_NUMBER = 1;
const MAX_NUMBER = 100;
const isEven = (num) => num % 2 === 0;
const createRound = (num) => {
  const question = `Question: ${num}`;
  const correctAnswer = isEven(num) ? 'yes' : 'no';
  return {
    question,
    correctAnswer,
  };
};

export const createNumbers = (config = {}) => {
  const {
    rounds = DEFAULT_COUNT_ROUNDS,
    min = MIN_NUMBER,
    max = MAX_NUMBER,
  } = config;
  return _.sampleSize(_.range(min, max), rounds);
};

export const createGame = (numbers) => {
  const rounds = numbers.slice();

  return () => {
    const num = rounds.pop();
    if (typeof num === 'undefined') {
      return {
        status: STATUS_END,
      };
    }

    return {
      status: STATUS_NEXT_ROUND,
      round: createRound(num),
    };
  };
};
