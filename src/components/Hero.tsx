import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import TextTransition, { presets } from 'react-text-transition';

// Constants for time calculations
const SECOND = 1000;
const MINUTE = SECOND * 60;
const HOUR = MINUTE * 60;
const DAY = HOUR * 24;

// Animation constants for flip effect
const DURATION = 0.25;
const STAGGER = 0.025;

// CircularTextAnimation component
const CircularTextAnimation = ({ text = "design · kaveen · creative · " }) => {
  // Calculate rotation angle per character based on total text length
  const characters = text.split("");
  const anglePerCharacter = 360 / characters.length;
  
  return (
    <div className="absolute md:left-48 left-10 top-20 lg:top-50 w-24 h-24 md:w-36 md:h-36 flex items-center justify-center">
      <div className="relative w-full h-full">
        {/* Rotating ring container */}
        <motion.div 
          className="absolute inset-0"
          animate={{
            rotate: [0, 360]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        >
          {characters.map((char, index) => (
            <div
              key={index}
              className="absolute w-full h-full flex justify-center"
              style={{
                transformOrigin: "center",
                rotate: `${index * anglePerCharacter}deg`
              }}
            >
              <span 
                className="font-Quantum text-white text-[8px] md:text-xs absolute"
                style={{ 
                  transformOrigin: "center",
                  top: "3px"
                }}
              >
                {char}
              </span>
            </div>
          ))}
        </motion.div>
        
        {/* Star in the middle */}
        <motion.div
          className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2"
          animate={{ 
            scale: [1, 1.05, 1],
            filter: ["drop-shadow(0 0 2px rgba(255,255,255,0.5))", "drop-shadow(0 0 5px rgba(255,255,255,0.8))", "drop-shadow(0 0 2px rgba(255,255,255,0.5))"]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <svg width="30" height="30" viewBox="0 0 70 70" className="md:w-[50px] md:h-[50px]">
            <path 
              d="M52.6046 33.6064C44.0165 32.7789 37.2209 25.9866 36.3944 17.4058L34.9998 2.91666L33.6053 17.4058C32.7787 25.988 25.9832 32.7804 17.3951 33.6064L2.9165 35L17.3951 36.3936C25.9832 37.221 32.7787 44.0134 33.6053 52.5942L34.9998 67.0833L36.3944 52.5942C37.2209 44.012 44.0165 37.2196 52.6046 36.3936L67.0832 35L52.6046 33.6064Z" 
              fill="white"
            />
          </svg>
        </motion.div>
      </div>
    </div>
  );
};

// Replace the CircularLogo component with our new implementation
const CircularLogo = CircularTextAnimation;

// FlipDigit component for time and date
const FlipDigit = ({ value }: { value: string }) => {
  return (
    <motion.div
      initial="initial"
      whileHover="hovered"
      className="relative block overflow-hidden whitespace-nowrap text-base sm:text-xl md:text-2xl lg:text-3xl font-medium font-Quantum"
      style={{ width: value.length === 1 ? "1em" : "2em", display: "inline-block", textAlign: "center" }}
    >
      <div>
        {value.split("").map((l, i) => (
          <motion.span
            variants={{
              initial: {
                y: 0,
              },
              hovered: {
                y: "-100%",
              },
            }}
            transition={{
              duration: DURATION,
              ease: "easeInOut",
              delay: STAGGER * i,
            }}
            className="inline-block"
            key={i}
          >
            {l}
          </motion.span>
        ))}
      </div>
      <div className="absolute inset-0">
        {value.split("").map((l, i) => (
          <motion.span
            variants={{
              initial: {
                y: "100%",
              },
              hovered: {
                y: 0,
              },
            }}
            transition={{
              duration: DURATION,
              ease: "easeInOut",
              delay: STAGGER * i,
            }}
            className="inline-block text-white"
            key={i}
          >
            {l}
          </motion.span>
        ))}
      </div>
    </motion.div>
  );
};

const Hero = () => {
  const [time, setTime] = useState({
    hours: '00',
    minutes: '00',
    seconds: '00'
  });
  
  const [date, setDate] = useState({
    day: '00',
    month: '00',
    year: '00'
  });

  const [textIndex, setTextIndex] = useState(0);
  const TEXT_ITEMS = ['UI/UX', 'Design', 'Creative', 'Developer'];

  useEffect(() => {
    const updateDateTime = () => {
      const now = new Date();
      // Time update
      const hours = String(now.getHours()).padStart(2, '0');
      const minutes = String(now.getMinutes()).padStart(2, '0');
      const seconds = String(now.getSeconds()).padStart(2, '0');
      
      // Date update
      const day = String(now.getDate()).padStart(2, '0');
      const month = String(now.getMonth() + 1).padStart(2, '0'); // Month is 0-indexed
      const year = String(now.getFullYear()).slice(-2); // Get last 2 digits of year
      
      setTime({ hours, minutes, seconds });
      setDate({ day, month, year });
    };

    // Update immediately
    updateDateTime();
    
    // Update every second
    const intervalId = setInterval(updateDateTime, 1000);

    // Text rotation effect
    const textIntervalId = setInterval(
      () => setTextIndex(index => index + 1),
      3000
    );
    
    // Cleanup intervals on component unmount
    return () => {
      clearInterval(intervalId);
      clearInterval(textIntervalId);
    };
  }, []);

  return (
    <section className="w-full h-screen text-white relative overflow-hidden">

        {/* Background Image */}
       <div className="absolute inset-0 opacity-90" >
        <img src="/Background.png" alt="Background" className="w-full h-full size-full object-cover" />
        </div>

      {/* Navbar */}

      {/* Content */}
      <div className="w-full h-full flex items-center justify-center relative z-10">
        
        {/* Add the circular logo component */}
        <CircularLogo />

        {/* Centered Circle + Statue */}
        <div className="relative flex flex-col top-10 items-center">
          <div className="absolute top-20 left-1/2 sm:top-40 md:top-40 lg:top-40 transform -translate-x-1/2 -translate-y-1/2">
            <div className="w-[270px] h-[270px] sm:w-[300px] sm:h-[300px] md:w-[400px] md:h-[400px] lg:w-[500px] lg:h-[500px] rounded-full border border-white"></div>
          </div>
          <motion.img
            src="/Hero_Dark.png"                  
            alt="Hero Visual"
            className="w-[380px] h-[380px] sm:w-[400px] sm:h-[400px] md:w-[550px] md:h-[550px] lg:w-[700px] lg:h-[700px] object-contain relative z-10"
            whileHover={{ 
              scale: 1.02, 
              y: -5,
              transition: {
                type: "spring",
                stiffness: 100,
                damping: 15
              }
            }}
            animate={{ 
              x: [0, 5, -5, 0],
              rotateY: [0, 2, -2, 0],
              perspective: [1000, 800, 1000, 1200, 1000],
              transition: {
                repeat: Infinity,
                repeatType: "mirror",
                duration: 8,
                times: [0, 0.25, 0.75, 1],
                ease: "easeInOut"
              }
            }}
          />
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold -mt-5 tracking-widest flex justify-center">
            <TextTransition springConfig={presets.wobbly}>
              {TEXT_ITEMS[textIndex % TEXT_ITEMS.length]}
            </TextTransition>
          </h2>

          <svg className="w-[225px] sm:w-[325px] md:w-[425px] lg:w-[525px] h-auto" viewBox="0 0 525 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<g filter="url(#filter0_f_112_20)">
<path d="M508 20.1215C508 21.8934 398.086 23.3298 262.5 23.3298C126.914 23.3298 17 21.8934 17 20.1215C17 18.3496 126.914 16.3298 262.5 16.3298C398.086 16.3298 508 18.3496 508 20.1215Z" fill="white"/>
</g>
<g filter="url(#filter1_f_112_20)">
<path d="M378.745 19.7917C378.75 21.5636 326.655 23.1417 262.387 23.3166C198.119 23.4914 146.015 22.1967 146.01 20.4248C146.005 18.6529 198.1 16.4914 262.368 16.3166C326.636 16.1417 378.741 18.0198 378.745 19.7917Z" fill="white"/>
</g>
<defs>
<filter id="filter0_f_112_20" x="0.9" y="0.229834" width="523.2" height="39.2" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feGaussianBlur stdDeviation="8.05" result="effect1_foregroundBlur_112_20"/>
</filter>
<filter id="filter1_f_112_20" x="133.511" y="3.80524" width="257.734" height="32.0272" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feGaussianBlur stdDeviation="6.25" result="effect1_foregroundBlur_112_20"/>
</filter>
</defs>
</svg>

        </div>

        {/* Left Text - Animated Real-time Clock */}
        <div className="absolute hidden sm:flex left-5 sm:left-10 md:left-20 lg:left-40 bottom-1/4 md:bottom-1/3 lg:bottom-1/2 tracking-widest font-Quantum">
          <div className="flex items-center">
            <FlipDigit value={time.hours} />
            <span className="mx-1 text-base sm:text-xl md:text-2xl lg:text-3xl">:</span>
            <FlipDigit value={time.minutes} />
            <span className="mx-1 text-base sm:text-xl md:text-2xl lg:text-3xl">:</span>
            <FlipDigit value={time.seconds} />
          </div>
        </div>

        {/* Right Counter - Animated Real-time Date */}
        <div className="absolute hidden sm:flex right-5 sm:right-10 md:right-20 lg:right-40 bottom-1/4 md:bottom-1/3 lg:bottom-1/2 tracking-widest font-Quantum">
          <div className="flex items-center">
            <FlipDigit value={date.day} />
            <span className="mx-1 text-base sm:text-xl md:text-2xl lg:text-3xl">/</span>
            <FlipDigit value={date.month} />
            <span className="mx-1 text-base sm:text-xl md:text-2xl lg:text-3xl">/</span>
            <FlipDigit value={date.year} />
          </div>
        </div>
      </div>
      
    </section>
  );
};

export default Hero;