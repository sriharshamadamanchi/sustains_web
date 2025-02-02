// Copyright © 2025 Sustains AI, All Rights Reserved
import slideUp from "./slideUp"

export default function mobileHide(el, menu, params, itemParams) {
  if (!menu) {
    return this
  }

  el.classList.remove(itemParams.activeItemClass().slice(1))

  slideUp(menu, params.mobileSpeed)
}
