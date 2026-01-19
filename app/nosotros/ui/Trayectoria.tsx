"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import CardMisioVision from "./CardMisioVision";
import Innovando from "./Innovando";
import { NosotrosInfoInterface } from "@/interfaces/nosotros/nosotros-info.interface";

interface Props {
  data: NosotrosInfoInterface;
}

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
      ease: "easeOut",
    },
  },
};
const fadeRight: Variants = {
  hidden: { opacity: 0, x: 40 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const stagger = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const Trayectoria = ({ data }: Props) => {
  return (
    <section className="py-20 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <motion.h2
              variants={fadeUp}
              className="text-3xl md:text-4xl font-bold text-gray-900 mb-6"
            >
              Nuestra <span className="text-blue-600">Trayectoria</span>
            </motion.h2>

            <motion.div
              variants={fadeUp}
              className="space-y-4 text-gray-700 mb-8"
            >
              <p>{data.trayectoria}</p>
            </motion.div>

            <motion.div variants={fadeUp}>
              <CardMisioVision
                title="Nuestra Misión"
                description={data.mision}
              />
            </motion.div>

            <motion.div variants={fadeUp}>
              <CardMisioVision
                isMision={false}
                title="Nuestra Visión"
                description={data.vision}
              />
            </motion.div>
          </motion.div>

          <motion.div
            variants={fadeRight}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="relative"
          >
            <Innovando data={data} />

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true }}
              className="absolute -bottom-6 -right-6 w-48 h-48 bg-linear-to-r from-yellow-400 to-orange-500 rounded-2xl -z-10"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Trayectoria;
