"use client";

import { motion } from "framer-motion";
import ButtonLink from "@/components/ButtonLink";
import { CTA } from "@/interfaces/inicio";
import { SolucionesIndustriaPage } from "@/interfaces/soluciones-industria/response-soluciones-industria.interface";
import Image from "next/image";

interface Props {
  info_soluciones: SolucionesIndustriaPage;
}

const SolucionesIndustriaHero = ({ info_soluciones }: Props) => {
  return (
    <section className="relative w-full bg-gray-900 text-white overflow-hidden">
      <motion.div
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="absolute inset-0"
      >
        <Image
          src={info_soluciones.image.url}
          alt={info_soluciones.title}
          fill
          unoptimized
          className="object-cover opacity-50"
          priority
        />
      </motion.div>

      <div className="absolute inset-0 bg-black/60" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-32">
        <motion.div
          className="max-w-3xl"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0, y: 40 },
            visible: {
              opacity: 1,
              y: 0,
              transition: {
                staggerChildren: 0.15,
              },
            },
          }}
        >
          <motion.h1
            className="text-4xl md:text-5xl font-bold mb-6"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            {info_soluciones.title}
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl text-gray-200 mb-8"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            {info_soluciones.description}
          </motion.p>

          <motion.div
            className="flex gap-4"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.1 },
              },
            }}
          >
            {info_soluciones.cta?.map((cta: CTA) => (
              <motion.div
                key={cta.url}
                variants={{
                  hidden: { opacity: 0, y: 10 },
                  visible: { opacity: 1, y: 0 },
                }}
              >
                <ButtonLink cta={cta} />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default SolucionesIndustriaHero;
