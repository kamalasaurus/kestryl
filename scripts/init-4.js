module.exports = function(options) {

  /* ==================================================================
    DEPENDENCIES
  ================================================================== */

  var exe       = require('../functions/exe');
  var say       = require('../functions/say');
  var fsJson    = require('../functions/fs-json');    // add fields to json

  var deps      = require('../lib/dependencies');     // keys: npm, jspmMithril, jspmReact, gitignore
  var scripts   = require('../lib/scripts');          // keys: scripts

  var initFiles = require('../scripts/init-5');

  /* ==================================================================
    ADD PROJECT DEPENDENCIES
  ================================================================== */

  // server dependencies
  deps.npm.forEach(function(dep) {
    exe('npm install --save ' + dep);
  });

  if (options.withReach) {
    exe('npm install --save babel-preset-react');
  }

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
  initFiles(options);

}
