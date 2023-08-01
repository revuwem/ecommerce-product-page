import { ProductDetailsT, mockProductDetailsDto } from "@/entities/product";
import { ProductDetails } from "@/widgets/ui";

export default function Home() {
  const product = mockProductDetailsDto(1);
  return <ProductDetails data={product as ProductDetailsT} />;
}
