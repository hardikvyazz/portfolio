import React, { useState } from "react";
import { Education } from "@/data"; // Education data

const EducationSection = () => {
  return (
    <section id="Education" className="py-20">
      <h1 className="heading text-center text-3xl md:text-4xl font-extrabold mb-16">
        Education <span className="text-purple">History</span>
      </h1>

      <div className="max-w-6xl mx-auto px-6">
        {/* Vertical Timeline */}
        <div className="relative grid grid-cols-1 md:grid-cols-1 gap-8">
          {Education.map((item, index) => (
            <EducationCard key={index} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

const EducationCard = ({ item }: { item: (typeof Education)[0] }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="flex items-center mb-16 relative group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Glowing Dot */}
      <div
        className={`absolute left-[50%] transform -translate-x-1/2 w-6 h-6 rounded-full border-4 transition-all duration-300 ${
          isHovered ? "border-blue bg-purple" : "border-white bg-white"
        }`}
      />

      {/* Card with hover effect */}
      <div
        className={`w-full pl-14 transition-all duration-300 ${
          isHovered ? "pl-32" : "pl-14"
        }`}
      >
        <div
          className={`bg-gradient-to-r from-[#04071d] to-[#0c0e23] text-white rounded-xl p-6 md:p-10 shadow-md transition-all duration-300 ${
            isHovered
              ? "scale-105 bg-gradient-to-br from-[#6A1B9A] to-[#9C27B0]"
              : "scale-100"
          }`}
        >
          {/* Name and Year */}
          <div className="flex justify-between flex-wrap">
            <div className="text-xl text-white font-bold">{item.name}</div>
            <div className="text-lg text-purple font-semibold">{item.year}</div>
          </div>

          {/* Hover Expansion */}
          <div
            className={`mt-4 transition-all duration-300 ${
              isHovered ? "opacity-100 h-auto" : "opacity-0 h-0"
            }`}
          >
            {/* Title and Quote */}
            <p className="mt-2 text-white/80">{item.quote}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EducationSection;
