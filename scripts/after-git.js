module.exports = function() {

  /* ==================================================================
    DEPENDENCIES
  ================================================================== */

  var say       = require('../functions/say');
  var close     = require('../functions/close');
  var exe       = require('../functions/exe');        // run code synchronously
  var fsJson    = require('../functions/fs-json');    // add fields to json
  var writeFile = require('../functions/write-file'); // generate files

  var deps      = require('../lib/dependencies');     // keys: npm, jspm, gitignore
  var scripts   = require('../lib/scripts');          // keys: scripts

  var dir       = exe('pwd', true);
  var readme    = require('../assets/readme');
  var gitconfig = require('../assets/gitconfig');
  var gitignore = require('../assets/gitignore');

  /* ==================================================================
    INITIALIZATION SCRIPT
  ================================================================== */

  // create readme
  writeFile(dir, readme.filename, readme.file);

  // .gitconfig
  writeFile(dir, gitconfig.filename, gitconfig.file);

  // .gitignore
  writeFile(dir, gitignore.filename, gitignore.file);

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

  close('project initialized', 'shout');
}