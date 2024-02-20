"use client";
import React, { useState, ReactElement, useEffect, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { CgArrowLongLeft, CgArrowLongRight } from "react-icons/cg";


interface SliderProps {
  dots: boolean;
  infinite: boolean;
  speed: number;
  slidesToShow: number;
  slidesToScroll: number;
  autoplay: boolean;
}


function PreviousNextMethods(): ReactElement {
  let sliderRef = useRef<Slider>(null);

  const next = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };

  const previous = () => {
    if (sliderRef.current !== null) {
      (sliderRef.current as Slider).slickPrev();
    }
  };


  const settings: any = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
  };

  return (
    <div className="px-5 md:px-28 py-10">
      <div className="slider-container relative">
        <Slider ref={sliderRef} {...settings}>
          <div className=" h-[300px]" key={1}>
            <div className="bg-gray-300 h-full flex justify-center items-center ml-5">
              <h3 className="">1</h3>
            </div>
          </div>
          <div className=" h-[300px]" key={2}>
            <div className="bg-gray-300 h-full flex justify-center items-center ml-5">
              <h3 className="">2</h3>
            </div>
          </div>
          <div className=" h-[300px]" key={3}>
            <div className="bg-gray-300 h-full flex justify-center items-center ml-5">
              <h3 className="bg-yellow-200">3</h3>
            </div>
          </div>
          <div className=" h-[300px] " key={4}>
            <div className="bg-gray-300 h-full flex justify-center items-center ml-5">
              <h3 className="">4</h3>
            </div>
          </div>
        </Slider>
      </div>
      <div className="absolute left-[5%] mx-10 w-[85%] md:w-[85%] flex justify-between ">
        <button className="cursor-pointer" onClick={() => previous()}>
        <CgArrowLongLeft size={30} />
        </button>
        <button
          className="cursor-pointer"
          onClick={() => next()}
        >
          <CgArrowLongRight size={30} />
        </button>
      </div>
    </div>
  );
}

export default PreviousNextMethods;
