import { MarkupStoreURL } from "../prismaDB/constains/constains";
import { Product } from "./types";

const URL = MarkupStoreURL;

if (!URL) {
  throw new Error("NEXT_PUBLIC_API_URL is not defined in the environment variables.");
}

const getSingleProduct = async (productId: string): Promise<Product> => {
  try {
    const response = await fetch(`${URL}/products/${productId}`, {
      cache: "no-store",
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch product with ID ${productId}: ${response.statusText}`);
    }

    const product: Product = await response.json();
    return product;
  } catch (error) {
    console.error("Error fetching product:", error);
    throw error; // Rethrow to propagate the error to the caller
  }
};

export default getSingleProduct;
