import { EquipoNosotrosInterface } from "@/interfaces/nosotros/equipo-response.interface";
import Image from "next/image";
import React from "react";

interface Props {
  persona: EquipoNosotrosInterface;
}

const CardEquipo = ({ persona }: Props) => {
  return (
    <div
      className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 
                 hover:shadow-xl transition-shadow group"
    >
      <div className="relative h-64 w-full overflow-hidden">
        <Image
          src={persona.image.url}
          alt={persona.image.name}
          fill
          className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
          unoptimized
          priority={false}
        />

        <div
          className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent 
                        opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        />
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-1">
          {persona.nombre}
        </h3>

        <p className="text-blue-600 font-medium mb-3">{persona.cargo}</p>

        <p className="text-gray-600 text-sm leading-relaxed">
          {persona.description}
        </p>
      </div>
    </div>
  );
};

export default CardEquipo;
