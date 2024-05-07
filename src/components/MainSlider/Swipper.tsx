"use client";
import Image from "next/image";

import image01 from "../../../public/img/img01.jpg";
import image02 from "../../../public/img/img02.jpg";
import image03 from "../../../public/img/img03.jpg";
import image04 from "../../../public/img/img04.jpg";
import image05 from "../../../public/img/img05.jpg";
import image06 from "../../../public/img/img06.jpg";
import image07 from "../../../public/img/img07.jpg";
import image08 from "../../../public/img/img08.jpg";
import image09 from "../../../public/img/img09.jpg";

import { Swiper, SwiperSlide } from "swiper/react";
import {
  Autoplay,
  Navigation,
  Pagination,
  EffectFade,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

export default function Swipper() {
  return (
    <>
      <Swiper
        className="w-full bg-white rounded-xl z-10"
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation, EffectFade]}
        effect={'fade'}
      >
        <SwiperSlide className="text-center text-5 flex justify-center items-center h-full w-full">
          <Image src={image01} alt={""} />
        </SwiperSlide>
        <SwiperSlide className="text-center text-5 flex justify-center items-center h-full w-full">
          <Image src={image02} alt={""} />
        </SwiperSlide>
        <SwiperSlide className="text-center text-5 flex justify-center items-center h-full w-full">
          <Image src={image03} alt={""} />
        </SwiperSlide>
        <SwiperSlide className="text-center text-5 flex justify-center items-center h-full w-full">
          <Image src={image04} alt={""} />
        </SwiperSlide>
        <SwiperSlide className="text-center text-5 flex justify-center items-center h-full w-full">
          <Image src={image05} alt={""} />
        </SwiperSlide>
        <SwiperSlide className="text-center text-5 flex justify-center items-center h-full w-full">
          <Image src={image06} alt={""} />
        </SwiperSlide>
        <SwiperSlide className="text-center text-5 flex justify-center items-center h-full w-full">
          <Image src={image07} alt={""} />
        </SwiperSlide>
        <SwiperSlide className="text-center text-5 flex justify-center items-center h-full w-full">
          <Image src={image08} alt={""} />
        </SwiperSlide>
        <SwiperSlide className="text-center text-5 flex justify-center items-center h-full w-full">
          <Image src={image09} alt={""} />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
