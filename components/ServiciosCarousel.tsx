"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

import CardServices from "./CardServices";
import { ServicioCard } from "@/interfaces/servicios";

interface Props {
  cards: ServicioCard[];
}

const ServiciosCarousel = ({ cards }: Props) => {
  return (
    <Swiper
      modules={[Autoplay]}
      spaceBetween={16}
      slidesPerView={1.2}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      breakpoints={{
        640: { slidesPerView: 2 },
        768: { slidesPerView: 3 },
        1024: { slidesPerView: 4 },
      }}
      className="mt-8"
    >
      {cards.map((card) => (
        <SwiperSlide key={card.id} className="h-auto">
          <div className="h-full">
            <CardServices card={card} />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ServiciosCarousel;
