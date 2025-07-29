import { motion, useScroll, useTransform } from "framer-motion";
import DecryptedText from "./DecryptedText";
import '../index.css';


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
      className="w-full h-screen bg-black"
      style={{
        position: "sticky",
        top: 0,
        opacity,
        zIndex: 40,
        pointerEvents: "auto",
        marginTop: '100vh',
      }}
    >
      <div className="flex flex-row items-center h-full">
  {/* Left: DecryptedText */}
  <div className="basis-1/3 flex items-center justify-start ml-4 mt-4 xl:ml-16 xl:mt-10">
    <h1
      className="flex items-center justify-center uppercase text-white text-xs xl:text-5xl font-light"
    >
      <DecryptedText
        text="Product designing"
        animateOn="view"
        revealDirection="center"
        speed={100}
        maxIterations={20}
        characters="ABCD1234!?"
        className="text-white text-xs xl:text-5xl font-medium"
        parentClassName="text-xs xl:text-5xl all-letters"
        encryptedClassName="text-white"
      />
    </h1>
  </div>
  {/* Right: Paragraphs */}
  <div className="basis-2/3 flex flex-col justify-end mr-4 ml-4 mt-4 xl:mr-16 xl:ml-10 xl:mt-10 max-w-full">
    <p className="text-white text-xs xl:text-3xl mb-4 xl:mb-6" style={{ lineHeight: '1.5rem' }}>
      <DecryptedText
        text="Kaveen Deshapriya (he/him) is a globe-trotting product and digital experience designer with a passion for blending technology, functionality, and aesthetics. Rooted in Sri Lanka and active globally, he fuses low-code platforms and savvy prototyping tools to shape elegant, user-centered products."
        animateOn="view"
        revealDirection="center"
        speed={100}
        maxIterations={20}
        characters="ABCD1234!?"
        className="text-white text-xs xl:text-3xl"
        parentClassName="text-xs xl:text-3xl all-letters"
        encryptedClassName="text-white"
      />
    </p>
    <p className="text-white text-xs xl:text-3xl" style={{ lineHeight: '1.5rem' }}>
      <DecryptedText
        text="Having trained in software technology at the University of Vocational Technology in Colombo, Kaveen brings a strong technical foundation, while his hands-on experience at ABSOL X sharpened his collaboration, innovation, and delivery under pressure. He thrives working across virtual teams, guiding concepts from initial sketches to polished digital experiences."
        animateOn="view"
        revealDirection="center"
        speed={100}
        maxIterations={20}
        characters="ABCD1234!?"
        className="text-white text-xs xl:text-3xl"
        parentClassName="text-xs xl:text-3xl all-letters"
        encryptedClassName="text-white"
      />
    </p>
  </div>
</div>
    </motion.div>
  );
}

export default Black;