export type Billboard = {
  id: string;
  name: string;
  imageUrl: string;
}

export type Category = {
  id: string;
  nameEn: string;
  nameAr: string;
  imageUrl: string;
  billboard: Billboard;
}


export type Size = {
  id: string;
  name: string;
  value: string;
}



export type Color = {
  id: string;
  name: string;
  value: string;
}






export type pkgItem = {
  id: string;
  nameEn: string;
  nameAr: string;
  imageUrl: string;
};




export type userPkgType = {
  id: string;
  category: Category;
  titleEn: string;
  titleAr: string;
  subtitleEn: string;
  subtitleAr: string;
  
  price: string;
  size: Size;
  color: Color;
  images: string;
  pkgItem?: pkgItem[];
};
