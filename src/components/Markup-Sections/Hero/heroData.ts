

type THeroData = {
  id: number;
  title: string;
  description: string;
  btnTitle1: string;
  btnTitle2: string;
  
};



const heroData = (t: (key: string) => string): THeroData[] => [
  {
    id: 1,
    title: t("title"),
    description: t("description"),
    btnTitle1: t("btnTitle1"),
    btnTitle2: t("btnTitle2"),
  }
]

export default heroData;