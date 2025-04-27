import img01 from "../../../../public/images/Teamework/img.jpg";
import img02 from "../../../../public/images/Teamework/img.jpg";
import img03 from "../../../../public/images/Teamework/img.jpg";
import img04 from "../../../../public/images/Teamework/img.jpg";
import img05 from "../../../../public/images/Teamework/img.jpg";

import imgCompany01 from "../../../../public/images/Teamework/img.jpg";
import imgCompany02 from "../../../../public/images/Teamework/img.jpg";
import imgCompany03 from "../../../../public/images/Teamework/img.jpg";
import imgCompany04 from "../../../../public/images/Teamework/img.jpg";
import imgCompany05 from "../../../../public/images/Teamework/img.jpg";
import imgCompany06 from "../../../../public/images/Teamework/img.jpg";
import imgCompany07 from "../../../../public/images/Teamework/img.jpg";
import imgCompany08 from "../../../../public/images/Teamework/img.jpg";
import imgCompany09 from "../../../../public/images/Teamework/img.jpg";
import imgCompany10 from "../../../../public/images/Teamework/img.jpg";

interface TestimonialDataType {
  id?: number;
  clientName: string;
  feedback: string;
  imgSrc: string | any;
  clientLink: string;
  company: string ;
  companyImg: string | any; // New field
  rating: number;
}

const TestimonialsData = (t: (key: string) => string): TestimonialDataType[] => [
  {
    id: 1,
    clientName: "John Doe",
    feedback: "This service exceeded our expectations. The team was professional, and the results were outstanding!",
    imgSrc: img01,
    clientLink: "https://www.techinnovators.com/johndoe",
    company: "Tech Innovators Inc.",
    companyImg: imgCompany01,
    rating: 5.0,
  },
  {
    id: 2,
    clientName: "Jane Smith",
    feedback: "We saw a significant improvement in our workflow after implementing their solutions. Highly recommended.",
    imgSrc: img02,
    clientLink: "https://www.nextgensolutions.com/janesmith",
    company: "NextGen Solutions",
    companyImg: imgCompany02,
    rating: 4.8,
  },
  {
    id: 3,
    clientName: "Michael Brown",
    feedback: "Amazing experience! The team understood our needs and delivered beyond what we expected.",
    imgSrc: img03,
    clientLink: "https://www.creativeminds.com/michaelbrown",
    company: "Creative Minds Co.",
    companyImg: imgCompany03,
    rating: 4.9,
  },
  {
    id: 4,
    clientName: "Emily Davis",
    feedback: "Their attention to detail and commitment to delivering quality work is impressive. We’ll definitely be working with them again.",
    imgSrc: img04,
    clientLink: "https://www.brightfutures.com/emilydavis",
    company: "Bright Futures Ltd.",
    companyImg: imgCompany04,
    rating: 4.7,
  },
  {
    id: 5,
    clientName: "Chris Wilson",
    feedback: "Professional and reliable. The team was responsive and made sure everything ran smoothly.",
    imgSrc: img05,
    clientLink: "https://www.efficientlogistics.com/chriswilson",
    company: "Efficient Logistics",
    companyImg: imgCompany05,
    rating: 4.8,
  },
  {
    id: 6,
    clientName: "Laura Johnson",
    feedback: "We were impressed with the quality and timeliness of the project delivery. Highly recommended for anyone looking for great results.",
    imgSrc: img01,
    clientLink: "https://www.globalventures.com/laurajohnson",
    company: "Global Ventures",
    companyImg: imgCompany06,
    rating: 5.0,
  },
  {
    id: 7,
    clientName: "Daniel Thompson",
    feedback: "They provided top-notch service and went above and beyond to meet our expectations.",
    imgSrc: img02,
    clientLink: "https://www.techpioneers.com/danielthompson",
    company: "Tech Pioneers",
    companyImg: imgCompany07,
    rating: 4.9,
  },
  {
    id: 8,
    clientName: "Sophia Green",
    feedback: "Incredible experience! The team was attentive and truly understood our vision.",
    imgSrc: img03,
    clientLink: "https://www.sophiagreen.com",
    company: "Innovative Designs",
    companyImg: imgCompany08,
    rating: 5.0,
  },
  {
    id: 9,
    clientName: "James Lee",
    feedback: "A game changer for our business! The solutions provided were tailored perfectly to our needs.",
    imgSrc: img04,
    clientLink: "https://www.jameslee.com",
    company: "Strategic Solutions",
    companyImg: imgCompany09,
    rating: 4.9,
  },
  {
    id: 10,
    clientName: "Olivia Martinez",
    feedback: "Outstanding service! They delivered exceptional results and were a pleasure to work with.",
    imgSrc: img05,
    clientLink: "https://www.oliviamartinez.com",
    company: "Market Leaders",
    companyImg: imgCompany10,
    rating: 4.8,
  },
  {
    id: 11,
    clientName: "Emma Wilson",
    feedback: "The project was delivered on time and exceeded our expectations in every way. Fantastic work!",
    imgSrc: img01,
    clientLink: "https://www.emmawilson.com",
    company: "Dynamic Solutions",
    companyImg: imgCompany01,
    rating: 5.0,
  },
  {
    id: 12,
    clientName: "Liam Brown",
    feedback: "They truly listened to our needs and provided tailored solutions that fit perfectly. Highly recommended!",
    imgSrc: img02,
    clientLink: "https://www.liambrown.com",
    company: "Future Tech",
    companyImg: imgCompany02,
    rating: 4.9,
  },
  {
    id: 13,
    clientName: "Ava Taylor",
    feedback: "Exceptional service from start to finish. Their expertise made a significant difference for our project.",
    imgSrc: img03,
    clientLink: "https://www.avataylor.com",
    company: "Visionary Designs",
    companyImg: imgCompany03,
    rating: 4.8,
  },
  {
    id: 14,
    clientName: "Noah Johnson",
    feedback: "Great team to work with! They are dedicated and truly care about their clients’ success.",
    imgSrc: img04,
    clientLink: "https://www.noahjohnson.com",
    company: "Innovative Strategies",
    companyImg: imgCompany04,
    rating: 4.7,
  },
  {
    id: 15,
    clientName: "Isabella Garcia",
    feedback: "Amazing results! The team was highly professional and attentive to our needs throughout the process.",
    imgSrc: img05,
    clientLink: "https://www.isabellagarcia.com",
    company: "Elite Services",
    companyImg: imgCompany05,
    rating: 5.0,
  },
];

export default TestimonialsData;
