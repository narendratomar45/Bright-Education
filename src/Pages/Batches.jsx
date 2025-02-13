import React from "react";

const Batches = () => {
  return (
    <div>
      <p className="text-center text-2xl font-semibold bg-green-500 p-1">
        Explore Our Batches
      </p>
      <div className=" flex gap-5 bg-gray-200 p-2">
        <span className=" cursor-pointer">NCERT</span>
        <span className=" cursor-pointer">GS Foundation</span>
        <span className=" cursor-pointer">Optional</span>
        <span className=" cursor-pointer">Combo(GS + Optional)</span>
      </div>
    </div>
  );
};

export default Batches;
