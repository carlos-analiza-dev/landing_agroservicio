import React from "react";

interface Props {
  logros: {
    numero: string;
    texto: string;
  }[];
}

const LogrosSection = ({ logros }: Props) => {
  return (
    <section className="py-20 bg-linear-to-r from-blue-600 to-indigo-700">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Nuestros <span className="text-yellow-300">Logros</span>
          </h2>
          <p className="text-blue-100 max-w-2xl mx-auto">
            Cifras que respaldan nuestra experiencia y compromiso
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {logros.map((logro, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                {logro.numero}
              </div>
              <div className="text-blue-100 font-medium">{logro.texto}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LogrosSection;
