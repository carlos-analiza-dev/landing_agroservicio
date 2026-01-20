import { ResponseApiSolucionesIndustriaPage } from "@/interfaces/soluciones-industria/response-soluciones-industria.interface";
import { query } from "../strapi";

const { NEXT_PUBLIC_STRAPI_HOST } = process.env;

export async function getInfoSolucionesIndustriaPage(): Promise<ResponseApiSolucionesIndustriaPage> {
  const res: ResponseApiSolucionesIndustriaPage = await query(
    "solucion-industria?populate=cta&populate=image",
  );
  const { data } = res;

  const imageUrl = `${NEXT_PUBLIC_STRAPI_HOST}${data.image.url}`;
  const DataApi = {
    ...data,
    image: {
      id: data.image.id,
      documentId: data.image.documentId,
      name: data.image.name,
      url: imageUrl,
    },
  };

  return { data: DataApi };
}
