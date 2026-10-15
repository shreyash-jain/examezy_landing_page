import { ProductPage, productMetadata } from "@/components/ProductPage";

export const metadata = productMetadata("results-analytics");

export default function Page() {
  return <ProductPage slug="results-analytics" />;
}
