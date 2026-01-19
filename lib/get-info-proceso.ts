import { ProcessResponse } from "@/interfaces/response-procesos";
import { query } from "./strapi";

export async function getInfoProcesos() {
  return query("proceso-homes").then((res: ProcessResponse) => {
    const { data } = res;

    const dataProcesos = data.map((inf) => ({
      id: inf.id,
      title: inf.title,
    }));
    return dataProcesos;
  });
}
