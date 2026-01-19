"use client";

import { motion } from "framer-motion";
import CardSoluciones from "../CardSoluciones";
import { SolucionIndustria } from "@/interfaces/soluciones-industri.interface";
import {
  cardVariants,
  gridVariants,
  headerVariants,
  sectionVariants,
} from "@/motion/soluciones";

interface Props {
  soluciones: SolucionIndustria | null;
}

const SolucionesMotion = ({ soluciones }: Props) => {
  if (!soluciones) return null;

  return (
    <motion.section
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-120px" }}
      className="w-full p-6 md:p-12 lg:p-16"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div variants={headerVariants} className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {soluciones.title}
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {soluciones.description}
          </p>
        </motion.div>

        <motion.div
          variants={gridVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {soluciones.categorias.map((categoria) => (
            <motion.div
              key={categoria.slug}
              variants={cardVariants}
              whileHover={{ scale: 1.04, y: -4 }}
              whileTap={{ scale: 0.97 }}
            >
              <CardSoluciones categoria={categoria} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default SolucionesMotion;
