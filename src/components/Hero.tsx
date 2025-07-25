"use client";

import React, { useEffect, useState } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import SlidingText from "./SlidingText";
import CircularTextAnimation from "./CircularTextAnimation";

const SECTION_HEIGHT = 1500;

const Hero: React.FC = () => {
  const { scrollY } = useScroll();
  const [screenH, setScreenH] = useState<number>(window.innerHeight); // Default to initial height

  useEffect(() => {
    const handleResize = () => {
      setScreenH(window.innerHeight);
    };
    handleResize(); // Set on mount
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Always call hooks — even if screenH is 0, give fallback values
  const opacity = useTransform(scrollY, [screenH * 0.1, screenH * 0.8], [1, 0]);
  const pointerEvents = useTransform(opacity, (o) => (o < 0.01 ? "none" : "auto"));

  const oppacity = useTransform(scrollY, [SECTION_HEIGHT, SECTION_HEIGHT + 500], [1, 0]);
  const backgroundSize = useTransform(scrollY, [0, SECTION_HEIGHT + 500], ["60%", "20%"]);

  const videoYRaw = useTransform(scrollY, [0, 600], [0, -900]);
  const videoOpacityRaw = useTransform(scrollY, [0, 400, 600], [1, 0.7, 0]);
  const videoPositionRaw = useTransform(scrollY, [0, 600], [10, screenH - 500 - 10]);

  const springConfig = { stiffness: 80, damping: 30 };
  const videoY = useSpring(videoYRaw, springConfig);
  const videoOpacity = useSpring(videoOpacityRaw, springConfig);
  const videoPosition = useSpring(videoPositionRaw, springConfig);

  return (
    <motion.section
      className="w-full h-screen text-black bg-[#F9F8EB] overflow-hidden z-30"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        zIndex: 30,
        opacity,
        pointerEvents,
      }}
    >
      <div
        className="absolute inset-0 opacity-40 z-5"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0, 0, 0, 0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 0, 0, 0.3) 1px, transparent 1px)
          `,
          backgroundSize: "20px 20px",
        }}
      ></div>

      <div className="w-full h-full flex items-center justify-center relative z-10">
        <CircularTextAnimation />
        <div className="absolute inset-0 flex items-center z-0 overflow-hidden">
          <SlidingText />
        </div>
        <div className="relative flex flex-col top-10 items-center z-10">
          <motion.div
            className="w-[380px] h-[380px] sm:w-[400px] sm:h-[400px] md:w-[550px] md:h-[550px] lg:w-[700px] lg:h-[700px] object-contain z-10"
            style={{
              opacity: oppacity,
              backgroundSize,
              backgroundImage: "url(/hero.png)",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
            }}
          />
        </div>
      </div>

      <motion.div
        className="fixed right-10 z-30 shadow-lg rounded-lg overflow-hidden bg-black"
        style={{
          width: 350,
          height: 200,
          bottom: videoPosition,
          y: videoY,
          opacity: videoOpacity,
        }}
      >
        <video
          src="/your-video.mp4"
          width="350"
          height="200"
          controls
          autoPlay
          loop
          muted
          className="w-full h-full object-cover"
        />
      </motion.div>
    </motion.section>
  );
};

export default Hero;
