export interface InfoServicios {
  id: number;
  title: string;
  title_description: string;
  subtitle: string;
  subtitle_description: string;
}

export interface ResponseApiServicios {
  data: InfoServicios;
}
