"use client";
import { motion, Variants } from "framer-motion";
import CardEquipo from "./CardEquipo";
import { ResponseApiEquipo } from "@/interfaces/nosotros/equipo-response.interface";

interface Props {
  equipo: ResponseApiEquipo;
}

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const EquipoSection = ({ equipo }: Props) => {
  return (
    <motion.section
      className="py-20"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <div className="container mx-auto px-4">
        <motion.div className="text-center mb-12" variants={itemVariants}>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Conoce a nuestro <span className="text-blue-600">equipo</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Profesionales apasionados por la tecnología y comprometidos con tu
            éxito
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
        >
          {equipo.data.map((persona) => (
            <motion.div key={persona.id} variants={itemVariants}>
              <CardEquipo persona={persona} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default EquipoSection;
