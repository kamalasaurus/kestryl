module.exports = function(dir, fileObj) {

  var writeFile = require('./write-file');

  Object.keys(fileObj).forEach(function(filename) {
    var file = fileObj[filename];
    writeFile(dir, file.filename, file.file);
  });

  return;

}