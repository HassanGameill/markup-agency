import qs from "query-string";
import { MarkupStoreURL } from "../prismaDB/constains/constains";
import { IUserPkgType, Product } from "./types";

const URL = `${MarkupStoreURL}/userPkgs`;

interface Query {
  categoryId?: string;
  colorId?: string;
  sizeId?: string;
  isFeatured?: boolean;
}

const getUserPkgs = async (query: Query): Promise<IUserPkgType[]> => {
  const url = qs.stringifyUrl({
    url: URL,
    query: {
      colorId: query.colorId,
      sizeId: query.sizeId,
      categoryId: query.categoryId,
      isFeatured: query.isFeatured,
    },
  });

  try {
    const res = await fetch(url, {
      cache: "no-store",
    });

    if (!res.ok) {
      // Log the response text for debugging purposes
      const text = await res.text();
      console.error("Error response:", text);

      throw new Error(`Failed to fetch: ${res.statusText}`);
    }

    // If the response is valid, parse it as JSON
    const data = await res.json();
    return data;  // Assuming the response contains an array of user packages
  } catch (error) {
    console.error("Error fetching user packages:", error);
    throw error;  // Optionally rethrow or handle the error differently
  }
};

export default getUserPkgs;
