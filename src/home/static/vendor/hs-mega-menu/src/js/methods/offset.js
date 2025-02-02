// Copyright © 2025 Sustains AI, All Rights Reserved
export default function(el) {
  if (!el) {
    return false
  }

  const rect = el.getBoundingClientRect()

  return {
    top: rect.top - window.scrollY,
    left: rect.left - window.scrollX
  }
}
