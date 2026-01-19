import ContactoClient from "@/components/contacto/ContactoClient";
import { getInfoContacto } from "@/lib/contacto/get-info-contacto";
import { getCategoryServices } from "@/lib/servicios/get-servicios-category";

const ContactoPage = async () => {
  const contacto = await getInfoContacto();
  const categorias_servicios = await getCategoryServices();

  return (
    <ContactoClient
      contacto={contacto}
      categorias_servicios={categorias_servicios}
    />
  );
};

export default ContactoPage;
