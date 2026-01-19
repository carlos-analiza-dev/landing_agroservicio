export interface Image {
  id: number;
  documentId: string;
  name: string;
  url: string;
}

export interface SimpleItem {
  id: number;
  title: string;
}

export interface CTA {
  id: number;
  label: string;
  url: string;
  variant: string;
}

export interface ServiciosCategory {
  id: number;
  documentId: string;
  title: string;
  description: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

export interface Service {
  id: number;
  documentId: string;
  title: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  isActive: boolean;
  images: Image[];
  incluye: SimpleItem[];
  problemas: SimpleItem[];
  cta: CTA[];
  servicios_category: ServiciosCategory;
}

export interface ApiResponse {
  data: Service[];
}

export interface PaginatedApiResponse {
  data: Service[];
  meta: {
    pagination?: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
}
