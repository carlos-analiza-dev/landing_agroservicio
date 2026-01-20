import { getInfoSolucionesIndustriaPage } from "@/lib/soluciones-industria/get-info-soluciones";
import SolucionesIndustriaHero from "./ui/SolucionesIndustriaHero";
import SolucionesIndustria from "./ui/SolucionesIndustria";
import LogrosSection from "@/components/Logros";
import { logros } from "@/data/logros";
import { getInfoCardSolucione } from "@/lib/soluciones-industria/get-soluciones-card";

const SolucionesIndustriaPage = async () => {
  const { data: info_soluciones } = await getInfoSolucionesIndustriaPage();
  const { data: soluciones_card } = await getInfoCardSolucione();

  return (
    <div className="w-full">
      <SolucionesIndustriaHero info_soluciones={info_soluciones} />
      <SolucionesIndustria soluciones_card={soluciones_card} />
      <LogrosSection logros={logros} />
    </div>
  );
};

export default SolucionesIndustriaPage;
