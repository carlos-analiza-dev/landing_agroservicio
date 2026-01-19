"use client";
import { motion, Variants } from "framer-motion";
import CardValoresNosotros from "./CardValoresNosotros";
import { ValoreNosotrosInterface } from "@/interfaces/nosotros/valores-nosotros.interface";

interface Props {
  valores: ValoreNosotrosInterface[];
}

const containerVariants: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
  },
};

const ValoresSection = ({ valores }: Props) => {
  return (
    <motion.section
      className="py-20 bg-gray-50"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <div className="container mx-auto px-4">
        <motion.div className="text-center mb-12" variants={itemVariants}>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Nuestros <span className="text-blue-600">Valores</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Los principios que guían cada decisión y proyecto que emprendemos
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
        >
          {valores.map((valor) => (
            <motion.div key={valor.id} variants={itemVariants}>
              <CardValoresNosotros valor={valor} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default ValoresSection;
