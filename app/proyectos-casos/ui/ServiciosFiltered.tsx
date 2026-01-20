import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { FiCheck, FiExternalLink } from "react-icons/fi";
import {
  IndustriaCategory,
  ServiciosCategory,
  SimpleItem,
} from "@/interfaces/servicios/servicio-category.interface";
import { CTA } from "@/interfaces/inicio";
import { itemVariants } from "@/motion/filters-animations";

interface Props {
  servicio: {
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
    industrias_id: IndustriaCategory;
  };
}

const cardHoverVariants = {
  hover: {
    y: -10,
    scale: 1.02,
    boxShadow: "0 20px 40px rgba(0, 0, 0, 0.1)",
    transition: {
      duration: 0.3,
      ease: "easeOut" as const,
    },
  },
  tap: {
    scale: 0.98,
    transition: {
      duration: 0.2,
    },
  },
};

const ServiciosFiltered = ({ servicio }: Props) => {
  return (
    <motion.article
      key={servicio.id}
      variants={itemVariants}
      whileHover="hover"
      whileTap="tap"
      {...cardHoverVariants}
      className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200 group cursor-pointer"
    >
      <div className="relative h-48 overflow-hidden">
        <Image
          src={servicio.images[0]?.url || "/placeholder.jpg"}
          alt={servicio.title}
          width={400}
          height={400}
          unoptimized
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-linear-to-ts from-black/60 to-transparent" />

        <div className="absolute top-4 left-4 flex gap-2">
          <span className="bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
            {servicio.industrias_id.nombre}
          </span>
          <span className="bg-purple-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
            {servicio.servicios_category.title}
          </span>
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
          {servicio.title}
        </h3>

        <p className="text-gray-600 mb-4 line-clamp-2">
          {servicio.servicios_category.description}
        </p>

        <div className="mb-6">
          <h4 className="text-sm font-semibold text-gray-700 mb-2">Incluye:</h4>
          <ul className="space-y-1">
            {servicio.incluye.slice(0, 3).map((item) => (
              <li
                key={item.id}
                className="flex items-center gap-2 text-sm text-gray-600"
              >
                <FiCheck className="text-green-500" />
                {item.title}
              </li>
            ))}
            {servicio.incluye.length > 3 && (
              <li className="text-sm text-gray-500">
                +{servicio.incluye.length - 3} más...
              </li>
            )}
          </ul>
        </div>

        <div className="mb-6">
          <h4 className="text-sm font-semibold text-gray-700 mb-2">
            Problemas resueltos:
          </h4>
          <div className="flex flex-wrap gap-2">
            {servicio.problemas.map((problema) => (
              <span
                key={problema.id}
                className="bg-red-50 text-red-600 text-xs px-3 py-1 rounded-full"
              >
                {problema.title}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.article>
  );
};

export default ServiciosFiltered;
