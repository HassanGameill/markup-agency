

export interface IHeroDtaType {
    id: string;
    nameEn: string;
    nameAr: string;
    titleEn: string;
    titleAr: string;
    subtitleEn: string;
    subtitleAr: string;
    btnOneEn: string;
    btnOneAr: string;
    btnTwoEn: string;
    btnTwoAr: string;
    videoId: string;
    heroImages: { url: string }[];
    heroWords: { wordEn: string; wordAr: string }[]; // Updated to match the schema
  
  
  }
  