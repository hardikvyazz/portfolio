import React from "react";
import { workExperience } from "@/data";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const TimelineCard = ({ card, index }: any) => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div ref={ref} className="relative flex gap-6 items-start">
      {/* Dot on timeline */}
      <div className="relative z-10">
        <div className="w-5 h-5 bg-purple rounded-full border-4 border-white dark:border-dark mt-2" />
      </div>

      {/* Card content */}
      <motion.div
        variants={variants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        transition={{ duration: 0.6, delay: index * 0.1 }}
        className="bg-gradient-to-r from-[#04071d] to-[#0c0e23] rounded-2xl shadow-lg p-6 sm:p-8 w-full hover:scale-[1.01] transition-transform"
      >
        <div className="flex flex-col md:flex-row items-start gap-6">
          <img
            src={card.thumbnail}
            alt={card.title}
            className="w-16 md:w-20 object-contain"
          />
          <div>
            <h2 className="text-xl md:text-2xl font-bold">{card.title}</h2>
            <p className="mt-3 text-white/80 font-medium leading-relaxed">
              {card.desc}
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

const Experience = () => {
  return (
    <section className="relative w-full py-20">
      <h1 className="heading text-center text-3xl md:text-4xl font-extrabold mb-16">
        My <span className="text-purple">Work Experience</span>
      </h1>

      <div className="relative max-w-4xl mx-auto px-6">
        {/* The one and only timeline line */}
        <div className="absolute left-[32px] top-0 w-1 h-full bg-gradient-to-b from-purple/80 to-purple/20 z-0" />

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
