import ContentLoader from "react-content-loader";

const CategorySkeleton = () => {
  const renderSkeletons = Array(4)
    .fill(0)
    .map((_, idx) => (
      <div
        key={idx}
        className="w-full sm:w-1/2 lg:w-1/4 flex justify-center mb-5 mt-2"
      >
        <ContentLoader
          speed={2}
          width={200}
          height={200}
          viewBox="0 0 200 200"
          backgroundColor="#f0f0f0"
          foregroundColor="#ffffff"
        >
          <rect x="61" y="179" rx="3" ry="3" width="85" height="6" />
          <circle cx="104" cy="84" r="84" />
        </ContentLoader>
      </div>
    ));
  return <div className="grid grid-cols-4 gap-4">{renderSkeletons}</div>;
};

export default CategorySkeleton;
