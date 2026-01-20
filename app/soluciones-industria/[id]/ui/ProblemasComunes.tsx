"use client";

import { SolucionIndustria } from "@/interfaces/soluciones-industria/soluciones-industria.interface";
import { motion, Variants } from "framer-motion";

interface Props {
  solucion: SolucionIndustria;
}

const containerVariants = {
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
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

const ProblemasComunes = ({ solucion }: Props) => {
  return (
    <section className="container mx-auto px-4 md:px-8 lg:px-16 py-16 md:py-20">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Problemas Comunes del Sector
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Identificamos y resolvemos los principales desafíos que enfrenta la
          industria
        </p>
      </motion.div>

      <motion.ul
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {solucion.Problemas.map((p, index) => (
          <motion.li
            key={p.id}
            variants={itemVariants}
            whileHover={{ y: -6, scale: 1.02 }}
            className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100"
          >
            <div className="p-6">
              <div className="flex items-start gap-4">
                <div className="shrink-0">
                  <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center">
                    <span className="text-red-600 font-bold text-lg">
                      {index + 1}
                    </span>
                  </div>
                </div>
                <p className="text-gray-800 text-lg leading-relaxed">
                  {p.descripcion}
                </p>
              </div>

              <motion.div
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.3 }}
                className="origin-left absolute bottom-0 left-0 right-0 h-1 bg-linear-to-r from-red-500 to-orange-500"
              />
            </div>
          </motion.li>
        ))}
      </motion.ul>
    </section>
  );
};

export default ProblemasComunes;
