"use client";

import Link from "next/link";
import { FaArrowRight, FaProjectDiagram } from "react-icons/fa";
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

const cardVariants: Variants = {
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

const ServiciosRelacionados = ({ solucion }: Props) => {
  return (
    <div className="bg-linear-to-r from-gray-900 to-gray-800 py-16 md:py-20">
      <div className="container mx-auto px-4 md:px-8 lg:px-16">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Servicios Relacionados
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Soluciones complementarias para una transformación completa
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {solucion.servicio_by_ids.map((servicio) => (
            <motion.div
              key={servicio.id}
              variants={cardVariants}
              whileHover={{ y: -6 }}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-colors duration-300 group"
            >
              <div className="flex items-center gap-4 mb-6">
                <motion.div
                  whileHover={{ rotate: 5, scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <FaProjectDiagram className="text-3xl text-blue-400" />
                </motion.div>

                <h3 className="text-xl font-bold text-white">
                  {servicio.title}
                </h3>
              </div>

              <p className="text-gray-300 mb-6">
                Solución especializada para optimizar procesos y mejorar la
                eficiencia operativa.
              </p>

              <Link
                href={`/servicios/${servicio.id}`}
                className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 font-semibold"
              >
                Ver detalles del servicio
                <motion.span
                  whileHover={{ x: 6 }}
                  transition={{ duration: 0.3 }}
                >
                  <FaArrowRight />
                </motion.span>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default ServiciosRelacionados;
