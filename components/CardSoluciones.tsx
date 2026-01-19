import { CategoriaIndustria } from "@/interfaces/soluciones-industri.interface";

interface PropsSolucionesCard {
  categoria: CategoriaIndustria;
}

const CardSoluciones = ({ categoria }: PropsSolucionesCard) => {
  return (
    <div className="bg-white p-6 rounded-lg border border-gray-200 hover:border-blue-400 hover:shadow-md transition-all duration-200">
      <div className="flex items-center space-x-4">
        <div className="shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
          <span className="text-blue-600 font-bold text-lg">
            {categoria.name.charAt(0)}
          </span>
        </div>
        <div>
          <h3 className="font-semibold text-gray-900 text-lg">
            {categoria.name}
          </h3>
        </div>
      </div>
    </div>
  );
};

export default CardSoluciones;
