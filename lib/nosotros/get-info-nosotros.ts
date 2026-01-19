import { ResponseApiNosotrosInfo } from "@/interfaces/nosotros/nosotros-info.interface";
import { query } from "../strapi";

export async function getInfoNosotros(): Promise<ResponseApiNosotrosInfo> {
  const res: ResponseApiNosotrosInfo = await query(
    "nosotros-page?populate=cta",
  );

  const { data } = res;

  return { data };
}
