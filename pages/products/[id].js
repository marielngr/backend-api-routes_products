import { useRouter } from "next/router";
import useSWR from "swr";

export default function ProductDetailsPage() {
  const router = useRouter();
  const { id } = router.query;

  const { data, error, isLoading } = useSWR(`/api/products/${id}`);
  console.log(data);
  if (isLoading) {
    return <p>loading...</p>;
  }
  if (error) {
    return <p>error</p>;
  }

  return (
    <div>
      Hi, {data.name} costs {data.price} {data.currency}.{" "}
    </div>
  );
}
