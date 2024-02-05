import { getAllProducts } from "@/services/productServices.js";

//serverapi mit Endpunkt /api/products
export default function handler(request, response) {
  console.log("neuer request");
  if (request.method === "GET") {
    response.status(200).json(getAllProducts());
    console.log("fertig");
    return;
  }
  response.status(405).json({ message: "Method not allowed" });
}
