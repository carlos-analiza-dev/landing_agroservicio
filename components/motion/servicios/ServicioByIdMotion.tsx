"use client";

import DescripcionServiciosId from "@/app/servicios/[id]/ui/DescripcionServicios";
import ResumenServicios from "@/app/servicios/[id]/ui/ResumenServicios";
import ServiciosById from "@/app/servicios/[id]/ui/ServiciosById";
import {
  CTA,
  ServiciosCategory,
  SimpleItem,
} from "@/interfaces/servicios/servicio-category.interface";
import { motion, Variants } from "framer-motion";

interface Props {
  categoria: ServiciosCategory;
  servicios: {
    images: {
      id: number;
      documentId: string;
      name: string;
      url: string;
    }[];
    id: number;
    documentId: string;
    title: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    isActive: boolean;
    incluye: SimpleItem[];
    problemas: SimpleItem[];
    cta: CTA[];
    servicios_category: ServiciosCategory;
  }[];
}

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const ServicioByIdMotion = ({ categoria, servicios }: Props) => {
  return (
    <div className="min-h-screen bg-linear-to-b from-gray-50 to-white">
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <DescripcionServiciosId categoria={categoria} servicios={servicios} />
      </motion.div>

      <div className="container mx-auto px-4 py-16">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="space-y-16"
        >
          {servicios.map((servicio) => (
            <motion.div key={servicio.id} variants={itemVariants}>
              <ServiciosById servicio={servicio} />
            </motion.div>
          ))}
        </motion.div>

        {categoria && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="mt-24"
          >
            <ResumenServicios categoria={categoria} servicios={servicios} />
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default ServicioByIdMotion;
