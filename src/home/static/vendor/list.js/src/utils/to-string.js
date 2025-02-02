// Copyright © 2025 Sustains AI, All Rights Reserved
module.exports = function (s) {
  s = s === undefined ? "" : s
  s = s === null ? "" : s
  s = s.toString()

  return s
}
