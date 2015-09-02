module.exports = function (command, returnable) {
  // command-line executable;
  var child = require('child_process');

  // synchronous is good for build scripts (megusta)

  // return stdout as string, non-interactive
  if (returnable) { return child.execSync(command).toString().trim(); }

  // stdio: allows interactive steps to pass control to the child process
  // always returns null
  return child.execSync(command, {stdio:[0,1,2]});
}
