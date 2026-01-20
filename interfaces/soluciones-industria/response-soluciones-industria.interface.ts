import { CTA, Image } from "../servicios/servicio-category.interface";

export interface SolucionesIndustriaPage {
  id: number;
  title: string;
  description: string;
  cta: CTA[];
  image: Image;
}

export interface ResponseApiSolucionesIndustriaPage {
  data: SolucionesIndustriaPage;
}
