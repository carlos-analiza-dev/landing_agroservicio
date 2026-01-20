import { Image } from "../servicios/servicio-category.interface";

export interface Soluciones {
  id: number;
  nombre: string;
  description: string;
  image: Image;
}

export interface ResponseApiCardSoluciones {
  data: Soluciones[];
}
