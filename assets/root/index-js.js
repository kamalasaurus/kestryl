var multiline = require('multiline');

module.exports = {
  filename: 'index.js',
  file: multiline.stripIndent(function(){/*
    import koa from 'koa';
    import koaBody from 'koa-body';
    import router from 'koa-router';
    import serve from 'koa-static';
    import queryString from 'koa-qs';

    import fs from 'co-fs';

    import Mongo from './server/mongo';
    import { get } from './server/request';

    const { keys } = Object;


    var app = koa();
    var bodyParser = koaBody();
    var routes = router();
    queryString(app, 'first');

    var mongo = new Mongo('127.0.0.1:27017/db-name');

    routes
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
