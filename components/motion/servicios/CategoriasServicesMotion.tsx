"use client";

import CardCategoryService from "@/app/servicios/ui/CardCategoryService";
import DescripcionServicios from "@/app/servicios/ui/DescripcionServicios";
import EstadisticasServicios from "@/app/servicios/ui/EstadisticasServicios";
import { ServicioCard } from "@/interfaces/servicios";
import { InfoServicios } from "@/interfaces/servicios/servicios-info.interface";
import { motion } from "framer-motion";

interface Props {
  categorias_servicios: ServicioCard[];
  data: InfoServicios;
}

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 },
};

const CategoriasServicesMotion = ({ categorias_servicios, data }: Props) => {
  return (
    <div className="min-h-screen bg-linear-to-b from-gray-50 to-white">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <DescripcionServicios
          cantidad={categorias_servicios.length}
          data={data}
        />
      </motion.div>

      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {data ? data.subtitle : "Explora nuestras soluciones"}
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {data
              ? data.subtitle_description
              : "Selecciona una categoría para descubrir todos los servicios que ofrecemos"}
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {categorias_servicios.map((categoria) => (
            <motion.div key={categoria.id} variants={itemVariants}>
              <CardCategoryService categoria={categoria} />
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-20"
        >
          <EstadisticasServicios cantidad={categorias_servicios.length} />
        </motion.div>
      </div>
    </div>
  );
};

export default CategoriasServicesMotion;
