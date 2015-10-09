module.exports = function(options) {

  /* ==================================================================
    DEPENDENCIES
  ================================================================== */

  var fs        = require('fs');

  var exe       = require('../functions/exe');
  var say       = require('../functions/say');

  var writeFile = require('../functions/write-file');

  /* ==================================================================
    GENERATION SCRIPT
  ================================================================== */

  var fileTester = new RegExp(options.filename, 'i');
  var dirTester  = /\.kestryl/

  var filename   = options.filename + '.js'; // with file extension

  var isKestryl  = dirTester.test(exe('ls -a', true));
  var nameExists = fileTester.test(exe('ls ./app/lib', true));

  if (!isKestryl) { 
    say.error('not a kestryl root directory');
    return;
  }

  if (nameExists) {
    say.error('file already exists');
    return;
  }
  
  var compType  = fs.readFileSync('./.kestryl').toString();

  if (/react/i.test(compType)) {
    var component = require('../assets/react-lib/example-component-js');
  } else {
    var component = require('../assets/lib/example-component-js');
  }

  writeFile('app/lib', filename, component.file);
  say.say('generated ' + filename + ' in app/lib/');

}