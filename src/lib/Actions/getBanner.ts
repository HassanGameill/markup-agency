// import { CustomersStoreURL } from "../prismaDB/constains/constains";
// import { IBanner, IHero, Product } from "./types";

// const URL = CustomersStoreURL;

// if (!URL) {
//   throw new Error("NEXT_PUBLIC_API_URL is not defined in the environment variables.");
// }

// const getBanner = async (): Promise<IBanner> => {
//   try {
//     const response = await fetch(`${URL}/banners`);

//     if (!response.ok) {
//       throw new Error(`Failed to fetch product with ID : ${response.statusText}`);
//     }

//     const banner: IBanner = await response.json();
//     return banner;
//   } catch (error) {
//     console.error("Error fetching product:", error);
//     throw error; // Rethrow to propagate the error to the caller
//   }
// };

// export default getBanner;
