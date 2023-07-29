export type ProductImageT = { thumbnail: string; href: string };

export type ProductDetailsT = {
  brand: string;
  name: string;
  description: string;
  price: number;
  oldPrice: number;
  discount: number;
  currency: "$";
  mainImage?: string | null;
  images?: ProductImageT[] | null;
};
