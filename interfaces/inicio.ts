export interface CTA {
  label: string;
  url: string;
  variant: "primary" | "secondary" | "third";
}

export interface InicioData {
  title: string;
  description: string;
  image: string;
  ctas: CTA[];
}
