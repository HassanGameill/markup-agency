import React from "react";
import ContentLoader from "react-content-loader";

interface ProductSkeletonProps {
  itemCount?: number;
  width?: number;
  height?: number;
  backgroundColor?: string;
  foregroundColor?: string;
  className?: string;
}

const ProductSkeleton: React.FC<ProductSkeletonProps> = React.memo(
  ({
    itemCount = 2,
    width = 190,
    height = 300,
    backgroundColor = "#f0f0f0",
    foregroundColor = "#e0e0e0",
    className = "",
  }) => {
    // Create a skeleton loader for each product item
    const renderList = Array(itemCount)
      .fill(0)
      .map((_, idx) => (
        <div
          key={idx}
          className={`flex justify-center mb-5 mt-2 ${className}`}
        >
          <ContentLoader
            speed={2}
            width={width}
            height={height}
            viewBox={`0 0 ${width} ${height}`}
            backgroundColor={backgroundColor}
            foregroundColor={foregroundColor}
            preserveAspectRatio="xMidYMid meet"
          >
            {/* Product Image Skeleton */}
            <rect
              x="35"
              y="5"
              rx="8"
              ry="8"
              width="120"
              height="160"
              style={{ animation: "shimmer 1.5s infinite linear" }}
            />
            {/* Product Title Skeleton */}
            <rect x="32" y="179" rx="3" ry="3" width="105" height="8" />
            {/* Price Skeleton */}
            <rect x="31" y="199" rx="3" ry="3" width="86" height="9" />
            {/* Description Skeleton */}
            <rect x="32" y="220" rx="3" ry="3" width="86" height="9" />
            {/* Button Skeleton */}
            <rect x="31" y="239" rx="16" ry="16" width="118" height="35" />
          </ContentLoader>
        </div>
      ));

    return (
      <div className="flex items-center justify-between gap-4 ">
        {renderList}
      </div>
    );
  }
);

// Add displayName for React component
ProductSkeleton.displayName = "ProductSkeleton";

export default ProductSkeleton;
