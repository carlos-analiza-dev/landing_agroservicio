import ButtonLink from "@/components/ButtonLink";
import EmptyState from "@/components/EmptyState";
import { getSolucionesByIndustriaId } from "@/lib/soluciones-industria/get-soluciones-by-id";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRight, FaCheckCircle, FaProjectDiagram } from "react-icons/fa";
import HeroIndustriaId from "./ui/HeroIndustriaId";
import ProblemasComunes from "./ui/ProblemasComunes";
import Soluciones from "./ui/Soluciones";
import FlujoOperativo from "./ui/FlujoOperativo";
import ServiciosRelacionados from "./ui/ServiciosRelacionados";
import AcercaIndustrias from "./ui/AcercaIndustrias";
import TransformarIndustria from "./ui/TransformarIndustria";

interface Props {
  params: Promise<{
    id: number;
  }>;
}

const SolucionesIndustriaById = async ({ params }: Props) => {
  const { id } = await params;
  const solucion = await getSolucionesByIndustriaId(Number(id));

  if (!solucion) {
    return (
      <EmptyState
        title="No hay datos disponibles"
        description="Actualmente no hay datos en esta industria. Estamos trabajando para agregar nuevos datos pronto."
        action={{
          label: "Ver todos los servicios",
          url: "/servicios",
          variant: "primary",
        }}
      />
    );
  }

  return (
    <section className="w-full">
      <HeroIndustriaId solucion={solucion} />

      <ProblemasComunes solucion={solucion} />

      <Soluciones solucion={solucion} />

      <FlujoOperativo solucion={solucion} />

      {solucion.servicio_by_ids && solucion.servicio_by_ids.length > 0 && (
        <ServiciosRelacionados solucion={solucion} />
      )}

      {solucion.industrias_card && <AcercaIndustrias solucion={solucion} />}

      <TransformarIndustria solucion={solucion} />
    </section>
  );
};

export default SolucionesIndustriaById;
