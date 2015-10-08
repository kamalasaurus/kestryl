var multiline = require('multiline');

module.exports = {
  filename: 'main.css',
  file: multiline.stripIndent(function(){/*
    * {
      margin: 0;
      padding: 0;
    }

    */})
}
