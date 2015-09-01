module.exports = function() {

  var keys        = Object.keys;
  var carmStr     = 'carmen'
  var leadSpace   = (new Array(25)).join(' ');

  var printArray  = require('../utils/utils').printArray;

  var printHeader = require('../utils/header');
  var close       = require('../utils/close');
  var commands    = require('../lib/options');

  printHeader();

  keys(commands).forEach(function(command) {
    var l = printArray(commands[command].args);
    var v = commands[command].help;

    console.log(carmStr, l);
    console.log(leadSpace, v, '\n');
  });

  close();

}
