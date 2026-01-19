import { getCategoryServices } from "@/lib/servicios/get-servicios-category";
import { getInfoServiciosPage } from "@/lib/servicios/get-info-servicios-page";
import CategoriasServicesMotion from "@/components/motion/servicios/CategoriasServicesMotion";

const CategoriasServices = async () => {
  const categorias_servicios = await getCategoryServices();
  const { data } = await getInfoServiciosPage();

  return (
    <CategoriasServicesMotion
      categorias_servicios={categorias_servicios}
      data={data}
    />
  );
};

export default CategoriasServices;
