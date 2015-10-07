module.exports = function() {

  var keys        = Object.keys;
  var kestStr     = 'kestryl'
  var leadSpace   = (new Array(25)).join(' ');

  var printArray  = require('../functions/utils').printArray;
  var printOpts   = require('../functions/utils').printOpts;

  var printHeader = require('../functions/header');
  var close       = require('../functions/close');
  var commands    = require('../lib/options');

  printHeader();

  keys(commands).forEach(function(command) {
    var cmd = commands[command];

    var cmdStr = printArray(cmd.args);
    var optStr = cmd.opts ? printOpts(cmd.opts) : '';
    var helpStr = cmd.help;

    console.log(kestStr, cmdStr, optStr);
    console.log(leadSpace, helpStr, '\n');
  });

  close();

}
