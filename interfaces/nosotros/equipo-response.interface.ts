import { Image } from "../servicios/servicio-category.interface";

export interface EquipoNosotrosInterface {
  id: number;
  nombre: string;
  cargo: string;
  description: string;
  image: Image;
}

export interface ResponseApiEquipo {
  data: EquipoNosotrosInterface[];
}
