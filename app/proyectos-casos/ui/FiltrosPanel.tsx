import { FiCheck, FiChevronDown, FiFilter, FiX } from "react-icons/fi";
import { motion } from "framer-motion";
import Image from "next/image";

interface Industria {
  id: number;
  nombre: string;
  description: string;
  image: {
    id: number;
    documentId: string;
    name: string;
    url: string;
  };
}

interface CategoriaServicio {
  id: number;
  title: string;
  description: string;
  image: {
    url: string;
  };
}

interface FiltrosPanelProps {
  soluciones_card: Industria[];
  categorias_servicios: CategoriaServicio[];
  selectedIndustrias: number[];
  selectedCategorias: number[];
  toggleIndustria: (id: number) => void;
  toggleCategoria: (id: number) => void;
}

const FiltrosPanel = ({
  soluciones_card,
  categorias_servicios,
  selectedIndustrias,
  selectedCategorias,
  toggleIndustria,
  toggleCategoria,
}: FiltrosPanelProps) => {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-bold text-gray-900">
          <FiFilter className="inline-block mr-2" />
          Filtros
        </h3>
        {(selectedIndustrias.length > 0 || selectedCategorias.length > 0) && (
          <span className="bg-blue-100 text-blue-600 text-xs font-semibold px-3 py-1 rounded-full">
            {selectedIndustrias.length + selectedCategorias.length} activos
          </span>
        )}
      </div>

      <div className="mb-8">
        <h4 className="font-semibold text-gray-900 mb-4 flex items-center justify-between">
          <span>Industrias</span>
          <FiChevronDown />
        </h4>
        <div className="space-y-3 max-h-60 overflow-y-auto pr-2">
          {soluciones_card.map((industria) => (
            <motion.button
              key={industria.id}
              onClick={() => toggleIndustria(industria.id)}
              whileHover={{ x: 5 }}
              whileTap={{ scale: 0.95 }}
              className={`flex items-center gap-3 w-full p-3 rounded-lg transition-all ${
                selectedIndustrias.includes(industria.id)
                  ? "bg-blue-50 border border-blue-200"
                  : "bg-gray-50 hover:bg-gray-100"
              }`}
            >
              <div className="w-8 h-8 rounded-lg overflow-hidden shrink-0 relative">
                <Image
                  src={industria.image.url}
                  alt={industria.nombre}
                  fill
                  unoptimized
                  className="object-cover"
                />
              </div>

              <span className="text-sm font-medium text-left grow">
                {industria.nombre}
              </span>
              {selectedIndustrias.includes(industria.id) && (
                <FiCheck className="text-blue-600 shrink-0" />
              )}
            </motion.button>
          ))}
        </div>
      </div>

      <div>
        <h4 className="font-semibold text-gray-900 mb-4 flex items-center justify-between">
          <span>Categorías de Servicio</span>
          <FiChevronDown />
        </h4>
        <div className="space-y-3 max-h-60 overflow-y-auto pr-2">
          {categorias_servicios.map((categoria) => (
            <motion.button
              key={categoria.id}
              onClick={() => toggleCategoria(categoria.id)}
              whileHover={{ x: 5 }}
              whileTap={{ scale: 0.95 }}
              className={`flex items-center gap-3 w-full p-3 rounded-lg transition-all ${
                selectedCategorias.includes(categoria.id)
                  ? "bg-purple-50 border border-purple-200"
                  : "bg-gray-50 hover:bg-gray-100"
              }`}
            >
              <div className="w-8 h-8 rounded-lg bg-linear-to-br from-purple-500 to-pink-500 flex items-center justify-center shrink-0">
                <span className="text-white text-xs font-bold">
                  {categoria.title.charAt(0)}
                </span>
              </div>
              <span className="text-sm font-medium text-left grow">
                {categoria.title}
              </span>
              {selectedCategorias.includes(categoria.id) && (
                <FiCheck className="text-purple-600 shrink-0" />
              )}
            </motion.button>
          ))}
        </div>
      </div>

      {(selectedIndustrias.length > 0 || selectedCategorias.length > 0) && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          className="mt-6 pt-6 border-t border-gray-200"
        >
          <h5 className="font-semibold text-gray-900 mb-3">Filtros activos:</h5>
          <div className="flex flex-wrap gap-2">
            {selectedIndustrias.map((id) => {
              const industria = soluciones_card.find((i) => i.id === id);
              return (
                <span
                  key={id}
                  className="inline-flex items-center gap-1 bg-blue-100 text-blue-600 text-xs px-3 py-1 rounded-full"
                >
                  {industria?.nombre}
                  <button
                    onClick={() => toggleIndustria(id)}
                    className="hover:text-blue-800"
                  >
                    <FiX className="w-3 h-3" />
                  </button>
                </span>
              );
            })}
            {selectedCategorias.map((id) => {
              const categoria = categorias_servicios.find((c) => c.id === id);
              return (
                <span
                  key={id}
                  className="inline-flex items-center gap-1 bg-purple-100 text-purple-600 text-xs px-3 py-1 rounded-full"
                >
                  {categoria?.title}
                  <button
                    onClick={() => toggleCategoria(id)}
                    className="hover:text-purple-800"
                  >
                    <FiX className="w-3 h-3" />
                  </button>
                </span>
              );
            })}
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default FiltrosPanel;
