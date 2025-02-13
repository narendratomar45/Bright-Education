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

  const generateDate = (daysFromNow) => {
    const date = new Date();
    date.setDate(date.getDate() + daysFromNow);

    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();

    return `${day}/${month}/${year}`;
  };

  const batchCard = [
    {
      batchType: "NCERT",
      image: logo,
      courseName: "History Masterclass",
      courseStart: generateDate(5),
      courseEnd: generateDate(45),
      charges: "Rs. 150",
      discount: "5%",
      checkOut: "Checkout",
      buyNow: "Buy Now",
    },
    {
      batchType: "NCERT",
      image: logo,
      courseName: "Mathematics Foundation",
      courseStart: generateDate(7),
      courseEnd: generateDate(50),
      charges: "Rs. 200",
      discount: "10%",
      checkOut: "Checkout",
      buyNow: "Buy Now",
    },
    {
      batchType: "NCERT",
      image: logo,
      courseName: "Physics for Beginners",
      courseStart: generateDate(10),
      courseEnd: generateDate(55),
      charges: "Rs. 250",
      discount: "15%",
      checkOut: "Checkout",
      buyNow: "Buy Now",
    },
    {
      batchType: "Advanced",
      image: logo,
      courseName: "Chemistry Crash Course",
      courseStart: generateDate(12),
      courseEnd: generateDate(60),
      charges: "Rs. 300",
      discount: "20%",
      checkOut: "Checkout",
      buyNow: "Buy Now",
    },
    {
      batchType: "Advanced",
      image: logo,
      courseName: "English Literature Deep Dive",
      courseStart: generateDate(15),
      courseEnd: generateDate(65),
      charges: "Rs. 350",
      discount: "25%",
      checkOut: "Checkout",
      buyNow: "Buy Now",
    },
    {
      batchType: "NCERT",
      image: logo,
      courseName: "Computer Science Basics",
      courseStart: generateDate(18),
      courseEnd: generateDate(70),
      charges: "Rs. 400",
      discount: "30%",
      checkOut: "Checkout",
      buyNow: "Buy Now",
    },
  ];

  console.log(batchCard);

  return (
    <div className="w-full mx-auto p-5">
      <Slider {...settings}>
        {batchCard.map((card, index) => (
          <div key={index} className=" px-2">
            <div className="flex  flex-col items-center bg-gray-200 border border-green-500 rounded-xl shadow-xl p-5 mx-2 text-center">
              <div className=" mx-auto">
                <img
                  src={card.image}
                  alt="Batch"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              <div className="text-lg font-bold mt-2">{card.courseName}</div>
              <div className="">
                <p>Start From: {card.courseStart}</p>
                <p>End: {card.courseEnd}</p>
              </div>
              <div className=" flex justify-between gap-7">
                <p>Charges: {card.charges}</p>
                <p>Discount: {card.discount}</p>
              </div>
              <div className=" flex justify-between gap-8">
                <button className="mt-2 bg-blue-500 text-white px-7 max-sm:px-3 py-2 rounded-lg font-bold">
                  {card.checkOut}
                </button>
                <button className="mt-2 bg-green-500 text-white px-7 max-sm:px-3 py-2 rounded-lg font-bold">
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
