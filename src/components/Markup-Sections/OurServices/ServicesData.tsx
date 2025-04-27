import img01 from "../../../../public/images/about/imgOne.svg"
import img02 from "../../../../public/images/about/imgTwo.svg"
import img03 from "../../../../public/images/about/imgThree.svg"




interface DataType {
  id?: number;
  heading: string;
  heading2: string;
  imgSrc: string;
  name: string;
  students: number;
  classes: number;
  price: number;
  rating: number;
  
}

const ServicesData = (t: (key: string) => string): DataType[] => [
  {
    id: 1,
    heading: "Full stack modern",
    heading2: "javascript",
    name: "Colt stelle",
    imgSrc: img01,
    students: 150,
    classes: 12,
    price: 20,
    rating: 4.7,
  },
  {
    id: 2,
    heading: "Design system",
    heading2: "with React programme",
    name: "Colt stelle",
    imgSrc: img02,
    students: 130,
    classes: 12,
    price: 20,
    rating: 4.7,
  },
  {
    id: 3,
    heading: "Design banner",
    heading2: "with Figma",
    name: "Colt stelle",
    imgSrc: img03,
    students: 120,
    classes: 12,
    price: 20,
    rating: 4.7,
  },

  {
    id: 4,
    heading: "Design banner",
    heading2: "with Figma",
    name: "Colt stelle",
    imgSrc: img03,
    students: 120,
    classes: 12,
    price: 20,
    rating: 4.7,
  },

  {
    id: 5,
    heading: "Design banner",
    heading2: "with Figma",
    name: "Colt stelle",
    imgSrc: img03,
    students: 120,
    classes: 12,
    price: 20,
    rating: 4.7,
  },

  {
    id: 6,
    heading: "Design banner",
    heading2: "with Figma",
    name: "Colt stelle",
    imgSrc: img02,
    students: 120,
    classes: 12,
    price: 20,
    rating: 4.7,
  },

  {
    id: 7,
    heading: "Design banner",
    heading2: "with Figma",
    name: "Colt stelle",
    imgSrc: img03,
    students: 120,
    classes: 12,
    price: 20,
    rating: 4.7,
  },
];

export default ServicesData;
