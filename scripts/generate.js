module.exports = function(options) {

  /* ==================================================================
    DEPENDENCIES
  ================================================================== */

  var exe       = require('../functions/exe');
  var say       = require('../functions/say');

  var promise   = require('../assets/server/request-js');

  var writeFile = require('../functions/write-file');

  /* ==================================================================
    GENERATION SCRIPT
  ================================================================== */

  var fileTester = new RegExp(options.filename, 'i');
  var dirTester  = /\.kestryl/

  var filename   = options.filename + '.js'; // with file extension

  var isKestryl  = dirTester.test(exe('ls -a', true));
  var nameExists = fileTester.test(exe('ls ./server', true));

  if (!isKestryl) { 
    say.error('not a kestryl root directory');
    return;
  }

  if (nameExists) {
    say.error('file already exists');
    return;
  }

  writeFile('server', filename, promise.file);
  say.say('generated ' + filename + ' in server/');

}