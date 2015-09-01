module.exports = function() {

  var close    = require('../utils/close');
  var version  = require('../package').version;
  var preamble = 'Carmen is at version: '

  console.log(preamble + version);
  close();

}
