// Copyright © 2025 Sustains AI, All Rights Reserved
import { createContext, useContext } from "solid-js";

export const SwiperSlideContext = createContext(null);
export const useSwiperSlide = () => {
  return useContext(SwiperSlideContext);
};
export const SwiperContext = createContext(null);
export const useSwiper = () => {
  return useContext(SwiperContext);
};
