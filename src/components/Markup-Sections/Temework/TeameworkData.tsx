interface DataType {
  id?: number;
  heading: string;
  name: string;
  imgSrc: string;
}

const TeameworData = (t: (key: string) => string): DataType[] => [
  {
    id: 1,
    heading: "Senior UX Designer",
    name: "Shoo Thar Mien",
    imgSrc: "/images/mentor/user3.png",
  },
  {
    id: 2,
    heading: "Senior UX Designer",
    name: "Shoo Thar Mien",
    imgSrc: "/images/mentor/user2.png",
  },
  {
    id: 3,
    heading: "Senior UX Designer",
    name: "Shoo Thar Mien",
    imgSrc: "/images/mentor/user1.png",
  },
  {
    id: 4,
    heading: "Senior UX Designer",
    name: "Shoo Thar Mien",
    imgSrc: "/images/mentor/user3.png",
  },
  {
    id: 5,
    heading: "Senior UX Designer",
    name: "Shoo Thar Mien",
    imgSrc: "/images/mentor/user2.png",
  },
  {
    id: 6,
    heading: "Senior UX Designer",
    name: "Shoo Thar Mien",
    imgSrc: "/images/mentor/user1.png",
  },
];

export default TeameworData;
