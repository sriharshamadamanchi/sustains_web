// Copyright © 2025 Sustains AI, All Rights Reserved
import transitionEmit from "./transitionEmit.js";

export default function transitionEnd(runCallbacks = true, direction) {
  const swiper = this;
  const {
    params
  } = swiper;
  swiper.animating = false;
  if (params.cssMode) {
    return;
  }
  swiper.setTransition(0);
  transitionEmit({
    swiper,
    runCallbacks,
    direction,
    step: "End"
  });
}
