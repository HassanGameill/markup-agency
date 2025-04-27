import BannerCard from "./bannerCard";
import getBanner from "./getBanner";


export const BannerClientTwo = async () => {
  try {
    const banners = await getBanner();
    console.log("BANNRS", banners)

    const bannersData = banners[1];

    // If you expect multiple items, map over the productPKG array
    return (
      <div>
        <BannerCard key={bannersData.id} {...bannersData} />
      </div>
    );
  } catch (error) {
    console.error("Error fetching banners:", error);
    return (
      <div className="text-red-500 text-center p-5">
        Failed to load banners. Please try again later.
      </div>
    );
  }
};

