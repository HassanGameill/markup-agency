import { MarkupStoreURL } from "../prismaDB/constains/constains";
import { Product } from "./types";

export  const fetchProductDetails = async (productIds: string[]): Promise<Product[]> => {
    const response = await fetch(`${MarkupStoreURL}/products/${productIds}`);
    if (!response.ok) {
      throw new Error("Failed to fetch product details");
    }
    return response.json();
  };
  