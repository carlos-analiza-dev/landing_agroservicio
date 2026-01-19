import { ResponseApiValoresNosotros } from "@/interfaces/nosotros/valores-nosotros.interface";
import { query } from "../strapi";

export async function getValoresNosotros(): Promise<ResponseApiValoresNosotros> {
  const res: ResponseApiValoresNosotros = await query("valores-nosotros");

  const { data } = res;

  return { data };
}
