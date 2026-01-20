import { PaginatedApiResponse } from "@/interfaces/servicios/servicio-category.interface";
import { query } from "../strapi";

const { NEXT_PUBLIC_STRAPI_HOST } = process.env;

export async function getServicioByCategoriaId(categoryId: number) {
  const res: PaginatedApiResponse = await query(
    `servicio-by-ids?filters[servicios_category][id][$eq]=${categoryId}&populate=images&populate=incluye&populate=problemas&populate=cta&populate=servicios_category&populate=industrias_id`,
  );

  return res.data.map((service) => ({
    ...service,
    images: service.images.map((img) => ({
      id: img.id,
      documentId: img.documentId,
      name: img.name,
      url: `${NEXT_PUBLIC_STRAPI_HOST}${img.url}`,
    })),
  }));
}
