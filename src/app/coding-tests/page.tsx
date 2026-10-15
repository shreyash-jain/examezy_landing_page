import { ProductPage, productMetadata } from "@/components/ProductPage";

export const metadata = productMetadata("coding-tests");

export default function Page() {
  return <ProductPage slug="coding-tests" />;
}
