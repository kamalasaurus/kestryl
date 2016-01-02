function isGit(repo) {
  return /github\.com/.test(repo) || /bitbucket\.org/.test(repo);
}

module.exports = function(options) {

  /* ==================================================================
    DEPENDENCIES
  ================================================================== */

  var readline  = require('readline');
  var multiline = require('multiline');

  var exe       = require('../functions/exe');
  var say       = require('../functions/say');

  var afterGit  = require('../scripts/init-2');

  /* ==================================================================
    GIT REPO PROMPT
  ================================================================== */

  var giturl, rl;

  rl = readline.createInterface(process.stdin, process.stdout);
  rl.setPrompt(multiline.stripIndent(function(){/*
    please initialize a github repo at this time
    make sure to initialize WITHOUT readme or .gitignore
    https://help.github.com/articles/create-a-repo/
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
    afterGit(options);
  });

}
