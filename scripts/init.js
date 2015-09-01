module.exports = function() {

  /* ==================================================================
    DEPENDENCIES
  ================================================================== */

  var shout   = require('../functions/shout');
  var close   = require('../functions/close');
  var exe     = require('../functions/exe');            // run code synchronously
  var fsJson  = require('../functions/fs-json')         // add fields to json

  var deps    = require('../lib/dependencies');     // keys: npm, jspm, gitignore
  var scripts = require('../lib/scripts');          // keys: scripts

  var content = exe('ls -A | wc -l', true);         // checks if target directory has contents

  /* ==================================================================
    INITIALIZATION SCRIPT
  ================================================================== */

  // exit if directory not empty (!!+str)
  // +  coerces str to number
  // !! coerces 0 -> false, else -> true
  if (!!+content) { close('directory must be empty', 'red') };

  // git init
  exe('git init');

  // prompt for addition of actual remote


  // create readme
  exe('touch README.md');
  exe('printf "Create Readme" >> README.md')

  // prompted initializations

  shout('input npm fields');
  exe('npm init');

  shout('installing jspm');
  exe('npm install --save-dev jspm');

  shout('input jspm fields');
  exe('jspm init');

  shout('you may now step away and grab a drink');

  // server dependencies
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
    exe('printf "' + dep + '" >> .gitignore');
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
  fsJson('package.json', scripts);

  close('THE COFFEE HAS BEEN SPILT', 'green');

}
