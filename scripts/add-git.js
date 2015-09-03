function isGit(repo) {
  return /git@/.test(repo);
}

module.exports = function(callback) {

  /* ==================================================================
    DEPENDENCIES
  ================================================================== */

  var readline  = require('readline');
  var multiline = require('multiline');

  var exe       = require('../functions/exe');
  var say       = require('../functions/say');

  var afterGit  = require('../scripts/after-git');

  /* ==================================================================
    GIT REPO PROMPT
  ================================================================== */

  var giturl, rl;

  rl = readline.createInterface(process.stdin, process.stdout);
  rl.setPrompt(multiline.stripIndent(function(){/*
    please initialize a github repo at this time
    https://help.github.com/articles/create-a-repo/
    initialize WITHOUT readme or gitignore
    copy the repo url here:
  */}));
  rl.prompt();

  rl.on('line', function(line) {
    var repo = line.trim();
    if (isGit(repo)) {
      giturl = repo;
      rl.close();
    } else {
      say.error('not a valid git repo');
      rl.prompt();
    }
  }).on('close', function() {
    exe('git remote add origin ' + giturl);
    say.shout('added remote repository');
    afterGit();
  });

}