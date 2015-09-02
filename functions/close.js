module.exports = function(message, messageType) {

  var say = require('./say');

  if (message && messageType) {
    say[messageType](message);
  }

  process.exit(1);
}
