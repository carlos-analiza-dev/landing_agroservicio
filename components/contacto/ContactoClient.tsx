"use client";
import { ServicioCard, ServiciosHome } from "@/interfaces/servicios";
import { motion } from "framer-motion";
import { useState } from "react";
import { FaCheckCircle } from "react-icons/fa";
import FormContacto from "./FormContacto";
import { ContactoData } from "@/interfaces/contacto/contacto.interface";
import PreguntasContactosMotion from "../motion/contactos/PreguntasContactosMotion";
import ContactosMotion from "../motion/contactos/ContactosMotion";

interface Props {
  contacto: ContactoData;
  categorias_servicios: ServicioCard[];
}

const ContactoClient = ({ contacto, categorias_servicios }: Props) => {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    telefono: "",
    asunto: "",
    mensaje: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({
        nombre: "",
        email: "",
        telefono: "",
        asunto: "",
        mensaje: "",
      });

      setTimeout(() => setIsSubmitted(false), 5000);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-linear-to-b from-gray-50 to-white">
      <section className="relative py-2 0 px-6 md:px-12 overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-r from-blue-600/10 to-purple-600/10" />
        <div className="max-w-7xl mx-auto relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              {contacto.title}
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {contacto.description}
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-12 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-xl p-8 md:p-10"
            >
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-2">
                  Envíanos un Mensaje
                </h2>
                <p className="text-gray-600">
                  Completa el formulario y nos pondremos en contacto contigo a
                  la brevedad.
                </p>
              </div>

              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-green-50 border border-green-200 rounded-xl p-6 text-center"
                >
                  <FaCheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-green-800 mb-2">
                    ¡Mensaje Enviado!
                  </h3>
                  <p className="text-green-600">
                    Gracias por contactarnos. Te responderemos en menos de 24
                    horas.
                  </p>
                </motion.div>
              ) : (
                <FormContacto
                  handleSubmit={handleSubmit}
                  formData={formData}
                  handleChange={handleChange}
                  isSubmitting={isSubmitting}
                />
              )}
            </motion.div>

            <div className="space-y-8">
              <div className="grid sm:grid-cols-2 gap-6">
                {contacto.contactos.map((info) => (
                  <ContactosMotion info={info} key={info.id} />
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-linear-to-r from-blue-50 to-purple-50 rounded-2xl p-8 border border-blue-100"
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  ¿Cómo podemos ayudarte?
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {categorias_servicios.map((servicio, index) => (
                    <div
                      key={index}
                      className="bg-white/80 backdrop-blur-sm rounded-lg px-4 py-3 text-sm font-medium text-gray-700 hover:bg-white hover:shadow-md transition-all duration-300"
                    >
                      {servicio.title}
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-6 md:px-12 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Preguntas Frecuentes
            </h2>
            <p className="text-gray-600">
              Respuestas a las dudas más comunes sobre nuestros servicios
            </p>
          </motion.div>

          <div className="space-y-4">
            {contacto.preguntas.map((faq, index) => (
              <PreguntasContactosMotion faq={faq} key={faq.id} index={index} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactoClient;
