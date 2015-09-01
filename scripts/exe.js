module.exports = function (command) {
  // command-line executable;
  var child = require('child_process');

  // synchronous is good for build scripts (megusta)
  // stdio: allows interactive steps to pass control to the child process
  child.execSync(command, {stdio:[0,1,2]});
}
