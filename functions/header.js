module.exports = function() {

  var chalk     = require('chalk');

  var leadSpace = (new Array(25)).join(' ');
  var title     = '   carmen!';
  var formatted = chalk.magenta.bold(title);
  var subtitle  = '   carmen is a command-line utility that makes it easy to create modular, full-stack ES6 projects'
  var linebreak = chalk.yellow.bold((new Array(75)).join('='));


  console.log(leadSpace, '\n');
  console.log(leadSpace, chalk.bgYellow('','','','','','',''));
  console.log(formatted, leadSpace.substr(title.length + 1), chalk.bgYellow.bold.cyan('', 'halp', ''));
  console.log(leadSpace, chalk.bgYellow('','','','','','',''));
  console.log(leadSpace, '\n');

  console.log(subtitle, '\n\n', linebreak, '\n');

  return;

}