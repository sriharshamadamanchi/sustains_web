// Copyright © 2025 Sustains AI, All Rights Reserved

module.exports = function (el, attr) {
  var result = (el.getAttribute && el.getAttribute(attr)) || null
  if (!result) {
    var attrs = el.attributes
    var { length } = attrs
    for (var i = 0; i < length; i++) {
      if (attrs[i] !== undefined) {
        if (attrs[i].nodeName === attr) {
          result = attrs[i].nodeValue
        }
      }
    }
  }

  return result
}
