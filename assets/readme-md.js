var multiline = require('multiline');

module.exports = {
  filename: 'README.md',
  file: multiline.stripIndent(function(){/*
    ##Welcome to Kestryl!

    Run your project with `npm run start`
    Debug your project with `npm run debug`
    Access an ES6 console with `npm run console`

    Initialize project with `kestryl init`
    Generate yieldable boilerplate with `kestryl plate <filename>`
    Initialize route with `kestryl g <route>`

    ###Client-side dependencies

    Refer to [jspm](https://github.com/jspm/jspm-cli) docs

    ###Server-side dependencies

    Refer to [npm](https://github.com/npm/npm) docs

    ###Directory Structure

    <pre>
    .
    ├── README.md
    ├── config.js
    ├── dist
    ├── index.html
    ├── index.js
    ├── lib
    │   ├── app.jsx
    │   └── main.js
    ├── package.json
    └── server
        ├── mongo.js
        └── request.js
    </pre>

    */})
}
