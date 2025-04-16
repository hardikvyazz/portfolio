import React, { useRef } from "react";
import { workExperience } from "@/data";
import { motion, useScroll, useTransform } from "framer-motion";
import TimelineCard from "./ui/TimelineCard"; // keeping it modular for clean vibes

const Experience = () => {
  const containerRef = useRef(null);

  // Scroll progress inside the section
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Animate line height using scroll progress
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section ref={containerRef} className="relative w-full py-20">
      <h1 className="heading text-center text-3xl md:text-4xl font-extrabold mb-16">
        My <span className="text-purple">Work Experience</span>
      </h1>

      <div className="relative max-w-4xl mx-auto px-6">
        {/* Dynamic timeline line */}
        <div className="absolute left-[32px] top-0 w-1 h-full bg-purple/20 z-0">
          <motion.div
            style={{ height: lineHeight }}
            className="w-full bg-purple rounded-full origin-top"
          />
        </div>

        <div className="flex flex-col gap-16">
          {workExperience.map((card, index) => (
            <TimelineCard card={card} index={index} key={card.id} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
