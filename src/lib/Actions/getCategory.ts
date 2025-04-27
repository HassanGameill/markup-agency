import { MarkupStoreURL } from "../prismaDB/constains/constains";
import { Category } from "./types";

const URL = `${MarkupStoreURL}/categories`;

const getCategories = async (categoryId?: string): Promise<Category[]> => {
    try {
        const res = await fetch(URL, { cache: "no-store" });

        if (!res.ok) {
            throw new Error(`Failed to fetch categories: ${res.status} ${res.statusText}`);
        }

        const data = await res.json();

        // Optional: Validate response data structure if necessary
        // validateCategories(data); // Example function using a library like zod

        return data as Category[];
    } catch (error) {
        console.error("Error fetching categories:", error);
        throw error; // Re-throw to allow calling code to handle it
    }
};

export default getCategories;
