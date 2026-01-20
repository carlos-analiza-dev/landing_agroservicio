"use client";

import ButtonLink from "@/components/ButtonLink";
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

const buttonVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: cubicBezier(0.16, 1, 0.3, 1),
    },
  },
};

const TransformarIndustria = ({ solucion }: Props) => {
  return (
    <motion.div
      className="bg-linear-to-r from-blue-600 to-indigo-700 py-16"
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
    >
      <motion.div
        className="container mx-auto px-4 md:px-8 lg:px-16 text-center"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-white mb-6"
          variants={fadeUp}
        >
          ¿Listo para Transformar su {solucion.title}?
        </motion.h2>

        <motion.p
          className="text-white/90 text-xl mb-8 max-w-2xl mx-auto"
          variants={fadeUp}
        >
          Implemente nuestras soluciones especializadas y optimice sus
          operaciones desde hoy
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          variants={containerVariants}
        >
          {solucion.cta.map((cta) => (
            <motion.div
              key={cta.id}
              variants={buttonVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <ButtonLink cta={cta} />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default TransformarIndustria;
