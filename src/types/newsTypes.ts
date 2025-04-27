type NewsColumnType = {
  id: string;
  nameEn?: string;
  nameAr?: string;
  imageUrl?: string; // URL of the package item image
  contentId?: string;
  qEn?: string;
  qAr?: string;
  aEn?: string;
  aAr?: string;

  isFeatured?: boolean;
  isArchived?: boolean;
  createdAt: string;
};

export default NewsColumnType;
