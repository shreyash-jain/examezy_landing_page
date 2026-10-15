import { ProductPage, productMetadata } from "@/components/ProductPage";

export const metadata = productMetadata("question-types");

export default function Page() {
  return <ProductPage slug="question-types" />;
}
