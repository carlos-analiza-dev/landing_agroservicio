import LogrosSection from "@/components/Logros";
import ProyectosCasos from "@/components/Proyectos-Casos/ProyectosCasos";
import { logros } from "@/data/logros";
import { getServicioByCategoriaIdByServicioId } from "@/lib/proyectos-casos/get-proyectos-casos";
import { getCategoryServices } from "@/lib/servicios/get-servicios-category";
import { getInfoCardSolucione } from "@/lib/soluciones-industria/get-soluciones-card";

const ProyectosCasosPage = async () => {
  const { data: soluciones_card } = await getInfoCardSolucione();

  const categorias_servicios = await getCategoryServices();

  const servicios_filtrados = await getServicioByCategoriaIdByServicioId();

  return (
    <div>
      <ProyectosCasos
        soluciones_card={soluciones_card}
        categorias_servicios={categorias_servicios}
        servicios_filtrados={servicios_filtrados}
      />
      <LogrosSection logros={logros} />
    </div>
  );
};

export default ProyectosCasosPage;
