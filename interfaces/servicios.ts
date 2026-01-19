export interface StrapiImage {
  url: string;
  width: number;
  height: number;
  alternativeText: string | null;
}

export interface ServicioCard {
  id: number;
  title: string;
  description: string;
  image: StrapiImage;
}

export interface ServiciosHome {
  title: string;
  subTitle: string;
}
