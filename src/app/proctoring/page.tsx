import { ProductPage, productMetadata } from "@/components/ProductPage";

export const metadata = productMetadata("proctoring");

export default function Page() {
  return <ProductPage slug="proctoring" />;
}
