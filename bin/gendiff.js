#!/usr/bin/env node

import { Command } from 'commander';

const program = new Command();

program
  .description('Compares two configuration files and shows a difference.')
  .version('version: 0.0.1', '-v, --vers', 'output the version number');

program.parse(process.args);
