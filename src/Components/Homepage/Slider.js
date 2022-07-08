// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Creative } from "swiper";
import { GrNext } from "react-icons/gr";
import { useState } from "react";

import SwiperCore, { Pagination, Navigation } from "swiper/core";
import Testimonials from "./TestimonialsApi";

// Import Swiper styles
import "swiper/css";
import React from "react";

// install Swiper modules
SwiperCore.use([Pagination, Navigation]);

function Slider() {
  const [swiperRef, setSwiperRef] = useState(null);
  const [reviews, setReviews] = useState(Testimonials);

  let appendNumber = 4;
  let prependNumber = 1;

  const prepend2 = () => {
    swiperRef.prependSlide([
      '<div class="swiper-slide">Slide ' + --prependNumber + "</div>",
      '<div class="swiper-slide">Slide ' + --prependNumber + "</div>",
    ]);
  };

  const prepend = () => {
    swiperRef.prependSlide(
      '<div class="swiper-slide">Slide ' + --prependNumber + "</div>"
    );
  };

  const append = () => {
    swiperRef.appendSlide(
      '<div class="swiper-slide">Slide ' + ++appendNumber + "</div>"
    );
  };

  const append2 = () => {
    swiperRef.appendSlide([
      '<div class="swiper-slide">Slide ' + ++appendNumber + "</div>",
      '<div class="swiper-slide">Slide ' + ++appendNumber + "</div>",
    ]);
  };
  return (
    <div className='swiper-section'>
      <h4 className='text-center others-heading mt-5 mb-4'>
        Reviews from Satsified Clients.
      </h4>
      <hr className='swiper-underline mb-4' />
      <Swiper
        onSwiper={setSwiperRef}
        centeredSlides={true}
        pagination={{
          type: "fraction",
        }}
        navigation={true}
        className='mySwiper'
        spaceBetween={30}
        slidesPerView={2}>
        {reviews.map((review, index) => {
          return (
            <SwiperSlide key={index}>
              <div class='swiper-slide'>
                <blockquote class='p-8'>
                  <div class='flex items-center'>
                    <img
                      src={review.image}
                      alt=''
                      class='object-cover w-16 h-16 rounded-full'
                    />

                    <div class='ml-4 text-sm'>
                      <p class='font-medium'>{review.name}</p>
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
          );
        })}
      </Swiper>
    </div>
  );
}

export default Slider;
