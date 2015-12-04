var multiline = require('multiline');

module.exports = {
  filename: '.babelrc',
  file: multiline.stripIndent(function(){/*
    {
      "presets": ["es2015", "stage-0"]
    }
  */})
}

