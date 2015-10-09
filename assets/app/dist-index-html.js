var multiline = require('multiline');

module.exports = {
  filename: 'index.html',
  file: multiline.stripIndent(function(){/*
    <!doctype html>
    <head>
      <link rel="stylesheet" href="css/main.css"></link>
    </head>
    <body>
      <script type="text/javascript" src="build.js"></script>
    </body>

    */})
}
