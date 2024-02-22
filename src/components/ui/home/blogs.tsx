"use client";
import React, { useState, ReactElement, useEffect, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { CgArrowLongLeft, CgArrowLongRight } from "react-icons/cg";
import Image from "next/image";
import imgTest from '@/assets/banner.png'

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
    // slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    responsive: [
      {
        breakpoint: 3000,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };

  return (
    <div className="px-5 md:px-28 py-10">
      <div className="slider-container relative">
        <Slider ref={sliderRef} {...settings}>
          <div className=" h-[300px]" key={1}>
            <div className="bg-gray-300 h-full ml-5 flex flex-col items-center md:pt-10 pt-0">
              <div className="px-2 h-[50%] object-contain">
              <Image className="h-full" src={imgTest} width={500} height={500} alt="" />
              </div>
              <h3 className=" mt-5 leading-8 font-semibold px-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, quas.</h3>
            </div>
          </div>
          <div className=" h-[300px]" key={2}>
            <div className="bg-gray-300 h-full ml-5">
              <div className="px-2 h-[50%] object-contain">
              <Image className="h-full" src={imgTest} width={500} height={500} alt="" />
              </div>
              <h3 className=" mt-5 leading-8 font-semibold px-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, quas.</h3>
            </div>
          </div><div className=" h-[300px]" key={3}>
            <div className="bg-gray-300 h-full ml-5">
              <div className="px-2 h-[50%] object-contain">
              <Image className="h-full" src={imgTest} width={500} height={500} alt="" />
              </div>
              <h3 className=" mt-5 leading-8 font-semibold px-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, quas.</h3>
            </div>
          </div><div className=" h-[300px]" key={4}>
            <div className="bg-gray-300 h-full ml-5">
              <div className="px-2 h-[50%] object-contain">
              <Image className="h-full" src={imgTest} width={500} height={500} alt="" />
              </div>
              <h3 className=" mt-5 leading-8 font-semibold px-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, quas.</h3>
            </div>
          </div>

        </Slider>
      </div>
      <div className="absolute left-[-5px] md:left-[5%] mx-10 w-[85%] md:w-[85%] flex justify-between ">
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
