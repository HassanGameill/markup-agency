import CategorySkeleton from "../skeletons/CategorySkeleton/CategorySkeleton";
import ProductSkeleton from "../skeletons/ProductSkeleton/ProductSkeleton";
import CartSkeleton from "../skeletons/CartSkeleton/CartSkeleton";
import HeroProducts from "../skeletons/HeroSkeleton/HeroProducts";
import banner from "../skeletons/BannerSkeleton/BannerSkeleton";

import {LottieHandler} from "../LottiHandler/LottiHandler";

import { TLoading } from "@/types"; 

const skeletonsTypes = {
  category: CategorySkeleton,
  product: ProductSkeleton,
  cart: CartSkeleton,
  HeroProducts,
  banner
};

type LoadingProps = {
  status: any;
  error: null | string;
  children: React.ReactNode;
  type?: keyof typeof skeletonsTypes;
};

const Loading = ({
  status,
  error,
  children,
  type = "category",
}: LoadingProps) => {
  
  const Component = skeletonsTypes[type];

  if (status === "pending") {
    return <Component />;
  }
  if (status === "failed") {
    return (
      <div className="">
        <LottieHandler type="error" message={error as string} />
      </div>
    );
  }
  return <div>{children}</div>;
};

export default Loading;
