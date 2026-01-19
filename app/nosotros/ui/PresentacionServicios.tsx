"use client";

import { motion, Variants } from "framer-motion";
import ButtonLink from "@/components/ButtonLink";
import { NosotrosInfoInterface } from "@/interfaces/nosotros/nosotros-info.interface";

interface Props {
  data: NosotrosInfoInterface;
}

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const fadeUp: Variants = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
    },
  },
};


const PresentacionServicios = ({ data }: Props) => {
  return (
    <section className="relative overflow-hidden bg-linear-to-r from-blue-600 to-indigo-700 pt-24">

      <div className="absolute inset-0 bg-black opacity-20" />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="container relative mx-auto px-4 py-20"
      >
        <div className="max-w-4xl mx-auto text-center">
        
          <motion.h1
            variants={fadeUp}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
          >
            {data.title}
          </motion.h1>

    
          <motion.p
            variants={fadeUp}
            className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto"
          >
            {data.description}
          </motion.p>

     
          <motion.div
            variants={fadeUp}
            className="flex justify-center gap-4 flex-wrap"
          >
            {data.cta.map((item) => (
              <ButtonLink key={item.url} cta={item} />
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default PresentacionServicios;
