// Copyright © 2025 Sustains AI, All Rights Reserved
module.exports = function (list) {
  var addAsync = function (values, callback, items) {
    var valuesToAdd = values.splice(0, 50)
    items ||= []
    items = items.concat(list.add(valuesToAdd))
    if (values.length > 0) {
      setTimeout(() => {
        addAsync(values, callback, items)
      }, 1)
    } else {
      list.update()
      callback(items)
    }
  }

  return addAsync
}
