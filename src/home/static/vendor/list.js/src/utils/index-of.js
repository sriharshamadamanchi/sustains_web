// Copyright © 2025 Sustains AI, All Rights Reserved
var { indexOf } = []

module.exports = function(arr, obj){
  if (indexOf) {
    return arr.indexOf(obj);
  }
  for (var i = 0, il = arr.length; i < il; ++i) {
    if (arr[i] === obj) {
      return i;
    }
  }

  return -1
}
