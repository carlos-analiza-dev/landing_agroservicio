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
      staggerChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: cubicBezier(0.16, 1, 0.3, 1),
    },
  },
};

const FlujoOperativo = ({ solucion }: Props) => {
  return (
    <div className="container mx-auto px-4 md:px-8 lg:px-16 py-16 md:py-20">
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Flujo Operativo Optimizado
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Secuencia de procesos que transforman su operación
        </p>
      </motion.div>

      <div className="relative">
        <div className="absolute left-8 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-1 bg-linear-to-b from-blue-500 to-purple-500 hidden md:block" />

        <motion.ol
          className="space-y-8 md:space-y-0"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {solucion.Procesos.map((p, index) => (
            <motion.li
              key={p.id}
              variants={itemVariants}
              whileHover={{ y: -4 }}
              className="relative flex flex-col md:flex-row items-center md:items-start gap-6"
            >
              <div className="shrink-0 z-10">
                <div className="w-16 h-16 rounded-full bg-linear-to-br from-blue-600 to-purple-600 flex items-center justify-center shadow-xl">
                  <span className="text-white font-bold text-xl">{p.id}</span>
                </div>
              </div>

              <div
                className={`
                  grow p-6 rounded-2xl shadow-lg border border-gray-200 bg-white
                  ${
                    index % 2 === 0
                      ? "md:mr-auto md:max-w-[45%] md:text-right"
                      : "md:ml-auto md:max-w-[45%]"
                  }
                `}
              >
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-bold text-gray-900">
                    Paso {p.id}: {p.descripcion}
                  </h3>
                  <div className="w-10 h-1 bg-linear-to-r from-blue-500 to-purple-500 rounded-full" />
                </div>

                <p className="text-gray-600 leading-relaxed">
                  Descripción detallada del proceso de implementación y
                  ejecución.
                </p>
              </div>
            </motion.li>
          ))}
        </motion.ol>
      </div>
    </div>
  );
};

export default FlujoOperativo;
