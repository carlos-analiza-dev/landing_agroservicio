import { getInfoNosotros } from "@/lib/nosotros/get-info-nosotros";
import { getValoresNosotros } from "@/lib/nosotros/valores-nosotros";
import { getEquipoNosotros } from "@/lib/nosotros/get-equipo";
import PresentacionServicios from "./ui/PresentacionServicios";
import Trayectoria from "./ui/Trayectoria";
import ValoresSection from "./ui/ValoresSection";
import EquipoSection from "./ui/EquipoSection";
import LogrosSection from "@/components/Logros";
import { logros } from "@/data/logros";

const NosotrosPage = async () => {
  const { data } = await getInfoNosotros();
  const { data: valores } = await getValoresNosotros();
  const equipo = await getEquipoNosotros();

  return (
    <div className="min-h-screen bg-linear-to-b from-gray-50 to-white">
      <PresentacionServicios data={data} />

      <Trayectoria data={data} />

      <ValoresSection valores={valores} />

      <EquipoSection equipo={equipo} />

      <LogrosSection logros={logros} />
    </div>
  );
};

export default NosotrosPage;
