module.exports = {
  contains: function(arr, str) {
    // true if str in arr
    // false if str not in arr
    return !!~arr.indexOf(str);
  },

  printArray: function(arr) {
    return arr.length === 1
      ? arr.toString()
      : '[' + arr.join(', ') + ']';
  }
}
