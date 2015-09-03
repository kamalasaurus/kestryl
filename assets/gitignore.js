var multiline = require('multiline');

module.exports = {
  filename: '.gitignore',
  file: multiline.stripIndent(function(){/*
    node_modules
    jspm_packages
    .DS_Store
    */});
}
