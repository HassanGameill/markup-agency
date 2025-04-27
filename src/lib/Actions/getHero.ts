import { MarkupStoreURL } from "../prismaDB/constains/constains";
import { IHero, Product } from "./types";

const URL = MarkupStoreURL;

if (!URL) {
  throw new Error("NEXT_PUBLIC_API_URL is not defined in the environment variables.");
}

const getHero = async (): Promise<IHero> => {
  try {
    const response = await fetch(`${URL}/heros`);

    if (!response.ok) {
      throw new Error(`Failed to fetch product with ID : ${response.statusText}`);
    }

    const hero: IHero = await response.json();
    return hero;
  } catch (error) {
    console.error("Error fetching product:", error);
    throw error; // Rethrow to propagate the error to the caller
  }
};

export default getHero;
