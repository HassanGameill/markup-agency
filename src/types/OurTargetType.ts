type OurTargetType = {
    id: string;
    nameEn?: string;
    nameAr?: string;
  
    ourTargetEval?: {
      nameEn: string;
      nameAr: string;
      evalNumber: number;
      imageUrl: string;
    }[]; // Optional
  
    ourTargetFlag?: {
      nameEn: string;
      nameAr: string;
      evalNumber: number;
      imageUrl: string;
    }[]; // Optional
  
    isFeatured?: boolean;
    isArchived?: boolean;
    createdAt: string;
  };
  
  export default OurTargetType;
  