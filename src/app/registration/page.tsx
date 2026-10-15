import { ProductPage, productMetadata } from "@/components/ProductPage";

export const metadata = productMetadata("registration");

export default function Page() {
  return <ProductPage slug="registration" />;
}
