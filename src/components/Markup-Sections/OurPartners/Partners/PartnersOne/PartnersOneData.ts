// Images
import Img01 from "../../../../../../public/images/Partnars_Logos/32-ebn-masr.png";
import Img02 from "../../../../../../public/images/Partnars_Logos/01-saltaoon.png";
import Img03 from "../../../../../../public/images/Partnars_Logos/03-baheya.png";
import Img04 from "../../../../../../public/images/Partnars_Logos/02-nos-dasta.png";
import Img05 from "../../../../../../public/images/Partnars_Logos/07-elnegma-elnabolsya.png";
import Img06 from "../../../../../../public/images/Partnars_Logos/09-mshakeek.png";
import Img07 from "../../../../../../public/images/Partnars_Logos/26-shawerma-halb.png";
import Img08 from "../../../../../../public/images/Partnars_Logos/06-bonoh.png";

// import Img04 from "../../../../../public/images/Partnars_Logos/04-dokan-fteer.png";
// import Img05 from "../../../../../public/images/Partnars_Logos/05-kbsha.png";
// import Img06 from "../../../../../public/images/Partnars_Logos/06-bonoh.png";
// import Img10 from "../../../../../public/images/Partnars_Logos/10-basha.png";
// import Img11 from "../../../../../public/images/Partnars_Logos/11-chicken-planet.png";
// import Img12 from "../../../../../public/images/Partnars_Logos/12-chicken-fila.png";

interface ContentItem {
  title: string;
  description: string;
}

// CAROUSEL DATA

interface DataType {
  id?: number;
  heading?: string;
  heading2?: string;
  imgSrc?: any;
  name?: string;
  content?: ContentItem[]; // Add this property
}

const PartnersOneData = (t: (key: string) => string): DataType[] => [
  {
    id: 1,
    heading: t("P1.heading"),
    heading2: t("P1.heading2"),
    imgSrc: Img01,
    content: [
      {
        title: t("P1.Q1"),
        description: t("P1.A1"),
      },
      {
        title: t("P1.Q2"),
        description: t("P1.A2"),
      },
      {
        title: t("P1.Q3"),
        description: t("P1.A3"),
      },
      {
        title: t("P1.Q4"),
        description: t("P1.A4"),
      },
    ],
  },
  {
    id: 2,
    heading: t("P2.heading"),
    heading2: t("P2.heading2"),
    imgSrc: Img02,
    content: [
      {
        title: t("P2.Q1"),
        description: t("P2.A1"),
      },
      {
        title: t("P2.Q2"),
        description: t("P2.A2"),
      },
      {
        title: t("P2.Q3"),
        description: t("P2.A3"),
      },
      {
        title: t("P2.Q4"),
        description: t("P2.A4"),
      },
    ],
  },
  {
    id: 3,
    heading: t("P3.heading"),
    heading2: t("P3.heading2"),
    imgSrc: Img03,
    content: [
      {
        title: t("P3.Q1"),
        description: t("P3.A1"),
      },
      {
        title: t("P3.Q2"),
        description: t("P3.A2"),
      },
      {
        title: t("P3.Q3"),
        description: t("P3.A3"),
      },
      {
        title: t("P3.Q4"),
        description: t("P3.A4"),
      },
    ],
  },

  {
    id: 4,
    heading: t("P4.heading"),
    heading2: t("P4.heading2"),
    imgSrc: Img04,
    content: [
      {
        title: t("P4.Q1"),
        description: t("P4.A1"),
      },
      {
        title: t("P4.Q2"),
        description: t("P4.A2"),
      },
      {
        title: t("P4.Q3"),
        description: t("P4.A3"),
      },
      {
        title: t("P4.Q4"),
        description: t("P4.A4"),
      },
    ],
  },

  {
    id: 5,
    heading: t("P5.heading"),
    heading2: t("P5.heading2"),
    imgSrc: Img05,
    content: [
      {
        title: t("P5.Q1"),
        description: t("P5.A1"),
      },
      {
        title: t("P5.Q2"),
        description: t("P5.A2"),
      },
      {
        title: t("P5.Q3"),
        description: t("P5.A3"),
      },
      {
        title: t("P5.Q4"),
        description: t("P5.A4"),
      },
    ],
  },

  {
    id: 6,
    heading: t("P6.heading"),
    heading2: t("P6.heading2"),
    imgSrc: Img06,
    content: [
      {
        title: t("P6.Q1"),
        description: t("P6.A1"),
      },
      {
        title: t("P6.Q2"),
        description: t("P6.A2"),
      },
      {
        title: t("P6.Q3"),
        description: t("P6.A3"),
      },
      {
        title: t("P6.Q4"),
        description: t("P6.A4"),
      },
    ],
  },

  {
    id: 7,
    heading: t("P6.heading"),
    heading2: t("P6.heading2"),
    imgSrc: Img07,
    content: [
      {
        title: t("P6.Q1"),
        description: t("P6.A1"),
      },
      {
        title: t("P6.Q2"),
        description: t("P6.A2"),
      },
      {
        title: t("P6.Q3"),
        description: t("P6.A3"),
      },
      {
        title: t("P6.Q4"),
        description: t("P6.A4"),
      },
    ],
  },

  {
    id: 8,
    heading: t("P6.heading"),
    heading2: t("P6.heading2"),
    imgSrc: Img08,
    content: [
      {
        title: t("P6.Q1"),
        description: t("P6.A1"),
      },
      {
        title: t("P6.Q2"),
        description: t("P6.A2"),
      },
      {
        title: t("P6.Q3"),
        description: t("P6.A3"),
      },
      {
        title: t("P6.Q4"),
        description: t("P6.A4"),
      },
    ],
  },

  // Add more items similarly...
];

export default PartnersOneData;
