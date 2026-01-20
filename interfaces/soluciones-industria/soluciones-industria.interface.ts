export interface ImageFormat {
  url: string;
  width: number;
  height: number;
}

export interface Image {
  id: number;
  url: string;
  name: string;
}

export interface CTA {
  id: number;
  label: string;
  url: string;
  variant: "primary" | "secondary" | "third";
}

export interface Problema {
  id: number;
  descripcion: string;
}

export interface Solucion {
  id: number;
  descripcion: string;
}

export interface Proceso {
  id: number;
  descripcion: string;
}

export interface Servicio {
  id: number;
  title: string;
  isActive: boolean;
}

export interface IndustriaCard {
  id: number;
  nombre: string;
  description: string;
}

export interface SolucionIndustria {
  id: number;
  title: string;
  description: string;
  Problemas: Problema[];
  Soluciones: Solucion[];
  Procesos: Proceso[];
  image: Image;
  cta: CTA[];
  servicio_by_ids: Servicio[];
  industrias_card: IndustriaCard;
}

export interface StrapiResponse<T> {
  data: T[];
  meta: {
    pagination: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
}
