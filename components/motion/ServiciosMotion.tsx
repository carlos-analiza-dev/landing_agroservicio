"use client";

import { motion } from "framer-motion";
import { ServicioCard } from "@/interfaces/servicios";
import ServiciosCarousel from "../ServiciosCarousel";
import { containerVariants, itemVariants } from "@/motion/servicios";

interface Props {
  title: string;
  subTitle: string;
  cards: ServicioCard[];
}

const ServiciosMotion = ({ title, subTitle, cards }: Props) => {
  return (
    <motion.section
      className="w-full p-6 md:p-12 lg:p-16"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
    >
      <motion.div className="text-center" variants={itemVariants}>
        <h1 className="text-xl md:text-4xl font-bold">{title}</h1>
        <p className="mt-5 text-lg md:text-2xl font-light">{subTitle}</p>
      </motion.div>

      <motion.div variants={itemVariants}>
        <ServiciosCarousel cards={cards} />
      </motion.div>
    </motion.section>
  );
};

export default ServiciosMotion;
