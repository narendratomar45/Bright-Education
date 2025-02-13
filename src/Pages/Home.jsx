import React from "react";
import HeroImage from "../Components/HeroImage";
import Card from "../Components/Card";
import { LuNotebookPen } from "react-icons/lu";
import { GrScorecard } from "react-icons/gr";
import { MdCastForEducation } from "react-icons/md";
import DemoClasses from "./DemoClasses";
import Batches from "./Batches";
import BatchCard from "../Components/BatchCard";
import UpcomingClasses from "./UpcomingClasses";
import Teacher from "./Teacher";

const Home = () => {
  const cardData = [
    {
      content: "Online Course",
      description: "Access our latest courses and enhance your preparation.",
      icon: (
        <MdCastForEducation className="text-orange-700 text-2xl font-extrabold" />
      ),
      bgColor: "bg-orange-300",
    },
    {
      content: "Test Series",
      description: "Practice with our mock tests and improve your accuracy.",
      icon: <GrScorecard className="text-green-700 text-2xl font-extrabold" />,
      bgColor: "bg-green-400",
    },
    {
      content: "E-Books",
      description: "Download essential books and study materials.",
      icon: (
        <LuNotebookPen className="text-yellow-700 text-2xl font-extrabold" />
      ),
      bgColor: "bg-yellow-400",
    },
  ];
  return (
    <div>
      <HeroImage />
      <Card cardData={cardData} />
      <Batches />
      <BatchCard />
      <DemoClasses />
      <UpcomingClasses />
      <Teacher/>

    </div>
  );
};

export default Home;
