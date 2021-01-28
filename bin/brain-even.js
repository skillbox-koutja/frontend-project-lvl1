#!/usr/bin/env node

import cli from '../src/cli.js';
import { createNumbers, createGame } from '../src/games/evenGame.js';

const numbers = createNumbers();
const game = createGame(numbers);
cli(game);
