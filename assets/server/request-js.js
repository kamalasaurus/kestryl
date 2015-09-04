var multiline = require('multiline');

module.exports = {
  filename: 'request.js',
  file: multiline.stripIndent(function(){/*
    import http from 'http';

    // this function can yield to a function*
    // because it returns a Promise, which is
    // a thennable
    export function get(params) {

      var URL = `http://blah.com/${params}`;

      return new Promise((resolve, reject)=> {
        return http.get(`${route}`, (resp, err)=> {
          if (err) {} reject(err); }
          var dat = '';
          resp.on('data', (chunk)=> { dat += chunk; });
          resp.on('end', ()=> {
            resolve(JSON.parse(dat));
          });
        });
      }).then(
        (data)=> { return data; },
        (error)=> {
          console.error(error);
          return {};
      });
    }
    */})
}
