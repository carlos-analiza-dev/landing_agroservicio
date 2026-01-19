"use client";

import { motion, Variants } from "framer-motion";
import DiferencialCarousel from "../DiferencialCarousel";
import { DiferencialPage } from "@/interfaces/diferencial";
import {
  sectionVariantsDiferencial,
  titleVariantsDiferencial,
} from "@/motion/diferencial";

interface Props {
  infoDif: DiferencialPage;
}

const DiferencialMotion = ({ infoDif }: Props) => {
  return (
    <motion.section
      variants={sectionVariantsDiferencial}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className="w-full bg-white py-16 px-6 md:px-12 lg:px-20"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          variants={titleVariantsDiferencial}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            {infoDif.title}
          </h2>
        </motion.div>

        <motion.div variants={titleVariantsDiferencial}>
          <DiferencialCarousel items={infoDif.diferenciales} />
        </motion.div>
      </div>
    </motion.section>
  );
};

export default DiferencialMotion;
