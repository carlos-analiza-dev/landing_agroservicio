"use client";

import { SolucionIndustria } from "@/interfaces/soluciones-industria/soluciones-industria.interface";
import { motion, Variants, cubicBezier } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa";

interface Props {
  solucion: SolucionIndustria;
}

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: cubicBezier(0.16, 1, 0.3, 1),
    },
  },
};

const Soluciones = ({ solucion }: Props) => {
  return (
    <div className="bg-linear-to-br from-gray-50 to-gray-100 py-16 md:py-20">
      <div className="container mx-auto px-4 md:px-8 lg:px-16">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Nuestras Soluciones
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Módulos especializados diseñados para resolver cada problema
          </p>
        </motion.div>

        <motion.ul
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {solucion.Soluciones.map((s, index) => (
            <motion.li
              key={s.id}
              variants={itemVariants}
              whileHover={{ y: -6 }}
              className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-shadow duration-300 border border-gray-200"
            >
              <div className="flex items-start gap-6">
                <div className="shrink-0">
                  <div className="w-16 h-16 bg-linear-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg">
                    <FaCheckCircle className="text-white text-2xl" />
                  </div>
                </div>

                <div className="grow">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-bold text-gray-900">
                      {index + 1}
                    </h3>
                    <span className="text-sm font-semibold text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                      Especializado
                    </span>
                  </div>

                  <p className="text-gray-700 text-lg leading-relaxed">
                    {s.descripcion}
                  </p>
                </div>
              </div>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </div>
  );
};

export default Soluciones;
