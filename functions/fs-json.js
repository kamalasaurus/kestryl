module.exports = function(file, obj) {

  var fs       = require('fs');

  var exe      = require('./exe'); // run code synchronously
  var dir      = exe('pwd', true);        // uninteractive, but returns stdout as str

  var keys     = Object.keys;
  var filename = dir + '/' + file;


  var json = JSON.parse(fs.readFileSync(filename));

  keys(obj).forEach(function(key) {
    json[key] = obj[key];
  });

  fs.writeFileSync(filename, JSON.stringify(json, null, 2));

}
