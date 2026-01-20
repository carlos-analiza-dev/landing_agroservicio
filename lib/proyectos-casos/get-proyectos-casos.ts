import { PaginatedApiResponse } from "@/interfaces/servicios/servicio-category.interface";
import { query } from "../strapi";

const { NEXT_PUBLIC_STRAPI_HOST } = process.env;

interface GetServiciosParams {
  servicioId?: number;
  categoryId?: number;
}

export async function getServicioByCategoriaIdByServicioId({
  servicioId,
  categoryId,
}: GetServiciosParams = {}) {
  const filters: string[] = [];

  if (servicioId) {
    filters.push(`filters[industrias_id][id][$eq]=${servicioId}`);
  }

  if (categoryId) {
    filters.push(`filters[servicios_category][id][$eq]=${categoryId}`);
  }

  const filterQuery = filters.length ? `&${filters.join("&")}` : "";

  const res: PaginatedApiResponse = await query(
    `servicio-by-ids?populate=images&populate=incluye&populate=problemas&populate=cta&populate=servicios_category&populate=industrias_id${filterQuery}`,
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
