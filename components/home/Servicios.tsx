import { getServiciosHome } from "@/lib/get-servicios-home";
import ServiciosMotion from "../motion/ServiciosMotion";
import { getCategoryServices } from "@/lib/servicios/get-servicios-category";

const Servicios = async () => {
  const servicios = await getServiciosHome();

  const cards = await getCategoryServices();

  return (
    <ServiciosMotion
      title={servicios.title}
      subTitle={servicios.subTitle}
      cards={cards}
    />
  );
};

export default Servicios;
