var multiline = require('multiline');

module.exports = {
  filename: 'example-component.jsx',
  file: multiline.stripIndent(function(){/*
    import React from 'react';

    var colors = ['#FF0000', '#00FF00', '#0000FF'];

    class ExampleComponent extends React.Component {

      constructor() {
        super();

        this.state = {
          colorIndex: 0
        }
      }

      handleClick(e) {
        e.preventDefault()
        let nextColor = this.state.colorIndex + 1;
        let setColor = nextColor > colors.length -1 ? 0 : nextColor;

        this.setState({
          colorIndex: setColor
        });
      }

      render() {
        let color = colors[this.state.colorIndex];
        return <a href="#" style={{color: color}} onClick={this.handleClick.bind(this)}>
          Hello there, {this.props.name}!
        </a>;
      }

    }

    export default ExampleComponent;
    */})
}
