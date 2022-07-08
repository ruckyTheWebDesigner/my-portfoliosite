import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

function Testimonials() {
  document.addEventListener("DOMContentLoaded", function () {
    new Swiper(".swiper-container", {
      loop: true,
      slidesPerView: 1,
      spaceBetween: 8,
      autoplay: {
        delay: 8000,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      breakpoints: {
        640: {
          slidesPerView: 1.5,
        },
        1024: {
          slidesPerView: 3,
        },
      },
    });
  });

  return (
    <div>
      <section>
        <div class='max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8'>
          <Swiper
            spaceBetween={50}
            slidesPerView={3}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}>
            <div class='swiper-container'>
              <div class='swiper-wrapper'>
                <SwiperSlide>
                  <div class='swiper-slide'>
                    <blockquote class='p-8 bg-gray-100'>
                      <div class='flex items-center'>
                        <img
                          src='https://www.hyperui.dev/photos/man-4.jpeg'
                          alt=''
                          class='object-cover w-16 h-16 rounded-full'
                        />

                        <div class='ml-4 text-sm'>
                          <p class='font-medium'>Jeff Wezos</p>
                          <p class='mt-1'>CEO of Shipping Company</p>
                        </div>
                      </div>

                      <p class='relative mt-4 text-gray-500'>
                        <span class='text-xl'>&ldquo;</span>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Magni assumenda officiis sit amet itaque eveniet
                        accusantium corporis tempora, soluta perspiciatis rerum,
                        ratione animi nemo inventore repellat, commodi in esse
                        quisquam.
                        <span class='text-xl'>&rdquo;</span>
                      </p>
                    </blockquote>
                  </div>
                </SwiperSlide>

                <div class='swiper-slide'>
                  <blockquote class='p-8 bg-gray-100'>
                    <div class='flex items-center'>
                      <img
                        src='https://www.hyperui.dev/photos/man-4.jpeg'
                        alt=''
                        class='object-cover w-16 h-16 rounded-full'
                      />

                      <div class='ml-4 text-sm'>
                        <p class='font-medium'>Jeff Wezos</p>
                        <p class='mt-1'>CEO of Shipping Company</p>
                      </div>
                    </div>

                    <p class='relative mt-4 text-gray-500'>
                      <span class='text-xl'>&ldquo;</span>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Magni assumenda officiis sit amet itaque eveniet
                      accusantium corporis tempora, soluta perspiciatis rerum,
                      ratione animi nemo inventore repellat, commodi in esse
                      quisquam.
                      <span class='text-xl'>&rdquo;</span>
                    </p>
                  </blockquote>
                </div>

                <div class='swiper-slide'>
                  <blockquote class='p-8 bg-gray-100'>
                    <div class='flex items-center'>
                      <img
                        src='https://www.hyperui.dev/photos/man-4.jpeg'
                        alt=''
                        class='object-cover w-16 h-16 rounded-full'
                      />

                      <div class='ml-4 text-sm'>
                        <p class='font-medium'>Jeff Wezos</p>
                        <p class='mt-1'>CEO of Shipping Company</p>
                      </div>
                    </div>

                    <p class='relative mt-4 text-gray-500'>
                      <span class='text-xl'>&ldquo;</span>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Magni assumenda officiis sit amet itaque eveniet
                      accusantium corporis tempora, soluta perspiciatis rerum,
                      ratione animi nemo inventore repellat, commodi in esse
                      quisquam.
                      <span class='text-xl'>&rdquo;</span>
                    </p>
                  </blockquote>
                </div>

                <div class='swiper-slide'>
                  <blockquote class='p-8 bg-gray-100'>
                    <div class='flex items-center'>
                      <img
                        src='https://www.hyperui.dev/photos/man-4.jpeg'
                        alt=''
                        class='object-cover w-16 h-16 rounded-full'
                      />

                      <div class='ml-4 text-sm'>
                        <p class='font-medium'>Jeff Wezos</p>
                        <p class='mt-1'>CEO of Shipping Company</p>
                      </div>
                    </div>

                    <p class='relative mt-4 text-gray-500'>
                      <span class='text-xl'>&ldquo;</span>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Magni assumenda officiis sit amet itaque eveniet
                      accusantium corporis tempora, soluta perspiciatis rerum,
                      ratione animi nemo inventore repellat, commodi in esse
                      quisquam.
                      <span class='text-xl'>&rdquo;</span>
                    </p>
                  </blockquote>
                </div>
              </div>

              <div class='mt-12 swiper-pagination'></div>
            </div>
          </Swiper>
        </div>
      </section>
    </div>
  );
}

export default Testimonials;
