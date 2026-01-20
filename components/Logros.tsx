"use client";

import { motion, Variants } from "framer-motion";

interface Props {
  logros: {
    numero: string;
    texto: string;
  }[];
}

/* Variants */
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const LogrosSection = ({ logros }: Props) => {
  return (
    <section className="py-20 bg-linear-to-r from-blue-600 to-indigo-700">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Nuestros <span className="text-yellow-300">Logros</span>
          </h2>
          <p className="text-blue-100 max-w-2xl mx-auto">
            Cifras que respaldan nuestra experiencia y compromiso
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {logros.map((logro, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                {logro.numero}
              </div>
              <div className="text-blue-100 font-medium">{logro.texto}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default LogrosSection;
