export interface Billboard {
  id: string;
  name: string;
  imageUrl: string;
}

export interface Category {
  id: string;
  nameEn: string;
  nameAr: string;
  imageUrl: string;
  billboard: Billboard;
}





export interface ProductDB {
  id: string;
  userId?: string;
  titleEn: string;
  titleAr: string;
  subtitleEn: string;
  subtitleAr: string;
  descriptionEn: string;
  descriptionAr: string;
  price: number;
  categoryId: string;
  pkgRecipesId: string;
  sizeId: string;
  colorId: string;
  images: { url: string }[];
  
}


export interface Product {
  id: string;
  category: Category;
  titleEn: string;
  titleAr: string;
  subtitleEn: string;
  subtitleAr: string;
  descriptionEn: string;
  descriptionAr: string;
  price: string;
  size: Size;
  color: Color;
  max?: number;
  quantity?: number;
  imageUrl?: string;
  images: Image[];
  productItem?: ProductItem[]; // Optional

  pkgRecipes?: PkgRecipes;
}

export interface PkgRecipes {
  id: string;
  titleAr: string;
  titleEn: string;
  imageUrl?: string;
  productItem?: ProductItem[]; // Optional
}

export interface ProductItem {
  id: string;
  nameEn: string;
  nameAr: string;
  price?: string;
  imageUrl: string;
}

export interface pkgItem {
  id: string;
  nameEn: string;
  nameAr: string;
  price?: number;
  imageUrl: string;
}

export interface IUserPkgType {
  id: string;
  category: Category;
  titleEn: string;
  titleAr: string;
  subtitleEn: string;
  subtitleAr: string;
  price: string;
  size: Size;
  color: Color;
  imageUrl?: string;
  pkgItem?: pkgItem[];
}

export interface Image {
  id: string;
  url: string;
}

export interface Size {
  id: string;
  name: string;
  value: string;
}

export interface Color {
  id: string;
  name: string;
  value: string;
}

export interface IHero {
  map(
    arg0: (itemData: any) => import("react").JSX.Element,
  ): import("react").ReactNode;
  id?: string;
  titleEn?: string;
  titleAr?: string;
  subtitleEn?: string;
  subtitleAr?: string;

  heroImages?: Image[];
}


export interface IBanner {
  length: number;
  filter(arg0: (item: any) => any): unknown;
  map(
    arg0: (itemData: any) => import("react").JSX.Element,
  ): import("react").ReactNode;
  id?: string;
  titleEn?: string;
  titleAr?: string;
  subtitleEn?: string;
  subtitleAr?: string;

  bannerImages?: Image[];
}




//__________ Content DTOS ________________

export interface Content {
  id: string;
  nameEn: string;
  nameAr: string;

  sectionTitleEn?: string;
  sectionTitleAr?: string;
  sectionSubtitleEn?: string;
  sectionSubtitleAr?: string;

  titleEn: string;
  titleAr: string;
  subtitleEn: string;
  subtitleAr: string;
  descriptionEn: string;
  descriptionAr: string;
  contentImages: { url: string }[];
  isFeatured?: boolean;
  isArchived?: boolean;
  createdAt: string;
}


//__________ OurTarget DTOS ________________

export interface OurTargetType {
  id: string;
  nameEn: string;
  nameAr: string;
  content: Content;
  ourTargetFlag: ourTargetFlag; // Array of package items (max 10 items)
  ourTargetEval: ourTargetEval; // Array of package items (max 10 items)
  isFeatured?: boolean;
  isArchived?: boolean;
  createdAt: string;
}


export interface ourTargetFlag {
  id: string;
  nameEn: string; // English name of the package item
  nameAr: string; // Arabic name of the package item
  evalNumber?: number; // Arabic name of the package item
  imageUrl: string; // URL of the package item image
}

export interface ourTargetEval {
  id: string;
  nameEn: string; // English name of the package item
  nameAr: string; // Arabic name of the package item
  evalNumber?: number; // Arabic name of the package item
  imageUrl: string; // URL of the package item image
}




//__________ Partners One DTOS ________________

export interface PartnerOne {
  nameEn: string;
  nameAr: string;
  imageUrl: string; // URL of the package item image
  content: Content;
  partnerOneInfo: partnerOneInfo; // Array of package items (max 10 items)
  isFeatured?: boolean;
  isArchived?: boolean;
  createdAt: string;
}



export interface partnerOneInfo {
  id: string;
  titleEn: string;
  titleAr: string;
  subtitleEn: string;
  subtitleAr: string;
  imageUrl: string; // URL of the package item image
}

// ___________ ________________________
export interface PartnerOne {
  nameEn: string;
  nameAr: string;
  imageUrl: string; // URL of the package item image
  content: Content;
  partnerTwoImages: { url: string }[];
  isFeatured?: boolean;
  isArchived?: boolean;
  createdAt: string;
}









export interface News {
  nameEn?: string;
  nameAr?: string;

  titleEn?: string;
  titleAr?: string;

  subtitleEn?: string;
  subtitleAr?: string;

  linkOne?: string;
  linkTwo?: string;
  linkThree?: string;

  imageUrl: string; // URL of the package item image
  content: Content;
  newsCategory: NewsCategory;
  isFeatured?: boolean;
  isArchived?: boolean;
  createdAt: string;
}



export interface Questions {
  id: string;
  nameEn?: string;
  nameAr?: string;
  imageUrl?: string; // URL of the package item image
  contentId?: string;
  qEn?: string;
  qAr?: string;
  aEn?: string;
  aAr?: string;

  content: Content;
  isFeatured?: boolean;
  isArchived?: boolean;
  createdAt: string;
}



export interface Teamwork {
  id: string;
  nameEn?: string;
  nameAr?: string;
  imageUrl?: string; // URL of the package item image
  contentId?: string;
  titleEn?: string;
  titleAr?: string;
  content: Content;
  isFeatured?: boolean;
  isArchived?: boolean;
  createdAt: string;
}





export interface NewsCategory {
  id: string;
  nameEn: string;
  nameAr: string;
  imageUrl: string;
  createdAt: string;
}


export interface Testimonials {
  id: string;
  nameEn?: string;
  nameAr?: string;
  imageUrl?: string; 
  brandImageUrl?: string; 
  positionNameEn?: string;
  positionNameAr?: string;
  titleEn?: string;
  titleAr?: string;
  content: Content;
  isFeatured?: boolean;
  isArchived?: boolean;
  createdAt?: string;
}
