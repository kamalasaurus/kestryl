module.exports = function(dir, name, file) {

  var fs        = require('fs');
  var filename  = dir + '/' + name;
  fs.writeFileSync(filename, file);

  return;

}
