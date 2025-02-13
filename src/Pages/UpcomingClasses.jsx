import React, { useState } from "react";
import classImage from "../assets/images/upscHeroImage.jpg";

const UpcomingClasses = () => {
  const [showAll, setShowAll] = useState(false);
  const upcomingClass = [
    {
      image: classImage,
      language: "Hinglish",
      subjectName: "History",
      className: "Indus Valley Civilization",
      teacherName: "Narendra Tomar",
      classStart: new Date(2025, 1, 15, 10, 30), // Feb 15, 2025, 10:30 AM
    },
    {
      image: classImage,
      language: "Hinglish",
      subjectName: "History",
      className: "Mauryan Empire",
      teacherName: "Narendra Tomar",
      classStart: new Date(2025, 1, 16, 14, 0),
    },
    {
      image: classImage,
      language: "Hinglish",
      subjectName: "History",
      className: "Gupta Dynasty",
      teacherName: "Narendra Tomar",
      classStart: new Date(2025, 1, 17, 9, 0),
    },
    {
      image: classImage,
      language: "Hinglish",
      subjectName: "History",
      className: "Vedic Period",
      teacherName: "Narendra Tomar",
      classStart: new Date(2025, 1, 18, 11, 30),
    },
    {
      image: classImage,
      language: "Hinglish",
      subjectName: "History",
      className: "Mughal Empire",
      teacherName: "Narendra Tomar",
      classStart: new Date(2025, 1, 19, 16, 0),
    },
    {
      image: classImage,
      language: "Hinglish",
      subjectName: "History",
      className: "British Rule in India",
      teacherName: "Narendra Tomar",
      classStart: new Date(2025, 1, 20, 18, 30),
    },
  ];

  return (
    <div>
        <div className=" text-xl bg-gray-500">Upcoming Classes</div>
      <div className="p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {upcomingClass
          .slice(0, showAll ? upcomingClass.length : 3)
          .map((classes, index) => (
            <div
              key={index}
              className="bg-white shadow-lg border border-blue-950 rounded-xl p-4 flex flex-col items-center text-center"
            >
              <div className="w-[90%] h-40 overflow-hidden">
                <img
                  src={classes.image}
                  alt="Image of class teacher"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className=" w-full mt-3 flex  justify-around">
                <p className=" text-sm">{classes.language}</p>
                <p className="text-lg font-bold text-gray-600">
                  {classes.subjectName}
                </p>
              </div>
              <div className="mt-2">
                <p className=" text-md font-medium text-gray-700 text-start">
                  {classes.className}
                </p>
              </div>
              <div>
                <p>Starts in: {classes.classStart.toLocaleString()}</p>
              </div>
              <div className="mt-1">
                <p className="text-md text-gray-500">
                  By: {classes.teacherName}
                </p>
              </div>
            </div>
          ))}
      </div>

      <div>
        <button
          onClick={() => setShowAll(!showAll)}
          className="bg-blue-600 flex mx-auto text-white px-6 py-2 rounded-lg hover:bg-blue-800 transition"
        >
          {showAll ? "Show Less" : "View All Classes"}
        </button>
      </div>
    </div>
  );
};

export default UpcomingClasses;
