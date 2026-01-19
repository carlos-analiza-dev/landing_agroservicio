import {
  CTA,
  ServiciosCategory,
  SimpleItem,
} from "@/interfaces/servicios/servicio-category.interface";
import React from "react";

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

const DescripcionServiciosId = ({ categoria, servicios }: Props) => {
  return (
    <div className="relative overflow-hidden bg-linear-to-r from-blue-600 to-indigo-700">
      <div className="absolute inset-0 bg-black opacity-20"></div>
      <div className="container relative mx-auto px-4 py-20">
        <div className="max-w-3xl">
          <h1 className="text-5xl font-bold text-white mb-6 leading-tight">
            {categoria?.title || "Nuestros Servicios"}
          </h1>
          <p className="text-xl text-blue-100 mb-8">
            {categoria?.description ||
              "Explora todos nuestros servicios disponibles"}
          </p>
          <div className="flex items-center gap-4">
            <div className="bg-white/20 backdrop-blur-sm rounded-lg px-4 py-2">
              <span className="text-white font-semibold">
                {servicios.length}{" "}
                {servicios.length === 1 ? "servicio" : "servicios"} disponibles
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DescripcionServiciosId;
