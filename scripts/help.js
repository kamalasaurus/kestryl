module.exports = function() {

  var keys        = Object.keys;
  var carmStr     = 'carmen'
  var leadSpace   = (new Array(25)).join(' ');

  var printArray  = require('../functions/utils').printArray;

  var printHeader = require('../functions/header');
  var close       = require('../functions/close');
  var commands    = require('../lib/options');

  printHeader();

  keys(commands).forEach(function(command) {
    var cmdStr = printArray(commands[command].args);
    var helpStr = commands[command].help;

    console.log(carmStr, cmdStr);
    console.log(leadSpace, helpStr, '\n');
  });

  close();

}
