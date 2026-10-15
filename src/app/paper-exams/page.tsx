import { ProductPage, productMetadata } from "@/components/ProductPage";

export const metadata = productMetadata("paper-exams");

export default function Page() {
  return <ProductPage slug="paper-exams" />;
}
