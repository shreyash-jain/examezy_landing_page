import { ProductPage, productMetadata } from "@/components/ProductPage";

export const metadata = productMetadata("online-exams");

export default function Page() {
  return <ProductPage slug="online-exams" />;
}
