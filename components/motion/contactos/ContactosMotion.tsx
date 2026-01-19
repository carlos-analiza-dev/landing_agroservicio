import { motion } from "framer-motion";
import { ContactoItem } from "@/interfaces/contacto/contacto.interface";

interface Props {
  info: ContactoItem;
}

const ContactosMotion = ({ info }: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 border border-gray-100"
    >
      <div className="flex items-start space-x-4">
        <div>
          <h3 className="font-bold text-gray-900 mb-1">{info.title}</h3>
          <p className="text-lg text-gray-900 font-semibold">{info.subtitle}</p>
          <p className="text-sm text-gray-500 mt-1">{info.description}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default ContactosMotion;
