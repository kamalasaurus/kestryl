module.exports = function(options) {

  /* ==================================================================
    DEPENDENCIES
  ================================================================== */

  var say       = require('../functions/say');
  var exe       = require('../functions/exe');        // run code synchronously
  var fsJson    = require('../functions/fs-json');    // add fields to json
  var writeFile = require('../functions/write-file'); // generate files

  var deps      = require('../lib/dependencies');     // keys: npm, jspmMithril, jspmReact, gitignore
  var scripts   = require('../lib/scripts');          // keys: scripts
  var initFiles = require('./init-3');                // initialize project structure

  var dir       = exe('pwd', true);
  var readmeMD  = require('../assets/readme-md');

  /* ==================================================================
    INITIALIZATION SCRIPT
  ================================================================== */

  // create readme
  writeFile(dir, readmeMD.filename, readmeMD.file);

  // prompted initializations
  say.shout('input npm fields'.toUpperCase());
  exe('npm init');

  say.shout('installing jspm');

  // test for global jspm-cli install
  // TODO: figure out a way to get 'npm list -g jspm' to not crash
  if (!/jspm/.test(exe('npm list -g', true))) {
    exe('npm install -g jspm');
  }

  exe('npm install --save jspm');

  say.shout('input jspm fields'.toUpperCase());
  exe('jspm init');

  say.shout('you may now step away and grab a drink'.toUpperCase());

  // server dependencies
  deps.npm.forEach(function(dep) {
    exe('npm install --save ' + dep);
  });

  // client dependencies

  if (options.withReact) {
    deps.jspmReact.forEach(function(dep) {
      exe('jspm install ' + dep);
    });
  } else {
    deps.jspmMithril.forEach(function(dep) {
      exe('jspm install ' + dep);
    });
  }

  // append scripts to package.json
  fsJson('package.json', scripts);

  // create directory structure and boilerplate
  initFiles();

}
