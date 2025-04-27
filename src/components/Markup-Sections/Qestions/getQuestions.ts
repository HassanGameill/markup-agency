import qs from "query-string";
import { MarkupStoreURL } from "@/lib/prismaDB/constains/constains";
import {  Questions } from "@/lib/Actions/types";

const URL = `${MarkupStoreURL}/questions`;

interface Query {
  contentId?: string;
}

const getQuestions = async (query?: Query): Promise<Questions[]> => {
  try {
    const url = qs.stringifyUrl(
      {
        url: URL,
        query: {
          contentId: query?.contentId, // Prevents accessing `undefined.contentId`
        },
      },
      { skipNull: true, skipEmptyString: true, encode: false }
    );

    const res = await fetch(url, {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error(`Failed to fetch: ${res.status} ${res.statusText}`);
    }

    return await res.json();
  } catch (error) {
    console.error("Error fetching OurTarget data:", error);
    return []; // Return an empty array to prevent crashes
  }
};

export default getQuestions;
