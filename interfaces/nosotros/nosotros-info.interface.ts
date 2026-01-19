import { CTA } from "../inicio";

export interface NosotrosInfoInterface {
  id: number;
  title: string;
  description: string;
  mision: string;
  vision: string;
  anyo_inicio: number;
  trayectoria: string;
  cta: CTA[];
}

export interface ResponseApiNosotrosInfo {
  data: NosotrosInfoInterface;
}
