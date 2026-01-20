"use client";
import { Soluciones } from "@/interfaces/soluciones-industria/response-card-soluciones";
import Image from "next/image";
import Link from "next/link";
import { motion, Variants } from "framer-motion";

interface Props {
  soluciones_card: Soluciones[];
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const SolucionesIndustria = ({ soluciones_card }: Props) => {
  return (
    <section className="w-full py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {soluciones_card.map((item) => (
            <motion.div key={item.id} variants={cardVariants}>
              <Link
                href={`/soluciones-industria/${item.id}`}
                className="group block bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
              >
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={item.image.url}
                    alt={item.nombre}
                    fill
                    unoptimized
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition" />
                </div>

                <div className="p-6">
                  <p className="text-gray-800 font-bold text-lg mb-2">
                    {item.nombre}
                  </p>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SolucionesIndustria;
