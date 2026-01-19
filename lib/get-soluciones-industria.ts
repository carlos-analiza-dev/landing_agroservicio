import { SolucionIndustria } from "@/interfaces/soluciones-industri.interface";
import { query } from "./strapi";

export async function getInfoSolucionesIndustria(): Promise<SolucionIndustria | null> {
  const res = await query("soluciones-industrias");
  const item = res?.data?.[0];

  if (!item) return null;

  return {
    title: item.title,
    description: item.description,
    categorias: item.categorias,
  };
}
