import { ProductPage, productMetadata } from "@/components/ProductPage";

export const metadata = productMetadata("evaluation");

export default function Page() {
  return <ProductPage slug="evaluation" />;
}
