import { ServicioCard } from "@/interfaces/servicios";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface Props {
  categoria: ServicioCard;
}

const CardCategoryService = ({ categoria }: Props) => {
  return (
    <Link
      key={categoria.id}
      href={`/servicios/${categoria.id}`}
      className="group"
    >
      <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 h-full flex flex-col">
        <div className="relative h-56 overflow-hidden">
          <div className="absolute inset-0 bg-linear-to-t from-black/30 to-transparent z-10"></div>
          <Image
            src={categoria.image.url}
            alt={categoria.title}
            fill
            unoptimized
            className="object-cover group-hover:scale-110 transition-transform duration-500"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />

          <div className="absolute top-4 left-4 z-20">
            <div className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
              Servicio
            </div>
          </div>
        </div>

        <div className="p-6 flex-1 flex flex-col">
          <div className="flex-1">
            <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
              {categoria.title}
            </h3>
            <p className="text-gray-600 mb-6 line-clamp-3">
              {categoria.description}
            </p>
          </div>

          <div className="mt-auto">
            <div className="flex items-center justify-between">
              <div className="inline-flex items-center gap-2 text-blue-600 font-semibold">
                <span>Explorar servicios</span>
                <svg
                  className="w-4 h-4 group-hover:translate-x-1 transition-transform"
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
              </div>
              <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center group-hover:bg-blue-600 transition-colors">
                <svg
                  className="w-5 h-5 text-blue-600 group-hover:text-white transition-colors"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CardCategoryService;
