import { ServicioCard } from "@/interfaces/servicios";
import { query } from "../strapi";

const { NEXT_PUBLIC_STRAPI_HOST } = process.env;
export async function getCategoryServices(): Promise<ServicioCard[]> {
  const res = await query("servicios-categories?populate=image");
  return res.data.map((item: ServicioCard) => ({
    id: item.id,
    title: item.title,
    description: item.description,
    image: {
      url: `${NEXT_PUBLIC_STRAPI_HOST}${item.image.url}`,
    },
  }));
}
