"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Diferencial } from "@/interfaces/diferencial";
import CardDiferencial from "./CardDiferencial";

interface Props {
  items: Diferencial[];
}

const DiferencialCarousel = ({ items }: Props) => {
  return (
    <Swiper
      modules={[Autoplay]}
      spaceBetween={24}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      autoplay={{ delay: 3500, disableOnInteraction: false }}
      breakpoints={{
        640: { slidesPerView: 2 },
        1024: { slidesPerView: 3 },
        1280: { slidesPerView: 4 },
      }}
      className="pb-12"
    >
      {items.map((item) => (
        <SwiperSlide key={item.id}>
          <CardDiferencial item={item} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default DiferencialCarousel;
