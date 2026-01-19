export interface ValoreNosotrosInterface {
  id: number;
  title: string;
  description: string;
}

export interface ResponseApiValoresNosotros {
  data: ValoreNosotrosInterface[];
}
