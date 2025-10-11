'use client'

import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css/navigation';
import Image from "next/image";


const HeroFive=()=>{
    return (
        <>
            <section className=" bg-yellow-50 py-8">
            <div
          id="section4"
          className="md:px-[3rem]  overflow-hidden font-arvo px-[1rem]  pb-[2rem]">
          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            breakpoints={{
              640: { slidesPerView: 2 },
              768: { slidesPerView: 3 },
              1024: { slidesPerView: 4 },
            }}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            navigation={true}
            // pagination={{
            // clickable: true,
            // }}
            modules={[Pagination, Autoplay, ]}
            className="mySwiper"
          >
            <SwiperSlide>
              <div className=" overflow-hidden relative w-full h-48">
                <Image
                  src="/D4.png"
                  fill
                  alt="image"
                  className="rounded-[12px] object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                />
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className=" overflow-hidden relative w-full h-48">
                <Image
                  src="/D5.png"
                  fill
                  alt="image"
                  className="rounded-[12px] object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                />
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className=" overflow-hidden relative w-full h-48">
                <Image
                  src="/D6.png"
                  fill
                  alt="image"
                  className="rounded-[12px] object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                />
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className=" overflow-hidden relative w-full h-48">
                <Image
                  src="/D7.png"
                  fill
                  alt="image"
                  className="rounded-[12px] object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                />
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className=" overflow-hidden relative w-full h-48">
                <Image
                  src="/D.png"
                  fill
                  alt="image"
                  className="rounded-[12px] object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                />
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className=" overflow-hidden relative w-full h-48">
                <Image
                  src="/D3.png"
                  fill
                  alt="image"
                  className="rounded-[12px] object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                />
              </div>
            </SwiperSlide>


          </Swiper>
        </div>
            </section>
        </>
    )



};
export default HeroFive;