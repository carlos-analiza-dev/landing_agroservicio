import Link from "next/link";
import React from "react";

const NotFoundPage = () => {
  return (
    <div className="min-h-screen bg-linear-to-br from-gray-900 to-black text-white flex flex-col items-center justify-center relative overflow-hidden">
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-green-500/5 rounded-full blur-3xl"></div>

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <div className="relative mb-8">
          <h1 className="text-9xl md:text-[12rem] font-bold tracking-tighter opacity-10 select-none">
            404
          </h1>
          <div className="absolute inset-0 flex items-center justify-center">
            <h1 className="text-9xl md:text-[12rem] font-bold bg-linear-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-pulse">
              404
            </h1>
          </div>
        </div>

        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          ¡Ups! Página no encontrada
        </h2>
        <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-2xl mx-auto">
          Parece que te has aventurado más allá del mapa. La página que buscas
          podría haber sido movida, eliminada o quizás nunca existió.
        </p>

        <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700 rounded-xl p-6 mb-10 max-w-2xl mx-auto text-left font-mono">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            <span className="text-gray-400 ml-2">error_404.js</span>
          </div>
          <code className="text-gray-300">
            <span className="text-blue-400">const</span>{" "}
            <span className="text-green-400">pageNotFound</span> = () =&gt;{" "}
            {"{"}
            <br />
            <span className="text-blue-400 ml-4">return</span>{" "}
            <span className="text-yellow-400">"Esta página no existe"</span>;
            <br />
            {"}"}
          </code>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center mb-12">
          <Link
            href="/"
            className="px-8 py-4 bg-linear-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            Volver al inicio
          </Link>
          <Link
            href="/contacto"
            className="px-8 py-4 bg-transparent border-2 border-white/30 hover:border-white hover:bg-white/10 backdrop-blur-sm rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105"
          >
            Contactar soporte
          </Link>
        </div>

        <div className="mb-8">
          <h3 className="text-2xl font-bold mb-4">Enlaces útiles</h3>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/servicios"
              className="text-gray-400 hover:text-white transition-colors"
            >
              Servicios
            </Link>
            <Link
              href="/nosotros"
              className="text-gray-400 hover:text-white transition-colors"
            >
              Nosotros
            </Link>
            <Link
              href="/contacto"
              className="text-gray-400 hover:text-white transition-colors"
            >
              Contacto
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
