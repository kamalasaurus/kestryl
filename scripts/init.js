module.exports = function() {

  /* ==================================================================
    DEPENDENCIES
  ================================================================== */

  var chalk   = require('chalk');

  var close   = require('./close');
  var exe     = require('./exe');               // run code synchronously
  var deps    = require('../lib/dependencies'); // keys: npm, jspm, gitignore
  var scripts = require('../lib/scripts');      // keys: scripts

  /* ==================================================================
    INITIALIZATION SCRIPT
  ================================================================== */

  // git init
  exe('git init');

  // prompt for addition of actual remote


  // prompted initializations
  exe('npm init');
  exe('npm install --save-dev jspm');
  exe('jspm init');

  console.log(chalk.bold.green('YOU MAY NOW STEP AWAY AND GRAB A DRINK'));

  // server dependencies
  exe('touch README.md');
  deps.npm.forEach(function(dep) {
    exe('npm install --save-dev ' + dep);
  });

  // client dependencies
  deps.jspm.forEach(function(dep) {
    exe('jspm install ' + dep);
  });

  // .gitignore
  exe('touch .gitignore');
  deps.gitignore.forEach(function(dep) {
    exe('echo "' + dep + '" >> .gitignore');
  });

  // create directory structure and boilerplate
  exe('mkdir server');
  exe('mkdir dist');
  exe('touch server/request.js');
  exe('touch server/server.js');
  exe('touch server/mongo.js');
  exe('touch index.js');
  exe('touch index.html');

  // append scripts to package.json


  close('THE COFFEE HAS BEEN SPILT', 'green');

}