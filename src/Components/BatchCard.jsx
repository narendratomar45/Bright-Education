import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import logo from "../assets/images/upscHeroImage.jpg";

const BatchCard = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const startDate = new Date().toLocaleDateString("en-GB");
  const endDate = new Date().toLocaleTimeString("en-GB");

  const batchCard = [
    {
      batchType: "NCERT",
      image: logo,
      courseName: "Course A",
      courseStart: startDate,
      courseEnd: endDate,
      charges: "Rs. 100",
      discount: "10%",
      checkOut: "Checkout",
      buyNow: "Buy Now",
    },
    {
      batchType: "NCERT",
      image: logo,
      courseName: "Course B",
      courseStart: startDate,
      courseEnd: endDate,
      charges: "Rs. 200",
      discount: "15%",
      checkOut: "Checkout",
      buyNow: "Buy Now",
    },
    {
      batchType: "NCERT",
      image: logo,
      courseName: "Course C",
      courseStart: startDate,
      courseEnd: endDate,
      charges: "Rs. 300",
      discount: "20%",
      checkOut: "Checkout",
      buyNow: "Buy Now",
    },
    {
      batchType: "",
      image: logo,
      courseName: "Course D",
      courseStart: startDate,
      courseEnd: endDate,
      charges: "Rs. 400",
      discount: "25%",
      checkOut: "Checkout",
      buyNow: "Buy Now",
    },
    {
      batchType: "",
      image: logo,
      courseName: "Course D",
      courseStart: startDate,
      courseEnd: endDate,
      charges: "Rs. 400",
      discount: "25%",
      checkOut: "Checkout",
      buyNow: "Buy Now",
    },
    {
      batchType: "",
      image: logo,
      courseName: "Course D",
      courseStart: startDate,
      courseEnd: endDate,
      charges: "Rs. 400",
      discount: "25%",
      checkOut: "Checkout",
      buyNow: "Buy Now",
    },
    {
      batchType: "",
      image: logo,
      courseName: "Course D",
      courseStart: startDate,
      courseEnd: endDate,
      charges: "Rs. 400",
      discount: "25%",
      checkOut: "Checkout",
      buyNow: "Buy Now",
    },
    {
      batchType: "",
      image: logo,
      courseName: "Course D",
      courseStart: startDate,
      courseEnd: endDate,
      charges: "Rs. 400",
      discount: "25%",
      checkOut: "Checkout",
      buyNow: "Buy Now",
    },
    {
      batchType: "",
      image: logo,
      courseName: "Course D",
      courseStart: startDate,
      courseEnd: endDate,
      charges: "Rs. 400",
      discount: "25%",
      checkOut: "Checkout",
      buyNow: "Buy Now",
    },
    {
      batchType: "",
      image: logo,
      courseName: "Course D",
      courseStart: startDate,
      courseEnd: endDate,
      charges: "Rs. 400",
      discount: "25%",
      checkOut: "Checkout",
      buyNow: "Buy Now",
    },
    {
      batchType: "",
      image: logo,
      courseName: "Course D",
      courseStart: startDate,
      courseEnd: endDate,
      charges: "Rs. 400",
      discount: "25%",
      checkOut: "Checkout",
      buyNow: "Buy Now",
    },
    {
      batchType: "",
      image: logo,
      courseName: "Course D",
      courseStart: startDate,
      courseEnd: endDate,
      charges: "Rs. 400",
      discount: "25%",
      checkOut: "Checkout",
      buyNow: "Buy Now",
    },
  ];

  return (
    <div className="w-full mx-auto p-5">
      <Slider {...settings}>
        {batchCard.map((card, index) => (
          <div key={index} className=" px-2">
            <div className="flex  flex-col items-center bg-yellow-400 rounded-xl shadow-xl p-5 mx-2 text-center">
              <div className=" mx-auto">
                <img
                  src={card.image}
                  alt="Batch"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              <div className="text-lg font-bold mt-2">{card.courseName}</div>
              <div>Start: {card.courseStart}</div>
              <div>End: {card.courseEnd}</div>
              <div>Charges: {card.charges}</div>
              <div>Discount: {card.discount}</div>
              <div>
                <button className="mt-2 bg-blue-500 text-white px-4 py-2 rounded-lg">
                  {card.checkOut}
                </button>
                <button className="mt-2 bg-green-500 text-white px-4 py-2 rounded-lg">
                  {card.buyNow}
                </button>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default BatchCard;
