import { IBanner } from "@/lib/Actions/types";
import { MarkupStoreURL } from "@/lib/prismaDB/constains/constains";
import queryString from "query-string";

const URL = `${MarkupStoreURL}/banners`;

const getBanner = async (): Promise<IBanner[]> => {
  try {
    const url = queryString.stringifyUrl(
      { url: URL },
      { skipNull: true, skipEmptyString: true, encode: false }
    );

    const res = await fetch(url, {
      next: { revalidate: 0 }, // Alternative to cache: "no-store"
      headers: { "Content-Type": "application/json" }, // Add headers if needed
    });

    if (!res.ok) {
      throw new Error(`Failed to fetch banners: ${res.status} ${res.statusText}`);
    }

    return await res.json();
  } catch (error) {
    console.error("Error fetching banners:", error);
    return [];
  }
};

export default getBanner;
