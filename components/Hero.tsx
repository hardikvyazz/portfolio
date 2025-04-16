import { FaDownload } from "react-icons/fa6";
import MagicButton from "./MagicButton";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import DownloadResume from "./DownloadResume";
import Image from "next/image";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="pb-20 pt-36">
      {/* Spotlights */}
      <Spotlight
        className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
        fill="white"
      />
      <Spotlight className="h-[80vh] w-[50vw] top-10 left-full" fill="purple" />
      <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />

      {/* Grid BG */}
      <div className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.03] bg-grid-black-100/[0.2] absolute top-0 left-0 flex items-center justify-center">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      </div>

      {/* Hero content */}
      <div className="flex flex-col-reverse lg:flex-row items-center justify-center relative my-20 z-10 max-w-[95vw] mx-auto gap-10">
        {/* Text content */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left max-w-[600px]">
          <p className="uppercase tracking-widest text-xs text-blue-100 max-w-80">
            Escaping the Matrix with JavaScript & vibes.
          </p>
          <TextGenerateEffect
            words="Why code simple when you can Devlop like Tony Stark?"
            className="text-[40px] md:text-5xl lg:text-6xl"
          />
          <p className="md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl">
            Hi! I&apos;m Hardik, your friendly neighborhood Full Stack
            Developer, and part-time bug whisperer.
          </p>
          <div className="flex gap-4 mt-4">
            <a href="/Hardik_Resume.pdf" download="Hardik_Resume.pdf">
              <DownloadResume
                title="Download My Resume"
                icon={<FaDownload />}
                position="right"
              />
            </a>
            <a href="#projects">
              <MagicButton
                title="Explore My Work"
                icon={<FaDownload />}
                position="right"
              />
            </a>
          </div>
        </div>

        {/* Animated Image */}
        <motion.div
          whileHover={{ scale: 1.05, rotate: 1 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          className="w-[260px] h-[260px] md:w-[350px] md:h-[350px] rounded-full overflow-hidden border-4 border-purple-500 shadow-purple-500 shadow-lg"
        >
          <Image
            src="/hardik-hero.png" // <- drop your animated self here
            alt="Hardik Animated"
            width={400}
            height={400}
            className="object-cover w-full h-full"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
