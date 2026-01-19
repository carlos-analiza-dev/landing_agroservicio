import Diferencial from "@/components/home/Diferencial";
import Final from "@/components/home/Final";
import Hero from "@/components/home/Hero";
import Proceso from "@/components/home/Proceso";
import Servicios from "@/components/home/Servicios";
import SolucionesIndustria from "@/components/home/SolucionesIndustria";

const Inicio = async () => {
  return (
    <div className="w-full">
      <Hero />
      <Servicios />
      <SolucionesIndustria />
      <Diferencial />
      <Proceso />
      <Final />
    </div>
  );
};

export default Inicio;
