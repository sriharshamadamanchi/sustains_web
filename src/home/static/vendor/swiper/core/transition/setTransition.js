// Copyright © 2025 Sustains AI, All Rights Reserved
export default function setTransition(duration, byController) {
  const swiper = this;

  if (!swiper.params.cssMode) {
    swiper.$wrapperEl.transition(duration);
  }

  swiper.emit("setTransition", duration, byController);
}
