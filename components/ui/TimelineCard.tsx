import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const TimelineCard = ({ card, index }: any) => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div ref={ref} className="relative flex gap-6 items-start z-10">
      {/* Dot on timeline */}
      <div className="relative">
        <div className="w-5 h-5 bg-purple rounded-full border-4 border-white dark:border-dark mt-2" />
      </div>

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

export default TimelineCard;
