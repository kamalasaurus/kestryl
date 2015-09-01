module.exports = function(message, color) {

  var chalk   = require('chalk');

  var colors = {
    'red': chalk.bold.red,
    'green': chalk.bold.green
  }

  if (message && color && colors[color]) {
    console.log(colors[color](message));
  }

  process.exit(1);
}
