import ContactoClient from "@/components/contacto/ContactoClient";
import { getInfoContacto } from "@/lib/contacto/get-info-contacto";
import { getCategoryServices } from "@/lib/servicios/get-servicios-category";

const ContactoPage = async () => {
  const contacto = await getInfoContacto();
  const categorias_servicios = await getCategoryServices();

  return (
    <div className="min-h-screen bg-linear-to-b from-gray-50 to-white">
      {" "}
      <ContactoClient
        contacto={contacto}
        categorias_servicios={categorias_servicios}
      />
    </div>
  );
};

export default ContactoPage;
