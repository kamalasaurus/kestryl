module.exports = function(options) {

  /* ==================================================================
    DEPENDENCIES
  ================================================================== */

  var exe       = require('../functions/exe');
  var say       = require('../functions/say');

  var writeFile = require('../functions/write-file');
  var index     = require('../assets/app/dist-index-html')

  /* ==================================================================
    GENERATION SCRIPT
  ================================================================== */

  var dirTester  = /\.kestryl/
  var isKestryl  = dirTester.test(exe('ls -a', true));

  if (!isKestryl) { 
    say.error('not a kestryl root directory');
    return;
  }

  exe('jspm bundle-sfx lib/main app/dist/build.js --minify');

  writeFile('app/dist', index.filename, index.file);
  say.say('created index.html for compiled output into app/dist');
  say.say('deploy by moving app/dist/* into your production deployment folder');
  say.say('might want to make sure all your analytics and other dependencies are included in the new html index.')
  say.say('TODO: include manual dependencies in the html build process')

}