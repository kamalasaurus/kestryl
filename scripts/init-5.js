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
  var appDeps    = requireDir('../assets/app');
  var serverDeps = requireDir('../assets/server');
  var clientDeps = options.withReact
    ? requireDir('../assets/react-lib')
    : requireDir('../assets/lib');
  var cssDeps    = requireDir('../assets/css');

  /* ==================================================================
    INITIALIZATION SCRIPT
  ================================================================== */

  // directories
  exe('mkdir server');
  exe('mkdir app/lib');
  exe('mkdir app/css');
  exe('mkdir app/dist');
  exe('mkdir app/assets');

  writeDir(dir, rootDeps);
  writeDir(dir + '/app', appDeps);
  writeDir(dir + '/server', serverDeps);
  writeDir(dir + '/app/lib', clientDeps);
  writeDir(dir + '/app/css', cssDeps);

  exe('git add .');
  exe('git commit -m "Welcome to Kestryl!"');

  close('project initialized', 'shout');

}
