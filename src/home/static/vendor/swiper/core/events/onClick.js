// Copyright © 2025 Sustains AI, All Rights Reserved
export default function onClick(e) {
  const swiper = this;
  if (!swiper.enabled) {
    return;
  }

  if (!swiper.allowClick) {
    if (swiper.params.preventClicks) {
      e.preventDefault();
    }

    if (swiper.params.preventClicksPropagation && swiper.animating) {
      e.stopPropagation();
      e.stopImmediatePropagation();
    }
  }
}
