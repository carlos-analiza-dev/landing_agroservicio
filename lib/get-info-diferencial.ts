import { Diferencial, DiferencialPage } from "@/interfaces/diferencial";
import { query } from "./strapi";

const { NEXT_PUBLIC_STRAPI_HOST } = process.env;

export async function getDiferencial(): Promise<DiferencialPage | null> {
  const res = await query(
    "diferencials?populate[diferenciales][populate]=image"
  );
  const item = res.data[0];

  if (!item) return null;

  return {
    id: item.id,
    title: item.title,
    diferenciales: item.diferenciales.map((dif: Diferencial) => ({
      id: dif.id,
      title: dif.title,
      image: {
        url: `${NEXT_PUBLIC_STRAPI_HOST}${dif.image.url}`,
      },
    })),
  };
}
