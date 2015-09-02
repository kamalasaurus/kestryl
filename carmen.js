#! /usr/bin/env node
'use strict';

process.title = 'carmen';

// utils
var contains = require('./functions/utils').contains;
var close    = require('./functions/close');

// scripts
var init     = require('./scripts/init');
var help     = require('./scripts/help');
var version  = require('./scripts/version');

// command-line options
var options  = require('./lib/options');

var args = process.argv;
var arg = args[2];

if (args.length > 3) {
  close('too many arguments', 'error');
}

if (args.length === 2) {
  help();
}

contains(options.init.args, arg)    ? init()    : void(0);
contains(options.help.args, arg)    ? help()    : void(0);
contains(options.version.args, arg) ? version() : void(0);

close('invalid argument', 'error');
