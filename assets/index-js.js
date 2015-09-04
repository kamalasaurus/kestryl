var multiline = require('multiline');

module.exports = {
  filename: 'index.js',
  file: multiline.stripIndent(function(){/*
    import koa from 'koa';
    import router from 'koa-router';
    import queryString from 'koa-qs';
    import fs from 'co-fs';

    import Mongo from './server/mongo';
    import { getStatute } from './server/request';

    const { keys } = Object;


    var app = koa();
    var routes = router();
    queryString(app, 'first');

    var mongo = new Mongo();

    routes
      .get('/', function* (next) {
        this.response.type = 'text/html';
        this.body = yield fs.readFile('index.html', 'utf8');
      })
      .get('/dist.js', function* (next) {
        this.response.type = 'application/javascript';
        this.body = yield fs.readFile('./dist/dist.js', 'utf8');
      })
      .get('/dist.css', function* (next) {
        this.response.type = 'text/css';
        this.body = yield fs.readFile('./dist/dist.css', 'utf8');
      });

    app
      .use(routes.routes())
      .use(routes.allowedMethods())
      .listen(process.argv[2]);
    */})
}
