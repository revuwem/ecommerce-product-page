import { ProductDetailsT } from "../../model/types";
import products from "./products.json";

const mockProductDetailsDto = (id: number) =>
  products.find((product) => product.id === id) as ProductDetailsT | null;

// eslint-disable-next-line import/prefer-default-export
export { mockProductDetailsDto };
