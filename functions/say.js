var chalk = require('chalk');

module.exports = {

  say: function(msg) {
    console.log(chalk.bold(msg));
    return;
  },

  shout: function(msg) {
    console.log(chalk.bold.green('\n\n', msg, '\n\n'));
    return;
  },

  error: function(msg) {
    console.log(chalk.bold.red(msg));
    return;
  }
}

