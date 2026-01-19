import { InicioData } from "@/interfaces/inicio";
import { query } from "./strapi";

const { NEXT_PUBLIC_STRAPI_HOST } = process.env;

export async function getInfoInicio(): Promise<InicioData> {
  const res = await query("inicio?populate=image&populate=ctas");

  const { title, description, image, ctas } = res.data;

  return {
    title,
    description,
    image: `${NEXT_PUBLIC_STRAPI_HOST}${image.url}`,
    ctas,
  };
}
