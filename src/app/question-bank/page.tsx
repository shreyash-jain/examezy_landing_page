import { ProductPage, productMetadata } from "@/components/ProductPage";

export const metadata = productMetadata("question-bank");

export default function Page() {
  return <ProductPage slug="question-bank" />;
}
