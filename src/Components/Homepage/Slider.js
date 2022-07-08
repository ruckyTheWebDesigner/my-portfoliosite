/* eslint-disable no-unused-vars */
import React from "react";
import { useState, useEffect } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import SwiperCore, { Pagination, Navigation } from "swiper/core";
import Testimonials from "./TestimonialsApi";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// Import Swiper styles

// install Swiper modules
SwiperCore.use([Pagination, Navigation]);

function Slider() {
  const [swiperRef, setSwiperRef] = useState(null);
  const [reviews, setReviews] = useState(Testimonials);
  const [resolution, setResolution] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", (event) => {
      setResolution(event.target.innerWidth);
    });
  }, [resolution]);

  return (
    <div className='swiper-section'>
      <h4 className='text-center others-heading mt-5 mb-4'>
        Reviews from Satsified Clients.
      </h4>
      <hr className='swiper-underline mb-4' />
      <Swiper
        onSwiper={setSwiperRef}
        // centeredSlides={true}
        pagination={{
          type: "fraction",
        }}
        navigation={true}
        className='mySwiper'
        spaceBetween={30}
        slidesPerView={resolution > 1200 ? 3 : resolution > 680 ? 2 : 1}>
        {reviews.map((review, index) => {
          return (
            <div key={index}>
              <SwiperSlide>
                <div class='swiper-slide'>
                  <blockquote class='p-8'>
                    <div class='flex items-center'>
                      <img
                        src={review.image}
                        alt=''
                        class='object-cover w-16 h-16 rounded-full'
                      />

                      <div class='ml-4 text-sm'>
                        <h6 class='font-bold'>{review.name}</h6>
                        <p class='mt-1'>{review.position}</p>
                      </div>
                    </div>

                    <p class='relative mt-4 text-gray-500'>
                      <span class='text-xl'>&ldquo;</span>
                      {review.review}
                      <span class='text-xl'>&rdquo;</span>
                    </p>
                  </blockquote>
                </div>
              </SwiperSlide>
            </div>
          );
        })}
      </Swiper>
    </div>
  );
}

export default Slider;
