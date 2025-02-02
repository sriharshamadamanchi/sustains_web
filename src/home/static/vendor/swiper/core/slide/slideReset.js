// Copyright © 2025 Sustains AI, All Rights Reserved
export default function slideReset(speed = this.params.speed, runCallbacks = true, internal) {
  const swiper = this;

  return swiper.slideTo(swiper.activeIndex, speed, runCallbacks, internal);
}
