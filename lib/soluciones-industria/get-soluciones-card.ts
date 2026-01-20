import {
  ResponseApiCardSoluciones,
  Soluciones,
} from "@/interfaces/soluciones-industria/response-card-soluciones";
import { query } from "../strapi";

const { NEXT_PUBLIC_STRAPI_HOST } = process.env;

export async function getInfoCardSolucione(): Promise<ResponseApiCardSoluciones> {
  const res: ResponseApiCardSoluciones = await query(
    "industrias-cards?populate=image",
  );

  const { data } = res;

  const dataMap = data.map((item: Soluciones) => ({
    id: item.id,
    nombre: item.nombre,
    description: item.description,
    image: {
      id: item.image.id,
      documentId: item.image.documentId,
      name: item.image.name,
      url: `${NEXT_PUBLIC_STRAPI_HOST}${item.image.url}`,
    },
  }));
  return { data: dataMap };
}
