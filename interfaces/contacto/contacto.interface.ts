export interface ContactoItem {
  id: number;
  title: string;
  subtitle: string;
  description: string;
}

export interface PreguntaItem {
  id: number;
  title: string;
  description: string;
}

export interface ContactoData {
  id: number;
  title: string;
  description: string;
  contactos: ContactoItem[];
  preguntas: PreguntaItem[];
}

export interface StrapiResponse<T> {
  data: T;
  meta: unknown;
}
