import { InfoServicios } from "@/interfaces/servicios/servicios-info.interface";

interface Props {
  cantidad: number;
  data: InfoServicios;
}

const DescripcionServicios = ({ cantidad, data }: Props) => {
  return (
    <div className="relative overflow-hidden bg-linear-to-r from-blue-600 to-indigo-700">
      <div className="absolute inset-0 bg-black opacity-20"></div>
      <div className="container relative mx-auto px-4 py-20">
        <div className="max-w-3xl text-center mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            {data ? data.title : "Nuestros Servicios"}
          </h1>
          <p className="text-xl text-blue-100 mb-8">
            {data
              ? data.title_description
              : "Soluciones tecnológicas personalizadas para transformar y potenciar tu negocio"}
          </p>
          <div className="inline-flex items-center gap-3 bg-white/20 backdrop-blur-sm rounded-full px-6 py-3">
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
              />
            </svg>
            <span className="text-white font-semibold">
              {cantidad} servicios especializadas
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DescripcionServicios;
