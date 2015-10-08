var multiline = require('multiline');

module.exports = {
  filename: 'main.js',
  file: multiline.stripIndent(function(){/*
    import m from 'mithril';

    import ExampleComponent from './example-component';

    m.route(document.body, '/', {
      '/': new ExampleComponent()
    });

    */})
}
