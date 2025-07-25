import React from "react";
import ParallaxText from "./ParallaxText";

const SlidingText = () => {
  return (
    <section className="w-full h-50 flex flex-col items-center justify-between relative z-10">
      <ParallaxText baseVelocity={-2}>Kaveen c deshapriya,</ParallaxText>
      <ParallaxText baseVelocity={1}>
        Product Designer, UX Engenner, Fullstak Developer,
      </ParallaxText>
    </section>
  );
};

export default SlidingText;