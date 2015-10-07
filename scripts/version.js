module.exports = function() {

  var close    = require('../functions/close');
  var version  = require('../package').version;
  var preamble = 'Kestryl is at version: '

  console.log(preamble + version);
  close();

}
