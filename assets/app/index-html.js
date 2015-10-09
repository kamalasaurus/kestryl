var multiline = require('multiline');

module.exports = {
  filename: 'index.html',
  file: multiline.stripIndent(function(){/*
    <!doctype html>
    <head>
      <link rel="stylesheet" href="css/main.css"></link>
    </head>
    <body>
      <script type="text/javascript" src="jspm_packages/system.js"></script>
      <script type="text/javascript" src="config.js"></script>
      <script>
        System.import('lib/main').catch(console.error.bind(console));
      </script>
    </body>

    */})
}
