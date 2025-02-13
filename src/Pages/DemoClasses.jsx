import React, { useState } from "react";
import classImage from "../assets/images/upscHeroImage.jpg";

const DemoClasses = () => {
  const [showAll, setShowAll] = useState(false);
  const handleClick = () => {
    setShowAll(!showAll);
  };
  const demoClasses = [
    {
      image: classImage,
      language: "Hinglish",
      subjectName: "Geography",
      className: "Introduction to Physical Geography",
      teacherName: "Narendra Tomar",
      classStart: new Date(2025, 1, 10, 10, 0), // Feb 10, 2025, 10:00 AM
    },
    {
      image: classImage,
      language: "Hinglish",
      subjectName: "Polity",
      className: "Indian Constitution Basics",
      teacherName: "Narendra Tomar",
      classStart: new Date(2025, 1, 11, 12, 30), // Feb 11, 2025, 12:30 PM
    },
    {
      image: classImage,
      language: "Hinglish",
      subjectName: "Economics",
      className: "Understanding GDP and Inflation",
      teacherName: "Narendra Tomar",
      classStart: new Date(2025, 1, 12, 15, 0), // Feb 12, 2025, 3:00 PM
    },
    {
      image: classImage,
      language: "Hinglish",
      subjectName: "Science & Tech",
      className: "Basics of Space Technology",
      teacherName: "Narendra Tomar",
      classStart: new Date(2025, 1, 13, 9, 0), // Feb 13, 2025, 9:00 AM
    },
  ];
  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-2 text-center text-teal-800">
        Demo Classes
      </h2>
      <p className="text-center text-gray-600 mb-4">
        Experience high-quality teaching with our expert educators before you
        enroll.
      </p>
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {demoClasses
          .slice(0, showAll ? demoClasses.length : 3)
          .map((demo, index) => (
            <div
              key={index}
              className="relative bg-white shadow-lg border border-blue-950 rounded-xl p-4 flex flex-col items-center text-center transition-transform hover:scale-105"
            >
              <div className="w-[90%] h-40 overflow-hidden">
                <img
                  src={demo.image}
                  alt="Class Image"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-full mt-3 flex justify-around">
                <p className="text-sm">{demo.language}</p>
                <p className="text-lg font-bold text-gray-600">
                  {demo.subjectName}
                </p>
              </div>
              <div className="mt-2">
                <p className="text-md font-medium text-gray-700">
                  {demo.className}
                </p>
              </div>
              <div className="mt-1">
                <p className="text-md text-gray-500">By: {demo.teacherName}</p>
                <p className="text-sm text-gray-400">
                  Starts on: {demo.classStart.toLocaleString()}
                </p>
              </div>
              <div className="absolute top-2 left-2 bg-white border border-green-500 px-2 py-1 rounded-md shadow-md">
                <span className="bg-gradient-to-r from-green-500 to-green-700 bg-clip-text text-transparent text-xs md:text-sm font-semibold">
                  Demo Classes
                </span>
              </div>
            </div>
          ))}
      </div>

      <button onClick={handleClick} className=" flex mx-auto p-2 rounded-md shadow-xl mt-4 text-white bg-teal-600">
        {showAll ? "Show Less" : "View All Classes"}
      </button>
    </div>
  );
};

export default DemoClasses;
