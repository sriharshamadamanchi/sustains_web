// Copyright © 2025 Sustains AI, All Rights Reserved

module.exports = function toArray(collection) {
  if (typeof collection === "undefined") {
    return []
  }
  if (collection === null) {
    return [null]
  }
  if (collection === window) {
    return [window]
  }
  if (typeof collection === "string") {
    return [collection]
  }
  if (isArray(collection)) {
    return collection
  }
  if (typeof collection.length !== "number") {
    return [collection]
  }
  if (typeof collection === "function" && collection instanceof Function) {
    return [collection]
  }

  var arr = [];
  for (var i = 0, il = collection.length; i < il; i++) {
    if (Object.hasOwn(collection, i) || i in collection) {
      arr.push(collection[i])
    }
  }
  if (!arr.length) {
    return []
  }

  return arr
}

function isArray(arr) {
  return Object.prototype.toString.call(arr) === "[object Array]"
}
