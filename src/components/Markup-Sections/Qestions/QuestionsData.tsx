interface DataType {
  id?: number;
  question?: string;
  answer1?: string;
  answer2?: string;
  answer3?: string;
  answer4?: string;
}

const NewsData = (t: (key: string) => string): DataType[] => [
  {
    id: 1,
    question: t("Q1.Q1"),
    answer1: t("Q1.A1"),
    answer2: t("Q1.A2"),
    answer3: t("Q1.A3"),
    answer4: t("Q1.A4"),
  },
  {
    id: 2,
    question: t("Q2.Q1"),
    answer1: t("Q2.A1"),
    answer2: t("Q2.A2"),
    answer3: t("Q2.A3"),
    answer4: t("Q2.A4"),
  },
  {
    id: 3,
    question: t("Q3.Q1"),
    answer1: t("Q3.A1"),
  },
  {
    id: 4,
    question: t("Q4.Q1"),
    answer1: t("Q4.A1"),
  },
];

export default NewsData;
