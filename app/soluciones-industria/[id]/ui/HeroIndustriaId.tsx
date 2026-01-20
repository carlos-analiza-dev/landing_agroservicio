"use client";
import ButtonLink from "@/components/ButtonLink";
import { SolucionIndustria } from "@/interfaces/soluciones-industria/soluciones-industria.interface";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  backgroundImageAnimation,
  decorativeLineAnimation,
  fadeIn,
  fadeInUp,
  overlayAnimation,
  scaleUp,
  scrollIndicatorAnimation,
  staggerContainer,
} from "@/motion/animation";
import { useEffect, useState } from "react";

interface Props {
  solucion: SolucionIndustria;
}

const PARTICLES = [
  { id: 1, left: 52.8, top: 25.7 },
  { id: 2, left: 92.2, top: 1.2 },
  { id: 3, left: 38.8, top: 90.9 },
  { id: 4, left: 32.2, top: 44.4 },
  { id: 5, left: 7.8, top: 98.8 },
];

const HeroIndustriaId = ({ solucion }: Props) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div className="relative h-[70vh] min-h-125 overflow-hidden">
      <motion.div
        className="absolute inset-0 z-0"
        {...backgroundImageAnimation}
      >
        <Image
          src={solucion.image.url}
          alt={solucion.title}
          unoptimized
          width={500}
          height={500}
          className="w-full h-full object-cover object-center"
          loading="eager"
          priority
        />
        <motion.div
          className="absolute inset-0 bg-linear-to-r from-black/70 via-black/50 to-black/40"
          {...overlayAnimation}
        />
      </motion.div>

      <div className="relative z-10 h-full flex items-center">
        <div className="container mx-auto px-4 md:px-8 lg:px-16">
          <motion.div
            className="max-w-3xl"
            variants={staggerContainer(0.1, 0.3)}
            initial="hidden"
            animate="show"
          >
            <motion.div
              variants={fadeInUp}
              className="flex items-center gap-4 mb-6"
            >
              <span className="text-white/90 text-sm font-semibold uppercase tracking-wider bg-white/20 px-3 py-1 rounded-full backdrop-blur-sm">
                Solución Especializada
              </span>
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: 100 }}
                transition={{ duration: 1, delay: 0.5 }}
                className="h-px bg-linear-to-r from-white/50 to-transparent"
              />
            </motion.div>

            <motion.h1
              variants={fadeInUp}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
            >
              {solucion.title.split("").map((char, index) => (
                <motion.span
                  key={index}
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{
                    delay: 0.8 + index * 0.02,
                    type: "spring" as const,
                    stiffness: 100,
                    damping: 12,
                  }}
                  className="inline-block"
                >
                  {char === " " ? "\u00A0" : char}
                </motion.span>
              ))}
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="text-xl text-white/90 mb-8 max-w-2xl leading-relaxed"
            >
              {solucion.description}
            </motion.p>

            {solucion.cta && solucion.cta.length > 0 && (
              <motion.div className="flex flex-wrap gap-4" variants={fadeIn}>
                {solucion.cta.map((button, index) => (
                  <motion.div
                    key={button.id}
                    variants={scaleUp}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    custom={index}
                    initial="hidden"
                    animate="show"
                  >
                    <ButtonLink cta={button} />
                  </motion.div>
                ))}
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>

      <motion.div
        className="absolute bottom-0 left-0 right-0 h-1 bg-linear-to-r from-transparent via-red-500 to-transparent"
        {...decorativeLineAnimation}
      />

      {isClient && (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {PARTICLES.map((particle) => (
            <motion.div
              key={particle.id}
              className="absolute w-1 h-1 bg-white/30 rounded-full"
              initial={{ opacity: 0 }}
              animate={{
                y: [0, -30, 0],
                opacity: [0, 0.5, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: particle.id * 0.5,
                ease: "easeInOut" as const,
              }}
              style={{
                left: `${particle.left}%`,
                top: `${particle.top}%`,
              }}
            />
          ))}
        </div>
      )}

      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        {...scrollIndicatorAnimation}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut" as const,
          }}
          className="flex flex-col items-center"
        >
          <span className="text-white/70 text-sm mb-2">Scroll</span>
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <motion.div
              className="w-1 h-3 bg-white rounded-full mt-2"
              animate={{ y: [0, 12, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut" as const,
              }}
            />
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default HeroIndustriaId;
