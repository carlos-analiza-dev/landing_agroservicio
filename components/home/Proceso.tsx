import { getInfoProcesos } from "@/lib/get-info-proceso";
import ProcesoMotion from "../motion/ProcesoMotion";

const Proceso = async () => {
  const procesos = await getInfoProcesos();

  return <ProcesoMotion procesos={procesos} />;
};

export default Proceso;
