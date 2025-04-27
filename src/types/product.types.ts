export type TProduct = {
    id: number;
    title: string;
    price: number;
    img: string;
    max?: number;
    quantity?: number;

    cat_prefix?: string;
    isLiked?: boolean;
    isAuthenticated?: boolean;
  };