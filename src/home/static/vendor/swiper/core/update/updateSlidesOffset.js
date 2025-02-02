// Copyright © 2025 Sustains AI, All Rights Reserved
export default function updateSlidesOffset() {
  const swiper = this;
  const { slides } = swiper;

  for (let i = 0; i < slides.length; i += 1) {
    slides[i].swiperSlideOffset = swiper.isHorizontal() ? slides[i].offsetLeft : slides[i].offsetTop;
  }
}
