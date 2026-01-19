import {
  CTA,
  ServiciosCategory,
  SimpleItem,
} from "@/interfaces/servicios/servicio-category.interface";
import Image from "next/image";
import React from "react";

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
  };
}

const ServiciosById = ({ servicio }: Props) => {
  return (
    <div
      key={servicio.id}
      id={`servicio-${servicio.id}`}
      className="scroll-mt-20"
    >
      <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 hover:shadow-2xl transition-shadow duration-300">
        <div className="p-8 bg-linear-to-r from-blue-50 to-indigo-50">
          <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 bg-white rounded-lg shadow-sm">
                  <svg
                    className="w-6 h-6 text-blue-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                    />
                  </svg>
                </div>
                <h2 className="text-3xl font-bold text-gray-900">
                  {servicio.title}
                </h2>
              </div>
              <div className="flex flex-wrap gap-3 mt-4">
                <span
                  className={`px-3 py-1 rounded-full text-sm font-medium ${servicio.isActive ? "bg-green-100 text-green-800" : "bg-gray-100 text-gray-800"}`}
                >
                  {servicio.isActive ? "✓ Activo" : "Inactivo"}
                </span>
                {servicio.updatedAt && (
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                    Actualizado:{" "}
                    {new Date(servicio.updatedAt).toLocaleDateString("es-ES")}
                  </span>
                )}
              </div>
            </div>
            {servicio.cta && servicio.cta.length > 0 && (
              <div className="shrink-0">
                <a
                  href={servicio.cta[0].url}
                  className="inline-flex items-center gap-2 bg-linear-to-r from-blue-600 to-indigo-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  {servicio.cta[0].label}
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </a>
              </div>
            )}
          </div>
        </div>

        <div className="p-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-8">
              {servicio.images && servicio.images.length > 0 && (
                <div className="bg-white rounded-xl border border-gray-200 p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-6 pb-3 border-b border-gray-100 flex items-center gap-2">
                    <svg
                      className="w-5 h-5 text-blue-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                    Galería de Trabajo
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {servicio.images.map((image, index) => (
                      <div
                        key={image.id}
                        className="relative overflow-hidden rounded-xl group"
                      >
                        <div className="aspect-video relative">
                          <Image
                            src={image.url}
                            alt={`Imagen ${index + 1} - ${servicio.title}`}
                            fill
                            unoptimized
                            className="object-cover group-hover:scale-110 transition-transform duration-500"
                            sizes="(max-width: 768px) 100vw, 50vw"
                            priority={index === 0}
                          />
                        </div>
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {servicio.problemas && servicio.problemas.length > 0 && (
                <div className="bg-linear-to-br from-red-50 to-orange-50 rounded-xl border-l-4 border-red-500 p-6">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-3 bg-red-100 rounded-xl">
                      <svg
                        className="w-6 h-6 text-red-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.732-.833-2.464 0L4.232 16.5c-.77.833.192 2.5 1.732 2.5z"
                        />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">
                      Problemas que Solucionamos
                    </h3>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {servicio.problemas.map((problema) => (
                      <div
                        key={problema.id}
                        className="flex items-start gap-3 bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow"
                      >
                        <div className="shrink-0 mt-1">
                          <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                        </div>
                        <p className="text-gray-700 font-medium">
                          {problema.title}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div className="space-y-8">
              {servicio.incluye && servicio.incluye.length > 0 && (
                <div className="bg-white rounded-xl border border-gray-200 p-6">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-3 bg-green-100 rounded-xl">
                      <svg
                        className="w-6 h-6 text-green-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">
                      ¿Qué incluye?
                    </h3>
                  </div>
                  <ul className="space-y-3">
                    {servicio.incluye.map((item) => (
                      <li
                        key={item.id}
                        className="flex items-start gap-3 group"
                      >
                        <div className="shrink-0 mt-1">
                          <svg
                            className="w-4 h-4 text-green-500"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                        </div>
                        <p className="text-gray-700 group-hover:text-green-600 transition-colors">
                          {item.title}
                        </p>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {servicio.cta && servicio.cta.length > 0 && (
                <div className="sticky top-8 bg-linear-to-br from-blue-600 to-indigo-700 rounded-xl shadow-2xl p-6 text-center">
                  <div className="mb-6">
                    <div className="w-14 h-14 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg
                        className="w-7 h-7 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        />
                      </svg>
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2">
                      ¿Interesado en este servicio?
                    </h3>
                    <p className="text-blue-100 text-sm mb-4">
                      Contáctanos para más información
                    </p>
                  </div>
                  <a
                    href={servicio.cta[0].url}
                    className="block w-full bg-white text-blue-600 px-4 py-3 rounded-lg font-bold hover:bg-blue-50 transition-all duration-300 transform hover:scale-[1.02] shadow-lg"
                  >
                    {servicio.cta[0].label}
                  </a>
                  <p className="text-blue-200 text-xs mt-3">
                    Respuesta en menos de 24 horas
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiciosById;
