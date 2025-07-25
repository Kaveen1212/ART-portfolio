import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useState } from "react";

function Black() {
  const { scrollY } = useScroll();
  const [windowHeight, setWindowHeight] = useState(() => window.innerHeight);

  useEffect(() => {
    setWindowHeight(window.innerHeight);
  }, []);

  // Always call hooks, use a fallback value if needed
  const opacity = useTransform(
    scrollY,
    [windowHeight * 0.1, windowHeight * 0.4, windowHeight * 0.8],
    [0, 1, 1]
  );

  return (
    <motion.div
      className="w-full h-[100vh] bg-black flex items-center justify-center"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        opacity,
        zIndex: 40,
        pointerEvents: "auto",
      }}
    >
      <h1 className="text-white text-4xl">Black Section</h1>
    </motion.div>
  );
}

export default Black;