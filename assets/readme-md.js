var multiline = require('multiline');

module.exports = {
  filename: 'README.md',
  file: multiline.stripIndent(function(){/*
    ##Welcome to Kestryl!

    Run your project with `npm run start`
    Debug your project with `npm run debug`
    Access an ES6 console with `npm run console`

    Initialize project with `kestryl init`
    Generate yieldable server module with `kestryl g <filename>`

    ###Loading client-side dependencies

    Refer to [jspm](https://github.com/jspm/jspm-cli) docs

    ###Loading server-side dependencies

    Refer to [npm](https://github.com/npm/npm) docs

    ###Creating routable components

    refer to [mithril](https://github.com/lhorie/mithril.js) docs

    ###Directory Structure

    <pre>
    .
    ├── README.md
    ├── config.js
    ├── dist
    ├── index.html
    ├── index.js
    ├── lib
    │   ├── example-component.js
    │   └── main.js
    ├── package.json
    └── server
        ├── mongo.js
        └── request.js
    </pre>

    */})
}
