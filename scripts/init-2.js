module.exports = function(options) {

  /* ==================================================================
    DEPENDENCIES
  ================================================================== */

  var say       = require('../functions/say');
  var exe       = require('../functions/exe');        // run code synchronously
  var writeFile = require('../functions/write-file'); // generate files

  var initJspm = require('./init-3');                 // initialize project structure

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

  if (!/babel/.test(exe('npm list -g', true))) {
    exe('npm install -g babel');
    exe('npm install -g babel-cli');
  }

  exe('npm install --save jspm');

  exe('npm install --save-dev babel-preset-es2015');

  if (options.withReact) {
    exe('npm install --save-dev babel-preset-react');
  }

  say.shout('you may now step away and grab a drink'.toUpperCase());

  initJspm(options);

}
