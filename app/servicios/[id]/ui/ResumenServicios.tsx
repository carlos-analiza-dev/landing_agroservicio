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

const ResumenServicios = ({ categoria, servicios }: Props) => {
  return (
    <div className="mt-16 bg-white rounded-2xl shadow-xl p-8 border border-gray-200">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="flex-1">
          <h3 className="text-2xl font-bold text-gray-900 mb-3">
            Resumen de la Categoría: {categoria.title}
          </h3>
          <p className="text-gray-700">{categoria.description}</p>
        </div>
        <div className="shrink-0">
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-600">
              {servicios.length}
            </div>
            <div className="text-gray-600">
              {servicios.length === 1 ? "servicio" : "servicios"} disponibles
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumenServicios;
