#kestryl

A command-line utility to rapidly create thin, full-stack ES6 single-page websites with minimal bloat. Useful for rapid prototyping.

Powered by `babel-node`, `jspm`, `mithril`, and `koa-router`.  Has optional `react` support.

##TODO
Don't use for production yet, because this is required for security:

Catch-and-release jspm initialization to different defaults as per http://stackoverflow.com/questions/10901660/node-js-interact-with-shell-application so the static file server won't have to serve the root directory. This will prevent browser access to server logic source.

###Documentation

kestryl [--version, -version, version, --v, -v, v]
print version number

kestryl [--help, -help, help, --h, -h, h, --halp, -halp, halp]
print valid commands

kestryl init < --react >
initialize a new project in an empty directory

kestryl [--g, -g, g, --generate, -generate, generate]  | filename |
generate a yieldable promise for a server module
