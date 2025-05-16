import { useEffect } from 'react';

// DottedButton component
const DottedButton = () => {
  return (
    <button className="rounded-2xl border-2 border-dashed border-white bg-transparent px-6 py-3 font-semibold uppercase text-white transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-md hover:shadow-[4px_4px_0px_white] active:translate-x-[0px] active:translate-y-[0px] active:rounded-2xl active:shadow-none">
      View Project
    </button>
  );
};

// Navigation button components
const NavButton = ({ direction }: { direction: 'prev' | 'next' }) => {
  const isNext = direction === 'next';
  return (
    <button 
      className={`absolute top-1/2 transform -translate-y-1/2 ${isNext ? 'right-4' : 'left-4'} z-20
                  rounded-full border-2 border-white w-12 h-12 flex items-center justify-center
                  transition-all duration-300 hover:bg-white hover:text-black`}
      aria-label={isNext ? 'Next project' : 'Previous project'}
    >
      {isNext ? 
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
          <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
        </svg> : 
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
          <path fillRule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
        </svg>
      }
    </button>
  );
};

const Project = () => {
  // Add font loading effect
  useEffect(() => {
    // Load Canela Trial font
    const link = document.createElement('link');
    link.href = "https://fonts.cdnfonts.com/css/canela-trial";
    link.rel = "stylesheet";
    document.head.appendChild(link);
    
    // Load additional fonts if needed
    const montserratLink = document.createElement('link');
    montserratLink.href = "https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500&display=swap";
    montserratLink.rel = "stylesheet";
    document.head.appendChild(montserratLink);
    
    // Cleanup function
    return () => {
      document.head.removeChild(link);
      document.head.removeChild(montserratLink);
    };
  }, []);

  return (
    <div
      className="relative w-full h-screen bg-black text-white overflow-hidden flex flex-col items-center justify-center"
      style={{ fontFamily: "'Canela Trial', serif" }}
    >
      {/* Background Image - Classical sculpture */}
      <div className="absolute top-0 left-0 w-full h-full">
        <img
          src="Background_project.png"
          alt="Classical sculpture background"
          className="w-full h-full object-cover opacity-90"
        />
      </div>

      {/* Header */}
      <h1 className="absolute top-12 text-6xl font-light tracking-widest z-20">
        PROJECTS
      </h1>

      {/* Personal identification */}
      <div className="absolute top-36 text-xl font-light tracking-widest z-20">
        <span className="border border-white px-6 py-2">VEGA INOVATIONS</span>
      </div>

      {/* Main content frame - centered box - with 10px gap from header */}
      <div className="relative z-10 border border-gray-400 w-full max-w-5xl aspect-video mx-8 main-content-box overflow-auto p-8" 
           style={{ marginTop: "calc(1.5rem + 6rem + 10px)" }}>
        {/* Previous button - positioned to the left of the box */}
        <NavButton direction="prev" />
        
        <div className="h-full flex flex-col justify-center">
          <p className="text-lg text-white leading-relaxed max-w-4xl mx-auto">
            VEGA Innovation's electric supercar and tuk-tuk UI design delivers a futuristic and high-performance experience with a sleek, minimalist dashboard showcasing real-time telemetry, battery status, and adaptive driving modes. The intuitive touchscreen infotainment system integrates navigation, entertainment, and vehicle controls, while AI-driven assistance enhances usability with smart notifications and voice commands. Designed for optimal visibility, the interface features dark mode and high-contrast elements, ensuring a seamless and dynamic user experience that redefines electric vehicle interaction.
          </p>
        </div>
        
        {/* Next button - positioned to the right of the box */}
        <NavButton direction="next" />
      </div>
      
      {/* Description - Below the main box */}
      <div className="relative z-10 mt-5 max-w-5xl px-8 flex flex-col items-center">
        <p className="text-center text-xl leading-relaxed mb-6">
          VEGA Innovation's electric supercar and tuk-tuk UI features a sleek design
          with real-time telemetry, adaptive driving modes, AI assistance, and an
          intuitive touchscreen for seamless control.
        </p>
        
        {/* Add the DottedButton component here */}
        <DottedButton />
      </div>

      {/* Left side elements */}
      <div className="absolute left-12 top-1/2 transform -translate-y-1/2 flex flex-col items-center z-10">
        {/* Left framed area with star */}
        <div className="border border-gray-400 flex flex-col">
          {/* Star symbol in top box - updated with detailed SVG star and animation */}
          <div className="border-b border-gray-400 p-12 flex items-center justify-center">
            <div className="custom-star-container animate-star-float">
              <svg className="custom-star" width="162" height="162" viewBox="0 0 162 162" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_0_51)">
                  <path d="M145.125 47.25L92.315 64.722L81 10.125L69.685 64.722L16.875 47.25L58.37 84.375L16.875 121.5L69.685 104.025L81 158.625L92.315 104.025L145.125 121.5L103.627 84.375L145.125 47.25Z" fill="white"/>
                </g>
                <g clip-path="url(#clip1_0_51)">
                  <path d="M71.1533 65.0264L70.8125 66.6748L69.2139 66.1465L23.248 50.9375L59.373 83.2568L60.623 84.375L59.373 85.4932L23.249 117.811L69.2139 102.601L70.8125 102.071L71.1533 103.721L81 151.232L90.8467 103.721L91.1875 102.071L92.7861 102.601L138.753 117.811L102.63 85.4932L101.38 84.375L102.63 83.2568L138.754 50.9375L92.7861 66.1465L91.1875 66.6748L90.8467 65.0264L81 17.5156L71.1533 65.0264Z" stroke="white" stroke-width="3"/>
                </g>
                <defs>
                  <clipPath id="clip0_0_51">
                    <rect width="81" height="162" fill="white"/>
                  </clipPath>
                  <clipPath id="clip1_0_51">
                    <rect width="81" height="162" fill="white" transform="matrix(-1 0 0 1 162 0)"/>
                  </clipPath>
                </defs>
              </svg>
            </div>
          </div>
          
          {/* Gap between star and React.js box - 5px spacing */}
          <div className="h-[5px]"></div>
          
          {/* React.js vertical text in bottom box */}
          <div className="border-t border-gray-400 p-8 h-145 w-50 flex items-center justify-center relative">
            <div className="transform -rotate-90 origin-center whitespace-nowrap flex items-center">
              <span className="text-9xl font-light tracking-wider">React.js</span>
            </div>
            <div className="absolute left-0 top-1/2 transform -translate-x-1/2 -translate-y-1/2 -rotate-90">
              <div className="border border-white rounded-full px-4 py-1">
                <span className="text-xl tracking-wider">KAVEEN</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right side elements */}
      <div className="absolute right-12 top-1/2 transform -translate-y-1/2 flex flex-col items-center z-10">
        {/* Right framed area with Node.js and semi-circle */}
        <div className="border border-gray-400 flex flex-col">
          {/* Node.js vertical text in top box */}
          <div className="border-b border-gray-400 p-8 h-140 w-50 flex items-center justify-center relative">
            <div className="transform rotate-90 origin-center whitespace-nowrap flex items-center">
              <span className="text-9xl font-light tracking-wider">Node.js</span>
            </div>
            <div className="absolute right-0 top-1/2 transform translate-x-1/2 -translate-y-1/2 rotate-90">
              <div className="border border-white rounded-full px-4 py-1">
                <span className="text-xl tracking-wider">KAVEEN</span>
              </div>
            </div>
          </div>
          
          {/* Gap between Node.js and half-circle - 5px spacing */}
          <div className="h-[5px]"></div>
          
          {/* Half-circle symbol in bottom box - updated with rotating wave animation */}
          <div className="border-t border-gray-400 p-12 flex items-center justify-center">
            <div className="circle">
              <div className="wave"></div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Corner frames with thin borders */}
      <div className="absolute top-8 left-8 z-10">
        <div className="border-t border-l border-gray-400 w-32 h-32"></div>
      </div>
      <div className="absolute top-8 right-8 z-10">
        <div className="border-t border-r border-gray-400 w-32 h-32"></div>
      </div>
      <div className="absolute bottom-8 left-8 z-10">
        <div className="border-b border-l border-gray-400 w-32 h-32"></div>
      </div>
      <div className="absolute bottom-8 right-8 z-10">
        <div className="border-b border-r border-gray-400 w-32 h-32"></div>
      </div>

      {/* Add CSS for wave animation */}
      <style>{`
        /* Custom star styling */
        .custom-star-container {
          width: 80px;
          height: 80px;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        
        /* Star floating animation */
        @keyframes starFloat {
          0% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
          100% {
            transform: translateY(0px);
          }
        }
        
        .animate-star-float {
          animation: starFloat 3s ease-in-out infinite;
        }
        
        .custom-star {
          width: 100%;
          height: 100%;
        }
        
        /* Wave Animation - Updated with rotating circular waves */
        .circle {
          position: relative;
          width: 100px;
          height: 100px;
          background: #000;
          border: 2px solid #fff;
          border-radius: 50%;
          overflow: hidden;
        }
        
        .wave {
          position: relative;
          width: 100%;
          height: 100%;
          background: transparent;
          border-radius: 50%;
        }
        
        .wave:before, .wave:after {
          content: '';
          position: absolute;
          width: 200%;
          height: 200%;
          top: 0;
          left: 50%;
          transform: translate(-50%, -75%);
        }
        
        .wave:before {
          border-radius: 45%;
          background: rgba(255, 255, 255, 1);
          animation: animate 5s linear infinite;
        }
        
        .wave:after {
          border-radius: 40%;
          background: rgba(255, 255, 255, 0.5);
          animation: animate 10s linear infinite;
        }
        
        @keyframes animate {
          0% {
            transform: translate(-50%, -75%) rotate(0deg);
          }
          100% {
            transform: translate(-50%, -75%) rotate(360deg);
          }
        }
        
        /* Remove previous water fill animation */
        .ocean-container, .ocean, .animate-water-fill {
          display: none;
        }
      `}</style>
    </div>
  );
};

export default Project;