"use client";

import { SolucionIndustria } from "@/interfaces/soluciones-industria/soluciones-industria.interface";
import { motion, Variants, cubicBezier } from "framer-motion";

interface Props {
  solucion: SolucionIndustria;
}

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: cubicBezier(0.16, 1, 0.3, 1),
    },
  },
};

const statCardVariants: Variants = {
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: cubicBezier(0.16, 1, 0.3, 1),
    },
  },
};

const AcercaIndustrias = ({ solucion }: Props) => {
  return (
    <div className="container mx-auto px-4 md:px-8 lg:px-16 py-16 md:py-20">
      <motion.div
        className="bg-linear-to-r from-blue-50 to-indigo-50 rounded-3xl p-8 md:p-12 shadow-xl"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <motion.div
          className="flex flex-col lg:flex-row items-center gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="shrink-0" />

          <motion.div className="grow" variants={fadeUp}>
            <motion.h2
              className="text-3xl font-bold text-gray-900 mb-4"
              variants={fadeUp}
            >
              Acerca de {solucion.industrias_card.nombre}
            </motion.h2>

            <motion.p
              className="text-gray-700 text-lg leading-relaxed mb-6"
              variants={fadeUp}
            >
              {solucion.industrias_card.description}
            </motion.p>

            <motion.div
              className="grid grid-cols-1 md:grid-cols-3 gap-6"
              variants={containerVariants}
            >
              <motion.div
                variants={statCardVariants}
                whileHover={{ y: -6 }}
                className="bg-white rounded-xl p-6 shadow-md"
              >
                <div className="text-blue-600 font-bold text-2xl mb-2">
                  {solucion.Problemas.length}
                </div>
                <div className="text-gray-600 font-semibold">
                  Problemas Identificados
                </div>
              </motion.div>

              <motion.div
                variants={statCardVariants}
                whileHover={{ y: -6 }}
                className="bg-white rounded-xl p-6 shadow-md"
              >
                <div className="text-green-600 font-bold text-2xl mb-2">
                  {solucion.Soluciones.length}
                </div>
                <div className="text-gray-600 font-semibold">
                  Soluciones Implementadas
                </div>
              </motion.div>

              <motion.div
                variants={statCardVariants}
                whileHover={{ y: -6 }}
                className="bg-white rounded-xl p-6 shadow-md"
              >
                <div className="text-purple-600 font-bold text-2xl mb-2">
                  {solucion.Procesos.length}
                </div>
                <div className="text-gray-600 font-semibold">
                  Procesos Optimizados
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default AcercaIndustrias;
