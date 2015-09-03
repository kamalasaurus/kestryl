var multiline = require('multiline');

module.exports = {
  filename: 'README.md',
  file: multiline.stripIndent(function(){/*
    #Welcome to Carmen

    Run your project with `npm run start`
    Debug your project with `npm run debug`
    Access an ES6 console with `npm run console`
    Generate yieldable boilerplate with `carmen boil <filename>`

    ##Client-side dependencies

    Refer to [jspm](https://github.com/jspm/jspm-cli) docs

    ##Server-side dependencies

    Refer to [npm](https://github.com/npm/npm) docs

    */})

}
