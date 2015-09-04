var multiline = require('multiline');

module.exports = {
  filename: 'index.js',
  file: multiline.stripIndent(function(){/*
    import koa from 'koa';
    import router from 'koa-router';
    import serve from 'koa-static';
    import queryString from 'koa-qs';
    import fs from 'co-fs';

    import Mongo from './server/mongo';
    import { get } from './server/request';

    const { keys } = Object;


    var app = koa();
    var routes = router();
    queryString(app, 'first');

    var mongo = new Mongo('54.184.18.78:27017/kenny');

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
      })
      .get('/data', function* (next) {
        this.response.type = 'application/json';
        this.body = yield get(this.query);
      });

    app
      .use(serve('.', {defer: true}))
      .use(routes.routes())
      .use(routes.allowedMethods())
      .listen(process.argv[2]);
    */})
}
