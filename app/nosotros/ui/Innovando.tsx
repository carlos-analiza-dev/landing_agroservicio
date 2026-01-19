import { NosotrosInfoInterface } from "@/interfaces/nosotros/nosotros-info.interface";
import React from "react";

interface Props {
  data: NosotrosInfoInterface;
}

const Innovando = ({ data }: Props) => {
  return (
    <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
      <div className="w-full h-full bg-linear-to-br from-blue-500 to-purple-600 flex items-center justify-center">
        <div className="text-center text-white p-8">
          <div className="text-6xl mb-4">🚀</div>
          <h3 className="text-2xl font-bold mb-2">Desde {data.anyo_inicio}</h3>
          <p>Innovando en el mundo digital</p>
        </div>
      </div>
    </div>
  );
};

export default Innovando;
