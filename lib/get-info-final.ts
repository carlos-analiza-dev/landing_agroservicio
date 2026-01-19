import { InicioDataFinal } from "@/interfaces/final.interface";
import { query } from "./strapi";

export async function getInfoFinaHome(): Promise<InicioDataFinal> {
  const res = await query("final-homes?populate=ctas");

  const { title, description, ctas } = res.data[0];
  return { title, description, ctas };
}
