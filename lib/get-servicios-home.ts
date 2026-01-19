import { query } from "./strapi";
import { ServiciosHome } from "../interfaces/servicios";

export async function getServiciosHome(): Promise<ServiciosHome> {
  const res = await query("servicios-homes");

  const data = res.data[0];

  return {
    title: data.title,
    subTitle: data.sub_title,
  };
}
