// Copyright © 2025 Sustains AI, All Rights Reserved

var getElementsByClassName = function (container, className, single) {
  if (single) {
    return container.getElementsByClassName(className)[0]
  }

  return container.getElementsByClassName(className)

}

var querySelector = function (container, className, single) {
  className = `.${ className}`
  if (single) {
    return container.querySelector(className)
  }

  return container.querySelectorAll(className)

}

var polyfill = function (container, className, single) {
  var classElements = [],
    tag = "*"

  var els = container.getElementsByTagName(tag)
  var elsLen = els.length
  var pattern = new RegExp(`(^|\\s)${ className }(\\s|$)`)
  for (var i = 0, j = 0; i < elsLen; i++) {
    if (pattern.test(els[i].className)) {
      if (single) {
        return els[i]
      }
      classElements[j] = els[i]
      j++

    }
  }

  return classElements
}

module.exports = (function () {
  return function (container, className, single, options) {
    options ||= {}
    if ((options.test && options.getElementsByClassName) || (!options.test && document.getElementsByClassName)) {
      return getElementsByClassName(container, className, single)
    } else if ((options.test && options.querySelector) || (!options.test && document.querySelector)) {
      return querySelector(container, className, single)
    }

    return polyfill(container, className, single)

  }
})()
