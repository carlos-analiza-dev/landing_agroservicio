export interface CTA {
  label: string;
  url: string;
  variant: string;
}

export interface InicioData {
  title: string;
  description: string;
  image: string;
  ctas: CTA[];
}
