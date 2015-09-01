#! /usr/bin/env node
'use strict';

process.title = 'carmen';

var chalk    = require('chalk');

// utils
var contains = require('./utils/contains');

// scripts
var init     = require('./scripts/init');
var help     = require('./scripts/help');
var version  = require('./scripts/version');

// command-line options
var options  = require('./lib/options');

var args = process.argv;
var arg = args[2];

if (args.length > 3) {
  console.log(chalk.bold.red('too many arguments'));
  process.exit(1);
}

if (args.length === 2) {
  help();
  process.exit(1);
}

if        (contains(options.init, arg))    {
  init();
} else if (contains(options.help, arg))    {
  help();
} else if (contains(options.version, arg)) {
  version();
} else {
  console.log(chalk.bold.red('invalid argument'));
  process.exit(1);
}
