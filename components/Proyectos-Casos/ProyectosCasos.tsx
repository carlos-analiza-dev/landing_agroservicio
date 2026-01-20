"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence, Variants } from "framer-motion";
import {
  FiFilter,
  FiX,
  FiSearch,
  FiExternalLink,
  FiCheck,
} from "react-icons/fi";
import { Soluciones } from "@/interfaces/soluciones-industria/response-card-soluciones";
import { ServicioCard } from "@/interfaces/servicios";
import {
  IndustriaCategory,
  ServiciosCategory,
  SimpleItem,
} from "@/interfaces/servicios/servicio-category.interface";
import { CTA } from "@/interfaces/inicio";
import FiltrosPanel from "@/app/proyectos-casos/ui/FiltrosPanel";
import ServiciosFiltered from "@/app/proyectos-casos/ui/ServiciosFiltered";
import HeroSection from "@/app/proyectos-casos/ui/HeroSection";

interface Props {
  soluciones_card: Soluciones[];
  categorias_servicios: ServicioCard[];
  servicios_filtrados: {
    images: {
      id: number;
      documentId: string;
      name: string;
      url: string;
    }[];
    id: number;
    documentId: string;
    title: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    isActive: boolean;
    incluye: SimpleItem[];
    problemas: SimpleItem[];
    cta: CTA[];
    servicios_category: ServiciosCategory;
    industrias_id: IndustriaCategory;
  }[];
}

const ProyectosCasos = ({
  soluciones_card,
  categorias_servicios,
  servicios_filtrados,
}: Props) => {
  const [selectedIndustrias, setSelectedIndustrias] = useState<number[]>([]);
  const [selectedCategorias, setSelectedCategorias] = useState<number[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [filteredServicios, setFilteredServicios] =
    useState(servicios_filtrados);

  useEffect(() => {
    let filtered = [...servicios_filtrados];

    if (selectedIndustrias.length > 0) {
      filtered = filtered.filter((servicio) =>
        selectedIndustrias.includes(servicio.industrias_id.id),
      );
    }

    if (selectedCategorias.length > 0) {
      filtered = filtered.filter((servicio) =>
        selectedCategorias.includes(servicio.servicios_category.id),
      );
    }

    if (searchTerm) {
      filtered = filtered.filter(
        (servicio) =>
          servicio.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          servicio.industrias_id.nombre
            .toLowerCase()
            .includes(searchTerm.toLowerCase()) ||
          servicio.servicios_category.title
            .toLowerCase()
            .includes(searchTerm.toLowerCase()),
      );
    }

    setFilteredServicios(filtered);
  }, [selectedIndustrias, selectedCategorias, searchTerm, servicios_filtrados]);

  const toggleIndustria = (id: number) => {
    setSelectedIndustrias((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id],
    );
  };

  const toggleCategoria = (id: number) => {
    setSelectedCategorias((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id],
    );
  };

  const clearFilters = () => {
    setSelectedIndustrias([]);
    setSelectedCategorias([]);
    setSearchTerm("");
  };

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 15,
      },
    },
  };

  return (
    <div className="min-h-screen bg-linear-to-b from-gray-50 to-white">
      <HeroSection />

      <motion.section
        className="sticky top-0 z-30 bg-white shadow-lg border-b"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col lg:flex-row gap-6">
            <button
              onClick={() => setIsFilterOpen(!isFilterOpen)}
              className="lg:hidden flex items-center gap-2 px-4 py-3 bg-blue-600 text-white rounded-lg font-semibold"
            >
              <FiFilter />
              Filtros
              {(selectedIndustrias.length > 0 ||
                selectedCategorias.length > 0) && (
                <span className="bg-white text-blue-600 text-xs rounded-full w-6 h-6 flex items-center justify-center">
                  {selectedIndustrias.length + selectedCategorias.length}
                </span>
              )}
            </button>

            <div className="flex items-center gap-4">
              {(selectedIndustrias.length > 0 ||
                selectedCategorias.length > 0) && (
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex items-center gap-2 text-sm text-gray-600"
                >
                  <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full">
                    {filteredServicios.length} resultados
                  </span>
                </motion.div>
              )}
              {(selectedIndustrias.length > 0 ||
                selectedCategorias.length > 0 ||
                searchTerm) && (
                <button
                  onClick={clearFilters}
                  className="flex items-center gap-2 px-4 py-2 text-red-600 hover:bg-red-50 rounded-lg"
                >
                  <FiX />
                  Limpiar filtros
                </button>
              )}
            </div>
          </div>

          <AnimatePresence>
            {isFilterOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="lg:hidden mt-6 overflow-hidden"
              >
                <FiltrosPanel
                  soluciones_card={soluciones_card}
                  categorias_servicios={categorias_servicios}
                  selectedIndustrias={selectedIndustrias}
                  selectedCategorias={selectedCategorias}
                  toggleIndustria={toggleIndustria}
                  toggleCategoria={toggleCategoria}
                />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.section>

      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          <motion.aside
            className="hidden lg:block w-80 shrink-0"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 }}
          >
            <FiltrosPanel
              soluciones_card={soluciones_card}
              categorias_servicios={categorias_servicios}
              selectedIndustrias={selectedIndustrias}
              selectedCategorias={selectedCategorias}
              toggleIndustria={toggleIndustria}
              toggleCategoria={toggleCategoria}
            />
          </motion.aside>

          <motion.div
            className="grow"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div className="mb-8" variants={itemVariants}>
              <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold text-gray-900">
                  Proyectos Destacados
                  <span className="text-blue-600 ml-2">
                    ({filteredServicios.length})
                  </span>
                </h2>
                <div className="flex items-center gap-4 text-sm text-gray-600">
                  {selectedIndustrias.length > 0 && (
                    <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full">
                      {selectedIndustrias.length} industria(s)
                    </span>
                  )}
                  {selectedCategorias.length > 0 && (
                    <span className="bg-purple-100 text-purple-600 px-3 py-1 rounded-full">
                      {selectedCategorias.length} categoría(s)
                    </span>
                  )}
                </div>
              </div>
            </motion.div>

            {filteredServicios.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8">
                {filteredServicios.map((servicio) => (
                  <ServiciosFiltered key={servicio.id} servicio={servicio} />
                ))}
              </div>
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-16"
              >
                <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <FiSearch className="text-gray-400 text-3xl" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  No se encontraron proyectos
                </h3>
                <p className="text-gray-600 mb-6">
                  Intenta ajustar tus filtros o términos de búsqueda
                </p>
                <button
                  onClick={clearFilters}
                  className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                >
                  Ver todos los proyectos
                </button>
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ProyectosCasos;
