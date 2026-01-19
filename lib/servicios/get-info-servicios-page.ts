import { ResponseApiServicios } from "@/interfaces/servicios/servicios-info.interface";
import { query } from "../strapi";

export async function getInfoServiciosPage(): Promise<ResponseApiServicios> {
  const res: ResponseApiServicios = await query("servicios-page");
  const { data } = res;

  return { data };
}
