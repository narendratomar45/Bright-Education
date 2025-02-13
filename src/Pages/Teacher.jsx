import React, { useState } from "react";
import classImage from "../assets/images/upscHeroImage.jpg";

const Teacher = () => {
  const [showAll, setShowAll] = useState(false);
  const teachers = [
    {
      name: "Narendra Tomar",
      subject: "Mathematics",
      experience: "5 years",
      profileImage: classImage,
      bio: "A passionate educator specializing in ancient and modern history, making learning interactive and engaging.",
    },
    {
      name: "Lalit Kumar Jadaun",
      subject: "Geography",
      experience: "7 years",
      profileImage: classImage,
      bio: "An expert in algebra and calculus, helping students grasp complex concepts with ease and clarity.",
    },
    {
      name: "Divya Jaduan",
      subject: "History",
      experience: "6 years",
      profileImage: classImage,
      bio: "A dedicated science teacher who simplifies physics, chemistry, and biology with real-world examples.",
    },
    {
      name: "Priya Singh",
      subject: "English",
      experience: "8 years",
      profileImage: classImage,
      bio: "A literature enthusiast with a knack for improving students’ communication and writing skills.",
    },
    {
      name: "Amit Patel",
      subject: "Geography",
      experience: "4 years",
      profileImage: classImage,
      bio: "Passionate about exploring the world through maps and geographic concepts, making geography fun.",
    },
    {
      name: "Sneha Kapoor",
      subject: "Political Science",
      experience: "5 years",
      profileImage: classImage,
      bio: "Specialist in Indian and global politics, helping students understand governance and policies effectively.",
    },
    {
      name: "Vikram Mehta",
      subject: "Economics",
      experience: "6 years",
      profileImage: classImage,
      bio: "Adept in micro and macroeconomics, teaching students how economies function in a practical way.",
    },
  ];

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-center text-gray-800">
        India&apos;s Top Educators
      </h1>
      <p className="text-center text-gray-500 mt-2">
        Learn from the best teachers with years of experience.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8">
        {teachers
          .slice(0, showAll ? teachers.length : 3)
          .map((teacher, index) => (
            <div
              key={index}
              className="bg-white shadow-lg border border-gray-500 rounded-xl p-4 text-center transition-transform hover:scale-105"
            >
              <img
                src={teacher.profileImage}
                alt={teacher.name}
                className="w-24 h-24 mx-auto rounded-full object-cover border-2 border-blue-500"
              />
              <h2 className="text-xl font-semibold mt-3 text-gray-800">
                {teacher.name}
              </h2>
              <p className="text-sm text-gray-500">{teacher.subject} Expert</p>
              <p className="text-gray-600 mt-2">
                {teacher.experience} of Experience
              </p>
              <p className="text-sm text-gray-500 mt-2">{teacher.bio}</p>
            </div>
          ))}
      </div>
      <div>
        <button onClick={() => setShowAll(!showAll)} className=" flex mx-auto bg-gray-500 text-white cursor-pointer p-2 mt-4 rounded-md shadow-xl">
          {showAll ? "View Less" : "View All Educators"}
        </button>
      </div>
    </div>
  );
};

export default Teacher;
