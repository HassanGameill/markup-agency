import { MarkupStoreURL } from "../prismaDB/constains/constains";
import { Color } from "./types";

const URL = `${MarkupStoreURL}/colors`;

const getColors = async (): Promise<Color[]> => {
    try {
        const res = await fetch(URL, { cache: "no-store" });

        if (!res.ok) {
            throw new Error(`Failed to fetch categories: ${res.status} ${res.statusText}`);
        }

        const data = await res.json();

        // Optional: Validate response data structure if necessary
        // validateCategories(data); // Example function using a library like zod

        return data as Color[];
    } catch (error) {
        console.error("Error fetching categories:", error);
        throw error; // Re-throw to allow calling code to handle it
    }
};

export default getColors;
