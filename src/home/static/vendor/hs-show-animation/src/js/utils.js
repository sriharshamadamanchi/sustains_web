// Copyright © 2025 Sustains AI, All Rights Reserved
export function fadeIn(el, time) {
  if (!el || el.offsetParent !== null) {
    return el
  }

  el.style.opacity = 0
  el.style.display = "block"

  var last = Number(new Date())
  var tick = function () {
    el.style.opacity = Number(el.style.opacity) + (new Date() - last) / time
    last = Number(new Date())

    if (Number(el.style.opacity) < 1) {
      (window.requestAnimationFrame && requestAnimationFrame(tick)) || setTimeout(tick, 16)
    }
  }

  tick()
}
