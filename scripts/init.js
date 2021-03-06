module.exports = function(options) {

  /* ==================================================================
    DEPENDENCIES
  ================================================================== */

  var close     = require('../functions/close');
  var exe       = require('../functions/exe');   // run code synchronously

  var addGit    = require('../scripts/init-1');  // add a git repo after initializing init

  var content   = exe('ls -A | wc -l', true);    // checks if target directory has contents

  /* ==================================================================
    INITIALIZATION SCRIPT
  ================================================================== */

  // exit if directory not empty (!!+str)
  // +  coerces str to number
  // !! coerces 0 -> false, else -> true
  if (!!+content) { close('directory must be empty', 'error') };

  // create kestryl config file
  // TODO: actually add the config list (react vs. mithril primarily)
  exe('touch .kestryl');
  exe('touch .babelrc');

  if (options.withReact) {
    exe('echo "react" >> .kestryl');
  } else {
    exe('echo "mithril" >> .kestryl');
  }

  // create babelrc
  if (options.withReact) {
    exe('echo \'{ \"presets\": [\"es2015\", \"stage-0\", \"react\"] }\' >> .babelrc');
  } else {
    exe('echo \'{ \"presets\": [\"es2015\", \"stage-0\"] }\' >> .babelrc');
  }

  // git init
  exe('git init');

  // prompt for addition of actual remote
  addGit(options);

}
