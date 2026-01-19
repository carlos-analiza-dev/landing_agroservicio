import { PreguntaItem } from "@/interfaces/contacto/contacto.interface";
import { motion } from "framer-motion";

interface Props {
  faq: PreguntaItem;
  index: number;
}

const PreguntasContactosMotion = ({ faq, index }: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      viewport={{ once: true }}
      className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow duration-300"
    >
      <h4 className="font-bold text-lg text-gray-900 mb-2">{faq.title}</h4>
      <p className="text-gray-600">{faq.description}</p>
    </motion.div>
  );
};

export default PreguntasContactosMotion;
