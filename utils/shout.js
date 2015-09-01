module.exports = function(message) {

  var chalk   = require('chalk');

  console.log(chalk.bold.green('\n\n', message.toUpperCase(), '\n\n'));
  return null;

}
