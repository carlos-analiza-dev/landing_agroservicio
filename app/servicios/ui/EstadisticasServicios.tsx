import React from "react";

interface Props {
  cantidad: number;
}

const EstadisticasServicios = ({ cantidad }: Props) => {
  return (
    <div className="bg-linear-to-r from-blue-600 to-indigo-700 rounded-2xl p-8 text-white">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="text-center">
          <div className="text-4xl font-bold mb-2">{cantidad}</div>
          <div className="text-blue-200">servicios</div>
        </div>
        <div className="text-center">
          <div className="text-4xl font-bold mb-2">100%</div>
          <div className="text-blue-200">Personalizado</div>
        </div>
        <div className="text-center">
          <div className="text-4xl font-bold mb-2">24/7</div>
          <div className="text-blue-200">Soporte</div>
        </div>
        <div className="text-center">
          <div className="text-4xl font-bold mb-2">∞</div>
          <div className="text-blue-200">Escalabilidad</div>
        </div>
      </div>
    </div>
  );
};

export default EstadisticasServicios;
