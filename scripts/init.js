module.exports = function() {

  /* ==================================================================
    DEPENDENCIES
  ================================================================== */

  var close    = require('../functions/close');
  var exe      = require('../functions/exe');          // run code synchronously

  var addGit   = require('../scripts/add-git');        // add a git repo after initializing init

  var content  = exe('ls -A | wc -l', true);           // checks if target directory has contents

  /* ==================================================================
    INITIALIZATION SCRIPT
  ================================================================== */

  // exit if directory not empty (!!+str)
  // +  coerces str to number
  // !! coerces 0 -> false, else -> true
  if (!!+content) { close('directory must be empty', 'error') };

  // git init
  exe('git init');

  // prompt for addition of actual remote
  addGit();

}
