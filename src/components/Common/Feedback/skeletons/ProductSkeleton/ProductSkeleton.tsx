import ContentLoader from "react-content-loader";

const ProductSkeleton = ({ itemCount = 4, width = 190, height = 300 }) => {
  const renderList = Array(itemCount)
    .fill(0)
    .map((_, idx) => (
      <div
        key={idx}
        className="flex justify-center mb-5 mt-2 w-full sm:w-1/2 md:w-1/3 lg:w-1/4"
      >
        <ContentLoader
          speed={2}
          width={width}
          height={height}
          viewBox={`0 0 ${width} ${height}`}
          backgroundColor="#f0f0f0"
          foregroundColor="#ffffff"
        >
          <rect x="32" y="179" rx="3" ry="3" width="105" height="8" />
          <rect x="31" y="4" rx="0" ry="0" width="119" height="162" />
          <rect x="32" y="199" rx="3" ry="3" width="86" height="9" />
          <rect x="32" y="220" rx="3" ry="3" width="86" height="9" />
          <rect x="31" y="239" rx="0" ry="0" width="118" height="31" />
        </ContentLoader>
      </div>
    ));
  return (
    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {renderList}
    </div>
  );
};

export default ProductSkeleton;
