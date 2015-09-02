function isGit(repo) {
  return 'git@'.match(repo).length > 0;
}

module.exports = function() {

  var readline  = require('readline');
  var multiline = require('multiline');
  var exe       = require('./exe');
  var say       = require('./say');

  var giturl;

  var rl        = readline.createInterface(process.stdin, process.stdout);
      rl.setPrompt(multiline.stripIndent(function(){/*
        please initialize a git repo at www.github.com at this time
        copy the repo url here:
      */}));
      rl.prompt()

      rl.on('line', function(line) {
        var repo = line.trim();
        if isGit(repo) {
          giturl = repo;
          rl.close();
        } else {
          say.error('not a valid git repo');
          rl.prompt();
        }
      }).on('close', function() {
        say.shout('adding remote repository'.toUpperCase());
      });

  // git@github.com:kamalasaurus/test.git

  exe('git remote add origin ' + giturl);

}