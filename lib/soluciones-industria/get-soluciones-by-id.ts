import { query } from "../strapi";
import {
  SolucionIndustria,
  StrapiResponse,
} from "@/interfaces/soluciones-industria/soluciones-industria.interface";

const { NEXT_PUBLIC_STRAPI_HOST } = process.env;

export async function getSolucionesByIndustriaId(
  industriaId: number,
): Promise<SolucionIndustria | null> {
  const res: StrapiResponse<SolucionIndustria> = await query(
    `soluciones-by-ids?populate=image&populate=cta&populate=servicio_by_ids&populate=industrias_card`,
  );

  const solucion = res.data.find(
    (item) => item.industrias_card?.id === industriaId,
  );

  if (!solucion) {
    return null;
  }

  const solucionData = {
    ...solucion,
    image: {
      id: solucion?.image.id,
      url: `${NEXT_PUBLIC_STRAPI_HOST}${solucion?.image.url}`,
      name: solucion?.image.name,
    },
  };

  return solucionData;
}
