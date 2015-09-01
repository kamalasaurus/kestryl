module.exports = function() {

  var chalk     = require('chalk');
  var leadStr   = (new Array(25)).join(' ');
  var title     = '   carmen!';
  var formatted = chalk.magenta.bold(title);
  var subtitle  = '   carmen is a command-line utility that makes it easy to create modular, full-stack ES6 projects'
  var linebreak = chalk.yellow.bold((new Array(75)).join('='));


  console.log(leadStr, '\n');
  console.log(leadStr, chalk.bgYellow('','','','','','',''));
  console.log(formatted, leadStr.substr(title.length + 1), chalk.bgYellow.bold.cyan('', 'halp', ''));
  console.log(leadStr, chalk.bgYellow('','','','','','',''));
  console.log(leadStr, '\n');

  console.log(subtitle, '\n\n', linebreak, '\n');

}