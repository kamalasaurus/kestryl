#! /usr/bin/env node
'use strict';

process.title = 'carmen';

var chalk    = require('chalk');

// utils
var contains = require('./utils/contains');

// scripts
var close    = require('./scripts/close');
var init     = require('./scripts/init');
var help     = require('./scripts/help');
var version  = require('./scripts/version');

// command-line options
var options  = require('./lib/options');

var args = process.argv;
var arg = args[2];

if (args.length > 3) {
  close('too many arguments', 'red');
}

if (args.length === 2) {
  help();
}

contains(options.init, arg)    ? init()    : void(0);
contains(options.help, arg)    ? help()    : void(0);
contains(options.version, arg) ? version() : void(0);

close('invalid argument', 'red');
