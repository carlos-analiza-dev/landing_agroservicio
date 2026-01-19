"use client";

import { containerProceso, itemProceso } from "@/motion/proceso";
import { motion, Variants } from "framer-motion";

interface Proceso {
  id: number;
  title: string;
  description?: string;
}

interface Props {
  procesos: Proceso[];
}

const ProcesoMotion = ({ procesos }: Props) => {
  return (
    <section className="w-full py-20 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Nuestro Proceso
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Metodología probada para resultados excepcionales
          </p>
        </motion.div>

        <motion.div
          variants={containerProceso}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="relative"
        >
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-linear-to-b from-blue-200 via-purple-200 to-pink-200 hidden md:block" />

          {procesos.map((proceso, index) => (
            <motion.div
              key={proceso.id}
              variants={itemProceso}
              className={`flex items-center mb-12 last:mb-0 ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              <div className="hidden md:flex w-1/2 justify-center relative">
                <div
                  className={`absolute top-6 ${
                    index % 2 === 0 ? "right-0" : "left-0"
                  }`}
                >
                  <motion.div
                    whileHover={{ scale: 1.3 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    className="w-8 h-8 rounded-full bg-white border-4 border-blue-500 shadow-lg relative"
                  >
                    <span className="absolute inset-0 flex items-center justify-center text-xs font-bold text-blue-600">
                      {index + 1}
                    </span>
                  </motion.div>
                </div>
              </div>

              <div className="w-full md:w-1/2">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className={`bg-white p-8 rounded-2xl shadow-lg border border-gray-100 ${
                    index % 2 === 0 ? "md:mr-12" : "md:ml-12"
                  }`}
                >
                  <div className="flex items-start space-x-4">
                    <div className="shrink-0 w-12 h-12 rounded-xl bg-linear-to-br from-blue-500 to-blue-600 flex items-center justify-center text-white font-bold">
                      {index + 1}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        {proceso.title}
                      </h3>
                      {proceso.description && (
                        <p className="text-gray-600">{proceso.description}</p>
                      )}
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProcesoMotion;
