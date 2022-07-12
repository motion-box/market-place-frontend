export interface ProductModel {
  id: number;
  seen: number;
  city: string;
  address: string;
  date: string;
  title: string;
  image_url: string;
  images: string[];
  amount: number;
  has_guarantee: boolean;
  is_sale?: boolean;
  sale_time?: string;
  price: number;
  old_price?: number;
  is_favorite: boolean;
  currency: "uzs" | "usd" | string;
  info: {
    category: string;
    condition: number;
    manufacturer: string;
    model: string;
    storage: number;
    color: string;
    description: string;
  };
}
