module.exports = function() {

  /* ==================================================================
    DEPENDENCIES
  ================================================================== */

  var requireDir = require('require-dir');

  var close      = require('../functions/close');
  var exe        = require('../functions/exe');        // run code synchronously
  var writeFile  = require('../functions/write-file'); // generate files

  var readme     = require('../assets/readme');
  var gitconfig  = require('../assets/gitconfig');
  var gitignore  = require('../assets/gitignore');
  var indexHTML  = require('../assets/index-html');

  var dir        = exe('pwd', true);

  /* ==================================================================
    INITIALIZATION SCRIPT
  ================================================================== */

  // .gitconfig
  writeFile(dir, gitconfig.filename, gitconfig.file);

  // .gitignore
  writeFile(dir, gitignore.filename, gitignore.file);

  // directories
  exe('mkdir server');
  exe('mkdir lib');
  exe('mkdir dist');

  writeFile(dir, indexHTML.filename, indexHTML.file);

  exe('touch server/request.js');
  exe('touch server/server.js');
  exe('touch server/mongo.js');

  exe('touch lib/main.js');
  exe('touch lib/app.jsx');

  exe('touch index.js');

  exe('git add .');
  exe('git commit -m "Welcome to Carmen!"');

  close('project initialized', 'shout');

}