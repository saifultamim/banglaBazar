"use client";

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function ReuseableSlider({ children }: any) {
  const settings = {
    focusOnSelect: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    speed: 500,
  };
  return (
    <div className="slider-container">
      <div>Click on any slide to select and make it current slide</div>
      <Slider {...settings}>{children}</Slider>
    </div>
  );
}

export default ReuseableSlider;
