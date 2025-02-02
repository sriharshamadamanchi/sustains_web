// Copyright © 2025 Sustains AI, All Rights Reserved
import { inject } from "vue";

export const useSwiperSlide = () => {
  return inject("swiperSlide");
};
export const useSwiper = () => {
  return inject("swiper");
};
