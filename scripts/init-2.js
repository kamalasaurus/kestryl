module.exports = function() {

  /* ==================================================================
    DEPENDENCIES
  ================================================================== */

  var say       = require('../functions/say');
  var exe       = require('../functions/exe');     // run code synchronously
  var fsJson    = require('../functions/fs-json'); // add fields to json
  var writeFile = require('../functions/write-file'); // generate files

  var deps      = require('../lib/dependencies');  // keys: npm, jspm, gitignore
  var scripts   = require('../lib/scripts');       // keys: scripts
  var initFiles = require('./init-3');             // initialize project structure

  var dir       = exe('pwd', true);
  var readme    = require('../assets/readme-md');

  /* ==================================================================
    INITIALIZATION SCRIPT
  ================================================================== */

  // create readme
  writeFile(dir, readmeMD.filename, readmeMD.file);

  // prompted initializations
  say.shout('input npm fields'.toUpperCase());
  exe('npm init');

  say.shout('installing jspm');
  exe('npm install --save-dev jspm');

  say.shout('input jspm fields'.toUpperCase());
  exe('jspm init');

  say.shout('you may now step away and grab a drink'.toUpperCase());

  // server dependencies
  deps.npm.forEach(function(dep) {
    exe('npm install --save-dev ' + dep);
  });

  // client dependencies
  deps.jspm.forEach(function(dep) {
    exe('jspm install ' + dep);
  });

  // append scripts to package.json
  fsJson('package.json', scripts);

  // create directory structure and boilerplate
  initFiles();

}
