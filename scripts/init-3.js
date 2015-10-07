module.exports = function(options) {

  /* ==================================================================
    DEPENDENCIES
  ================================================================== */

  var requireDir = require('require-dir');

  var close      = require('../functions/close');
  var exe        = require('../functions/exe');        // run code synchronously
  var writeDir   = require('../functions/write-dir');

  var dir        = exe('pwd', true);

  /* ==================================================================
    ASSETS
  ================================================================== */

  var rootDeps   = requireDir('../assets/root');
  var serverDeps = requireDir('../assets/server');
  var clientDeps = options.withReact
    ? requireDir('../assets/react-lib')
    : requireDir('../assets/lib');

  /* ==================================================================
    INITIALIZATION SCRIPT
  ================================================================== */

  // directories
  exe('mkdir server');
  exe('mkdir lib');
  exe('mkdir dist');

  writeDir(dir, rootDeps);
  writeDir(dir + '/server', serverDeps);
  writeDir(dir + '/lib', clientDeps);

  exe('git add .');
  exe('git commit -m "Welcome to Kestryl!"');

  close('project initialized', 'shout');

}
