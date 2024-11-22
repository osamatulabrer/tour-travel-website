import React from "react";
import Slider from "react-slick";
import { testimonialData } from "../../data/data";

const Tastimonial = () => {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="mt-8">
      <div className="mx-auto">
        <div>
          <span>Testimonial</span>
          <h2 className="text-2xl sm:text-3xl">Testimonial</h2>
          <p className="text-xs">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero
            nesciunt explicabo a! Laborum delectus aliquam labore, earum rerum
            quam! Nulla?
          </p>
        </div>
        <div className="slider-container">
          <Slider {...settings}>
            {testimonialData.map((item) => {
              return (
                <div key={item.id} className="grid grid-cols-3 gap-5">
                  <div className="bg-primary/20 rounded-md shadow-lg ">
                    
                      <img src={item.img} alt="" />
                  
                    <div>
                      <h3>{item.name}</h3>
                      <p>{item.text}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Tastimonial;
