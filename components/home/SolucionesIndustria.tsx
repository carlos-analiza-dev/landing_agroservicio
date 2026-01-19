import { getInfoSolucionesIndustria } from "@/lib/get-soluciones-industria";
import SolucionesMotion from "../motion/SolucionesMotion";
const SolucionesIndustria = async () => {
  const soluciones = await getInfoSolucionesIndustria();

  return <SolucionesMotion soluciones={soluciones} />;
};

export default SolucionesIndustria;
