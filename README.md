![kestryl](./images/kestryl.png?raw=true)
#kestryl

A command-line utility to rapidly create thin, full-stack ES6 single-page websites with minimal bloat. Useful for rapid prototyping.

Powered by `babel-node`, `jspm`, `mithril`, and `koa-router`.  Has optional `react` support.

###TODO
1. Add ESLint
2. Add live-browser-refresh capabilities upon filechange
3. Sequester css and images into assets directory. Show example of styling in JS instead of css; encourage minimal asset footprint.
4. Use [async.js](https://www.npmjs.com/package/async) for waterfall pattern in managing initialization flow instead of nesting across files.
5. Make the emitted index.html from `kestryl bundle` include changes to the development index.html (assets, analytics inclusions, etc).

###Documentation

`kestryl [--version, -version, version, --v, -v, v]`

print version number

`kestryl [--help, -help, help, --h, -h, h, --halp, -halp, halp]`

print valid commands

`kestryl init < --r, -r, r, --react, -react, react >`

initialize a new project in an empty directory, defaults to mithril without one of the react flags

`kestryl [--g, -g, g, --generate, -generate, generate]  | filename |`

generate a yieldable promise for a server module

`kestryl [--c, -c, c, --component, -component, component]  | filename |`

generate a component of the initialization type
