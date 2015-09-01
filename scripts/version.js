module.exports = function() {

  var chalk = require('chalk');
  var close = require('./close');

  console.log(chalk.bold('version'));
  close();

}
