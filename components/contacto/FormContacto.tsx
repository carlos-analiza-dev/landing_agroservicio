import { ChangeEvent, FormEvent } from "react";
import { FaPaperPlane } from "react-icons/fa";

interface Props {
  handleSubmit: (e: FormEvent<Element>) => Promise<void>;
  formData: {
    nombre: string;
    email: string;
    telefono: string;
    asunto: string;
    mensaje: string;
  };
  handleChange: (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => void;
  isSubmitting: boolean;
}

const FormContacto = ({
  handleSubmit,
  formData,
  handleChange,
  isSubmitting,
}: Props) => {
  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Nombre Completo *
          </label>
          <input
            type="text"
            name="nombre"
            value={formData.nombre}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300"
            placeholder="Tu nombre"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Email *
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300"
            placeholder="tu@email.com"
          />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Teléfono
          </label>
          <input
            type="tel"
            name="telefono"
            value={formData.telefono}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300"
            placeholder="+1 (555) 123-4567"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Asunto *
          </label>
          <select
            name="asunto"
            value={formData.asunto}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300 bg-white"
          >
            <option value="">Selecciona un asunto</option>
            <option value="Solicitud de Presupuesto">
              Solicitud de Presupuesto
            </option>
            <option value="Consulta General">Consulta General</option>
            <option value="Soporte Técnico">Soporte Técnico</option>
            <option value="Colaboración">Colaboración</option>
            <option value="Oportunidades de Empleo">
              Oportunidades de Empleo
            </option>
          </select>
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Mensaje *
        </label>
        <textarea
          name="mensaje"
          value={formData.mensaje}
          onChange={handleChange}
          required
          rows={5}
          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300 resize-none"
          placeholder="Describe tu proyecto o consulta..."
        />
      </div>

      <div className="flex items-center justify-between">
        <div className="text-sm text-gray-500">* Campos obligatorios</div>
        <button
          type="submit"
          disabled={isSubmitting}
          className="px-8 py-3 bg-linear-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-lg hover:shadow-xl transition-all duration-300 flex items-center disabled:opacity-70"
        >
          {isSubmitting ? (
            <>
              <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
              Enviando...
            </>
          ) : (
            <>
              Enviar Mensaje
              <FaPaperPlane className="ml-2" />
            </>
          )}
        </button>
      </div>
    </form>
  );
};

export default FormContacto;
