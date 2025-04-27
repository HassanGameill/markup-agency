import React, { useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import NextArrow from "./SliderArrows/NextArrow";
import PrevArrow from "./SliderArrows/PrevArrow";

type SliderListProps<T> = {
  records?: T[];
  renderItem: (itemData: T) => React.ReactNode;
  className?: string;
  
};

type HasId = { id?: number };

const SliderList = <T extends HasId>({
  records = [],
  renderItem,
  className="",
}: SliderListProps<T>) => {
 

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    // centerMode: true,
    slidesToScroll: 2,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    autoplay: false,
    speed: 500,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },

      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },

      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },

      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
    ],
  };

  const CategoryRender =
  records.length > 0 ? (
    records.map((itemData, index) => (
        
          <div className={className} key={itemData.id || index}>
            {renderItem(itemData)}
            
          </div>
        
      ))
    ) : (
      <h4>There is no data</h4>
    );

  return <Slider {...settings}>{CategoryRender}</Slider>;
};

export default SliderList;
