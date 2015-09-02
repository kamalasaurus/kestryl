var chalk = require('chalk');

module.exports = {
  shout: function(msg) {
    console.log(chalk.bold.green('\n\n', msg, '\n\n'));
    return;
  },

  error: function(msg) {
    console.log(chalk.bold.red(msg));
    return;
  }
}

