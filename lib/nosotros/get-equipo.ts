import { ResponseApiEquipo } from "@/interfaces/nosotros/equipo-response.interface";
import { query } from "../strapi";

const { NEXT_PUBLIC_STRAPI_HOST } = process.env;

export async function getEquipoNosotros(): Promise<ResponseApiEquipo> {
  const res: ResponseApiEquipo = await query("nuestro-equipos?populate=image");
  const data = res.data.map((item) => ({
    id: item.id,
    nombre: item.nombre,
    cargo: item.cargo,
    description: item.description,
    image: {
      id: item.image.id,
      documentId: item.image.documentId,
      name: item.image.name,
      url: item.image?.url ? `${NEXT_PUBLIC_STRAPI_HOST}${item.image.url}` : "",
    },
  }));

  return { data };
}
