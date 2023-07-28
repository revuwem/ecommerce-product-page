import { Button } from "@/shared/ui";
import CartIcon from "@/shared/assets/icons/cart.svg";

const AddToCartButton = () => (
  <Button>
    <CartIcon stroke="currentColor" width="1rem" height="1rem" /> Add to cart
  </Button>
);

export default AddToCartButton;
