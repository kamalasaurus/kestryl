#! /usr/bin/env node
'use strict'

process.title = 'carmen';

/* ==================================================================
  IMPORTS AND FUNCTIONALITY
================================================================== */

var chalk = require('chalk');

//synchronous is good for build scripts (megusta)
var proc = require('child_process').execSync;

//keys: npm, jspm, gitignore
var dependencies = require('./lib/dependencies');

//keys: scripts
var scripts = require('./lib/scripts');

function exe(command) {
  //allows interactive steps to pass control to the child process
  proc(command, {stdio:[0,1,2]});
}

/* ==================================================================
  INITIALIZATION SCRIPT
================================================================== */

//git init
exe('git init');

//prompt for addition of actual remote


//global dependencies
exe('npm install -g jspm');

//prompted initializations
exe('npm init');
exe('jspm init');

console.log(chalk.bold.green('YOU MAY NOW STEP AWAY AND GRAB A DRINK'));

//server dependencies
dependencies.npm.forEach(function(dep) {
  exe('npm install ' + dep);
});

//client dependencies

//.gitignore
exe('touch .gitignore');
dependencies.gitignore.forEach(function(dep) {
  exe('echo "' + dep + '" >> .gitignore');
});

//create directory structure and boilerplate

//append scripts to package.json

