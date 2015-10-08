var multiline = require('multiline');

module.exports = {
  filename: 'example-component.js',
  file: multiline.stripIndent(function(){/*
    import m from 'mithril';

    export default class ExampleComponent {

      constructor() {
        this.text = m.prop('Welcome to Kestryl!');

        this.controller = ()=> {
          return this;
        }
      }

      view(controller) {

        return m('div.title', this.text());

      }
    }

    */})
}
