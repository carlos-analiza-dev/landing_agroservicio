export interface CategoriaIndustria {
  name: string;
  slug: string;
}

export interface SolucionIndustria {
  title: string;
  description: string;
  categorias: CategoriaIndustria[];
}
