#! /usr/bin/env node
'use strict'

process.title = 'carmen';

var exec = require('child_process').exec;

var child = exec('ls -a', function(err, stdout, stderr) {
  console.log(stdout);
});

