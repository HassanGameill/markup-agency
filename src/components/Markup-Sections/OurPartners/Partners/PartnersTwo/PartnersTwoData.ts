// Images
import sine from "../../../../../../public/images/other_brands/01-sine.png";
import dr_cut from "../../../../../../public/images/other_brands/02-dr_cut.png";
import dasta_cafe from "../../../../../../public/images/other_brands/03-dasta_cafe.png";
import drivera from "../../../../../../public/images/other_brands/04-drivera.png";
import elagora from "../../../../../../public/images/other_brands/05-elagora.png";
import trio_mood from "../../../../../../public/images/other_brands/06-trio_mood.png";
import elaf from "../../../../../../public/images/other_brands/07-elaf.png";
import Dr_Rash_plastic_surgery_clinic from "../../../../../../public/images/other_brands/08-Dr_Rash_plastic_surgery_clinic.png";
import lines from "../../../../../../public/images/other_brands/09-lines.png";
import organo from "../../../../../../public/images/other_brands/10-organo.png";
import skyhills from "../../../../../../public/images/other_brands/11-skyhills.png";
import harm_elsham from "../../../../../../public/images/other_brands/12-harm_elsham.png";
import cairo_guys from "../../../../../../public/images/other_brands/13-cairo_guys.png";
import fish_fish from "../../../../../../public/images/other_brands/14-fish_fish.png";
import hambrger_coses from "../../../../../../public/images/other_brands/15-hambrger&coses.png";
import fool_nor from "../../../../../../public/images/other_brands/16-fool_nor.png";
import koshary_elkdawy from "../../../../../../public/images/other_brands/17-koshary_elkdawy.png";
import checken_fila from "../../../../../../public/images/other_brands/18-checken_fila.png";
import adrnalin from "../../../../../../public/images/other_brands/19-adrnalin.png";
import kababgy_elsyda from "../../../../../../public/images/other_brands/20-kababgy-elsyda.png";
import X_Larg from "../../../../../../public/images/other_brands/21-X_Larg.png";
import Smatshd from "../../../../../../public/images/other_brands/22-Smatshd.png";
import checken_planet from "../../../../../../public/images/other_brands/23-checken_planet.png";
import Ftar_Asha from "../../../../../../public/images/other_brands/24-Ftar&Asha.png";
import CIRCUS from "../../../../../../public/images/other_brands/25-CIRCUS.png";

interface ContentItem {
  title: string;
  description: string;
}

// CAROUSEL DATA

interface DataType {
  id?: number;
  heading?: string;
  heading2?: string;
  imgSrc?: string | any;
  name?: string;
  content?: ContentItem[]; // Add this property
}



const PartnersTwoData = (t: (key: string) => string): DataType[] => [
  {
    id: 1,
    imgSrc: sine,
    heading: "Sine", // Heading for the image
  },
  {
    id: 2,
    imgSrc: dr_cut,
    heading: "Dr. Cut", // Heading for the image
  },
  {
    id: 3,
    imgSrc: dasta_cafe,
    heading: "Dasta Cafe", // Heading for the image
  },
  {
    id: 4,
    imgSrc: drivera,
    heading: "Drivera", // Heading for the image
  },
  {
    id: 5,
    imgSrc: elagora,
    heading: "Elagora", // Heading for the image
  },
  {
    id: 6,
    imgSrc: trio_mood,
    heading: "Trio Mood", // Heading for the image
  },
  {
    id: 7,
    imgSrc: elaf,
    heading: "Elaf", // Heading for the image
  },
  {
    id: 8,
    imgSrc: Dr_Rash_plastic_surgery_clinic,
    heading: "Dr. Rash Plastic Surgery Clinic", // Heading for the image
  },
  {
    id: 9,
    imgSrc: lines,
    heading: "Lines", // Heading for the image
  },
  {
    id: 10,
    imgSrc: organo,
    heading: "Organo", // Heading for the image
  },
  {
    id: 11,
    imgSrc: skyhills,
    heading: "Skyhills", // Heading for the image
  },
  {
    id: 12,
    imgSrc: harm_elsham,
    heading: "Harm Elsham", // Heading for the image
  },
  {
    id: 13,
    imgSrc: cairo_guys,
    heading: "Cairo Guys", // Heading for the image
  },
  {
    id: 14,
    imgSrc: fish_fish,
    heading: "Fish Fish", // Heading for the image
  },
  {
    id: 15,
    imgSrc: hambrger_coses,
    heading: "Hamburger & Coses", // Heading for the image
  },
  {
    id: 16,
    imgSrc: fool_nor,
    heading: "Fool Nor", // Heading for the image
  },
  {
    id: 17,
    imgSrc: koshary_elkdawy,
    heading: "Koshary Elkdawy", // Heading for the image
  },
  {
    id: 18,
    imgSrc: checken_fila,
    heading: "Checken Fila", // Heading for the image
  },
  {
    id: 19,
    imgSrc: adrnalin,
    heading: "Adrnalin", // Heading for the image
  },
  {
    id: 20,
    imgSrc: kababgy_elsyda,
    heading: "Kababgy Elsyda", // Heading for the image
  },
  {
    id: 21,
    imgSrc: X_Larg,
    heading: "X Larg", // Heading for the image
  },
  {
    id: 22,
    imgSrc: checken_planet,
    heading: "Checken Planet", // Heading for the image
  },
  {
    id: 23,
    imgSrc: Smatshd,
    heading: "Smatshd", // Heading for the image
  },
  {
    id: 24,
    imgSrc: Ftar_Asha,
    heading: "Ftar & Asha", // Heading for the image
  },
  {
    id: 25,
    imgSrc: CIRCUS,
    heading: "CIRCUS", // Heading for the image
  },
];

export default PartnersTwoData;




