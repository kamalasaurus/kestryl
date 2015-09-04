var multiline = require('multiline');

module.exports = {
  filename: '.gitconfig',
  file: multiline.stripIndent(function(){/*
    [color]
      ui = true

    [format]
      pretty = %C(magenta)%h%Creset %Cgreen[%cr]%Creset (%an) %s
    */})
}
