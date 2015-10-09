module.exports = function(options) {

  /* ==================================================================
    DEPENDENCIES
  ================================================================== */

  var spawn     = require('child_process').spawn;

  var say       = require('../functions/say');

  var actions   = require('../lib/jspm-actions');

  // this is hacky... TODO: figure out how jspm actually exits upon completion
  var exitCode  = "ok   Loader files downloaded successfully\n";

  var initDeps  = require('../scripts/init-4');

  /* ==================================================================
    JSPM PROMPT
  ================================================================== */

  var child = spawn('jspm', ['init']);
      child.stdout.pipe(process.stdout);
      child.stderr.pipe(process.stderr);

      child.stdout.on('data', function(data) {
        if (actions.length) {
          child.stdin.write(actions.shift());
        }
        if (data.toString() === exitCode) {
          child.kill('SIGTERM');
          say.shout('jspm initialized');
          initDeps(options);
        }
      });

}
