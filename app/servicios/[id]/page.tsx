import EmptyState from "@/components/EmptyState";
import { getServicioByCategoriaId } from "@/lib/servicios/get-servicio-by-id";
import Image from "next/image";
import DescripcionServiciosId from "./ui/DescripcionServicios";
import ServiciosById from "./ui/ServiciosById";
import ResumenServicios from "./ui/ResumenServicios";
import ServicioByIdMotion from "@/components/motion/servicios/ServicioByIdMotion";
interface PageProps {
  params: Promise<{
    id: string;
  }>;
}

const ServicioByIdPage = async ({ params }: PageProps) => {
  const { id } = await params;
  const categoryId = Number(id);
  const servicios = await getServicioByCategoriaId(categoryId);
  if (!servicios || servicios.length === 0) {
    return (
      <EmptyState
        title="No hay servicios disponibles"
        description="Actualmente no hay servicios en esta categoría. Estamos trabajando para agregar nuevos servicios pronto."
        action={{
          label: "Ver todos los servicios",
          url: "/servicios",
          variant: "primary",
        }}
      />
    );
  }

  const categoria = servicios[0]?.servicios_category;

  return <ServicioByIdMotion categoria={categoria} servicios={servicios} />;
};

export default ServicioByIdPage;
