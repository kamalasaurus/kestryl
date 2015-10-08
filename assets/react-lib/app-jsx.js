var multiline = require('multiline');

module.exports = {
  filename: 'app.jsx',
  file: multiline.stripIndent(function(){/*
    import React from 'react';
    import DOM from 'react-dom';
    import ExampleComponent from './example-component.jsx!';

    export default ()=> {
      var app = document.createElement('div');
          app.setAttribute('id', 'app');

      document.body.appendChild(app);

      DOM.render(
        <ExampleComponent name="Example" />,
        app
      );
    }
    */})
}
