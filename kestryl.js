#! /usr/bin/env node
'use strict';

process.title = 'kestryl';

// utils
var contains  = require('./functions/utils').contains;
var close     = require('./functions/close');

// scripts
var init      = require('./scripts/init');
var help      = require('./scripts/help');
var version   = require('./scripts/version');
var generate  = require('./scripts/generate');
var component = require('./scripts/component');

// command-line options
var options   = require('./lib/options');


// process

var args = process.argv;

var arg = args[2];
var opt = args[3];

if (args.length === 2) {
  help();
}

if (contains(options.init.args, arg)) {
  if (contains(options.init.opts, opt)) {
    init({ withReact: true });
  } else {
    init({});
  }
} else if (contains(options.help.args, arg)) {
  help();
} else if (contains(options.version.args, arg)) {
  version();
} else if (contains(options.generate.args, arg)) {
  generate({ filename: opt });
} else if (contains(options.component.args, arg)) {
  component({ filename: opt });
} else {
  close('invalid argument', 'error');
}
