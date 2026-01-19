import {
  ContactoData,
  StrapiResponse,
} from "@/interfaces/contacto/contacto.interface";
import { query } from "../strapi";

export async function getInfoContacto(): Promise<ContactoData> {
  const res = (await query(
    "contacto?populate=contactos&populate=preguntas"
  )) as StrapiResponse<ContactoData>;

  const { data } = res;

  return {
    id: data.id,
    title: data.title,
    description: data.description,
    contactos: data.contactos,
    preguntas: data.preguntas,
  };
}
