var multiline = require('multiline');

module.exports = {
  filename: 'main.js',
  file: multiline.stripIndent(function(){/*
    import App from './app.jsx!';

    App();

    */})
}
