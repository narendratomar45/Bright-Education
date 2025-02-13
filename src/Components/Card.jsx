import React from "react";

const Card = ({ cardData }) => {
  console.log("Course", cardData);

  return (
    <div className=" flex justify-around items-center flex-wrap">
      {cardData.map((card, index) => (
        <div
          key={index}
          className={`relative my-10 w-[300px] h-[150px] bg-gray-200 rounded-xl shadow-xl text-center flex flex-col justify-center items-center ${card.bgColor}`}
        >
          <div className="absolute -top-3 left-5 bg-gray-200 w-10 h-10 rounded-full  flex justify-center items-center ">
            {card.icon}
          </div>
          <p className="text-3xl font-bold">{card.content}</p>
          <p className=" text-sm  mt-2 text-center px-4">{card.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Card;
