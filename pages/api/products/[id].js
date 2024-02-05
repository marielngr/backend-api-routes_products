import { getProductById } from "@/services/productServices.js";

//serverapi mit Endpunkt /api/products/[id]
export default function handler(request, response) {
  if (request.method === "GET") {
    const { id } = request.query;
    console.log(JSON.stringify(request.query));
    response.status(200).json(getProductById(id));
    return;
  }
  response.status(405).json({ message: "Method not allowed" });
}
