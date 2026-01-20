import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <motion.section
      className="relative bg-linear-to-r from-blue-600 to-purple-700 py-20"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="absolute inset-0 bg-black/20" />
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 text-center">
            Nuestros Proyectos y Casos de Éxito
          </h1>
          <p className="text-xl text-white/90 text-center max-w-3xl mx-auto">
            Descubre cómo hemos transformado negocios con soluciones
            tecnológicas innovadoras
          </p>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default HeroSection;
