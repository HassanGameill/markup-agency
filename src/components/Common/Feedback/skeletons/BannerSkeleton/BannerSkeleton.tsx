import ContentLoader from "react-content-loader";

const BannerSkeleton = () => {
  const renderSkeletons = Array(4)
    .fill(0)
    .map((_, idx) => (
      <div
        key={idx}
        className="w-full sm:w-1/2 lg:w-1/4 xl:w-1/5 flex justify-center mb-5 mt-2"
      >
        <ContentLoader
          speed={2}
          width={500} // Adjusted width for banner-like layout
          height={150} // Adjusted height for banner
          viewBox="0 0 500 150"
          backgroundColor="#f0f0f0"
          foregroundColor="#ffffff"
        >
          <rect x="0" y="0" rx="5" ry="5" width="500" height="150" /> {/* Banner rectangle */}
        </ContentLoader>
      </div>
    ));

  return <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">{renderSkeletons}</div>;
};

export default BannerSkeleton;
