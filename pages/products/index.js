import ProductList from "@/components/ProductList";
import useSWR from "swr";

export default function ProductPage() {
  //hier eigener client, der die API, hier den Endpunkt "products", konsumiert
  const { data: products, error, isLoading } = useSWR("/api/products");

  if (isLoading) {
    return <p>loading...</p>;
  }
  if (error) {
    return <p>error</p>;
  }
  return <ProductList products={products} />;
}
