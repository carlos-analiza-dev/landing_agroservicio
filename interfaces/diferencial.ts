export interface StrapiImageFormat {
  url: string;
  width: number;
  height: number;
}

export interface StrapiImage {
  url: string;
  alternativeText: string | null;
  formats?: {
    thumbnail?: StrapiImageFormat;
    small?: StrapiImageFormat;
    medium?: StrapiImageFormat;
  };
}

export interface Diferencial {
  id: number;
  title: string;
  image: StrapiImage;
}

export interface DiferencialPage {
  id: number;
  title: string;
  diferenciales: Diferencial[];
}
