#kestryl

A command-line utility to rapidly create thin, full-stack ES6 single-page websites with minimal bloat. Useful for rapid prototyping.

Powered by `babel-node`, `jspm`, `mithril`, and `koa-router`.  Has optional `react` support.

###TODO
1. Add ESLint
2. Add live-reload capabilities upon filechange
3. Add bundle script that emits the index.html as well as the jspm package into app/dist

###Documentation

`kestryl [--version, -version, version, --v, -v, v]`

print version number

`kestryl [--help, -help, help, --h, -h, h, --halp, -halp, halp]`

print valid commands

`kestryl init < --react >`

initialize a new project in an empty directory

`kestryl [--g, -g, g, --generate, -generate, generate]  | filename |`

generate a yieldable promise for a server module
