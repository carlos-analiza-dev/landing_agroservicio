import { ValoreNosotrosInterface } from "@/interfaces/nosotros/valores-nosotros.interface";
import React from "react";

interface Props {
  valor: ValoreNosotrosInterface;
}

const CardValoresNosotros = ({ valor }: Props) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
      <h3 className="text-xl font-bold text-gray-900 mb-3">{valor.title}</h3>
      <p className="text-gray-600">{valor.description}</p>
    </div>
  );
};

export default CardValoresNosotros;
