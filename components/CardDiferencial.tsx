import { Diferencial } from "@/interfaces/diferencial";
import Image from "next/image";
import React from "react";

interface Props {
  item: Diferencial;
}

const CardDiferencial = ({ item }: Props) => {
  return (
    <div className="group relative overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300">
      <div className="relative h-56 w-full">
        <Image
          src={item.image.url}
          alt={item.title}
          fill
          unoptimized
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>

      <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/40 to-transparent" />

      <div className="absolute bottom-0 p-4 text-white z-10">
        <h3 className="text-lg font-semibold leading-tight">{item.title}</h3>
      </div>
    </div>
  );
};

export default CardDiferencial;
