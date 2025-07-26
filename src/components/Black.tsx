import { motion, useScroll, useTransform } from "framer-motion";

function Black() {
  const { scrollY } = useScroll();
  const windowHeight = window.innerHeight;
  // Black fades in quickly and sticks after 40vh
  const opacity = useTransform(
    scrollY,
    [windowHeight * 0.1, windowHeight * 0.4, windowHeight * 0.8],
    [1, 1, 1]
  );

  return (
    <motion.div
      className="w-full h-screen bg-black flex items-center justify-center"
      style={{
        position: "sticky",
        top: 0,
        opacity,
        zIndex: 40,
        pointerEvents: "auto",
        marginTop: '100vh', // Black section starts much sooner
      }}
    >
      {/* Add your content here */}
    </motion.div>
  );
}

export default Black;