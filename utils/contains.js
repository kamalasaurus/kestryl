module.exports = function(arr, str) {
  // true if str in arr
  // false if str not in arr
  return !!~arr.indexOf(str);
}
