var multiline = require('multiline');

module.exports = {
  filename: 'app.jsx',
  file: multiline.stripIndent(function(){/*
    import React from 'react';
    import DOM from 'react-dom';
    import ExampleComponent from './example-component.jsx!';

    export default ()=> {
      DOM.render(
        <ExampleComponent name="Example" />,
        document.getElementById('app')
      );
    }
    */})
}
