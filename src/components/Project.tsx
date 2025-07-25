// Project.tsx
import React, { useEffect, useState } from 'react';
import { motion } from "framer-motion";


const figmaIcon = (
  <svg width="40" height="34" viewBox="0 0 240 234" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clipPath="url(#clip0_5_58)">
      <path d="M95 192C108.807 192 120 180.807 120 167V142H95C81.1929 142 70 153.193 70 167C70 180.807 81.1929 192 95 192Z" fill="#ffffff" />
      <path d="M70 117C70 103.193 81.1929 92 95 92H120V142H95C81.1929 142 70 130.807 70 117Z" fill="#ffffff" />
      <path d="M70 67C70 53.1929 81.1929 42 95 42H120V92H95C81.1929 92 70 80.8071 70 67Z" fill="#ffffff" />
      <path d="M120 42H145C158.807 42 170 53.1929 170 67C170 80.8071 158.807 92 145 92H120V42Z" fill="#ffffff" />
      <path d="M170 117C170 130.807 158.807 142 145 142C131.193 142 120 130.807 120 117C120 103.193 131.193 92 145 92C158.807 92 170 103.193 170 117Z" fill="#ffffff" />
    </g>
    <defs>
      <clipPath id="clip0_5_58">
        <rect width="240" height="234" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

type ProjectItem = {
  id: string;
  img?: string;
  icon: React.ReactElement;
  title: string;
  description: string;
};

const projects: ProjectItem[] = [
  {
    id: 'barrett',
    img: '/contact.png',
    icon: figmaIcon,
    title: 'Barrett Plastic Surgery',
    description: 'Branding, Website',
  },
  {
    id: 'mystudio-1',
    icon: figmaIcon,
    title: 'MyStudio',
    description: 'Branding, Website, Art Direction',
  },
  {
    id: 'mystudio-2',
    icon: figmaIcon,
    title: 'MyStudio',
    description: 'Branding, Website, Art Direction',
  },
  {
    id: 'mystudio-3',
    icon: figmaIcon,
    title: 'MyStudio',
    description: 'Branding, Website, Art Direction',
  },
  {
    id: 'mystudio-4',
    icon: figmaIcon,
    title: 'MyStudio',
    description: 'Branding, Website, Art Direction',
  },
  {
    id: 'mystudio-5',
    icon: figmaIcon,
    title: 'MyStudio',
    description: 'Branding, Website, Art Direction',
  },
];

const Project = () => {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  // Load fonts
  useEffect(() => {
    const link = document.createElement('link');
    link.href = 'https://fonts.cdnfonts.com/css/canela-trial';
    link.rel = 'stylesheet';
    document.head.appendChild(link);

    const montserratLink = document.createElement('link');
    montserratLink.href = 'https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500&display=swap';
    montserratLink.rel = 'stylesheet';
    document.head.appendChild(montserratLink);

    return () => {
      if (document.head.contains(link)) document.head.removeChild(link);
      if (document.head.contains(montserratLink)) document.head.removeChild(montserratLink);
    };
  }, []);

  return (
    <div
      className="relative h-screen bg-black text-white overflow-hidden flex flex-col items-center justify-center"
      style={{ fontFamily: "'Canela Trial', serif" }}
    >
      {/* Header */}
      <h1 className="absolute top-12 text-6xl font-light tracking-widest">PROJECTS</h1>

      {/* Projects List */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-8">
        {projects.map((project, idx) => (
          <motion.div
             key={project.id}
             className="relative"
             onMouseEnter={() => setHoveredIdx(idx)}
             onMouseLeave={() => setHoveredIdx(null)}
             initial={{ opacity: 0, y: 60 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ amount: 0.2 }} // <-- removed once: true
             transition={{ type: "spring", stiffness: 60, delay: idx * 0.1 }}
          >
            <div className="flex items-center justify-between py-6">
              {/* Icon + Text */}
              <div className="flex items-center gap-4">
                <span className="text-2xl">{project.icon}</span>
                <span className="h-8 w-px bg-gray-400 mx-2" />
                <span className="text-xl font-normal">{project.title}</span>
                <span className="mx-4 text-lg text-gray-500">—</span>
                <span className="text-lg text-gray-700">{project.description}</span>
              </div>

              {/* Button */}
              <button className="flex items-center gap-2 border border-black rounded-md px-4 py-2 text-sm font-semibold hover:bg-black hover:text-white transition">
                <span className="text-base text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20" className="w-5 h-5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 8V6a4 4 0 118 0v2m-9 4h10a1 1 0 011 1v5a1 1 0 01-1 1H5a1 1 0 01-1-1v-5a1 1 0 011-1zm5 3v2" />
                  </svg>
                </span>
                CONTACT FOR DETAILS
              </button>
            </div>

            {/* Divider */}
            {idx < projects.length - 1 && <hr className="border-t border-gray-400" />}

            {/* Hover Overlay */}
            {hoveredIdx === idx && (
              <div className="absolute left-1/2 top-0 transform -translate-x-1/2 -translate-y-1/4 w-[300px] h-[400px] border-2 border-amber-200 bg-black text-white shadow-2xl flex flex-col items-center justify-center z-30 transition-all duration-300">
                {project.img && (
                  <img src={project.img} alt={project.title} className="w-full h-full object-cover mb-4 rounded" />
                )}
                <h2 className="text-3xl font-bold mb-2">{project.title}</h2>
                <p className="text-lg">{project.description}</p>
              </div>
            )}
          </motion.div>
        ))}
      </div>

      {/* Left side box */}
      <div className="absolute left-12 top-1/2 -translate-y-1/2 flex flex-col items-center z-10">
        <div className="border border-gray-400 flex flex-col">
          <div className="border-b border-gray-400 p-12 flex items-center justify-center">
            <div className="custom-star-container animate-star-float">
              <svg className="custom-star" width="162" height="162" viewBox="0 0 162 162" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_0_51)">
                  <path d="M145.125 47.25L92.315 64.722L81 10.125L69.685 64.722L16.875 47.25L58.37 84.375L16.875 121.5L69.685 104.025L81 158.625L92.315 104.025L145.125 121.5L103.627 84.375L145.125 47.25Z" fill="white" />
                </g>
                <g clipPath="url(#clip1_0_51)">
                  <path d="M71.1533 65.0264L70.8125 66.6748L69.2139 66.1465L23.248 50.9375L59.373 83.2568L60.623 84.375L59.373 85.4932L23.249 117.811L69.2139 102.601L70.8125 102.071L71.1533 103.721L81 151.232L90.8467 103.721L91.1875 102.071L92.7861 102.601L138.753 117.811L102.63 85.4932L101.38 84.375L102.63 83.2568L138.754 50.9375L92.7861 66.1465L91.1875 66.6748L90.8467 65.0264L81 17.5156L71.1533 65.0264Z" stroke="white" strokeWidth="3" />
                </g>
                <defs>
                  <clipPath id="clip0_0_51">
                    <rect width="81" height="162" fill="white" />
                  </clipPath>
                  <clipPath id="clip1_0_51">
                    <rect width="81" height="162" fill="white" transform="matrix(-1 0 0 1 162 0)" />
                  </clipPath>
                </defs>
              </svg>
            </div>
          </div>

          <div className="h-[5px]" />

          <div className="border-t border-gray-400 p-8 h-145 w-50 flex items-center justify-center relative">
            <div className="-rotate-90 origin-center whitespace-nowrap flex items-center">
              <span className="text-9xl font-light tracking-wider">React.js</span>
            </div>
            <div className="absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 -rotate-90">
              <div className="border border-white rounded-full px-4 py-1">
                <span className="text-xl tracking-wider">KAVEEN</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right side box */}
      <div className="absolute right-12 top-1/2 -translate-y-1/2 flex flex-col items-center z-10">
        <div className="border border-gray-400 flex flex-col">
          <div className="border-b border-gray-400 p-8 h-140 w-50 flex items-center justify-center relative">
            <div className="rotate-90 origin-center whitespace-nowrap flex items-center">
              <span className="text-9xl font-light tracking-wider">Node.js</span>
            </div>
            <div className="absolute right-0 top-1/2 translate-x-1/2 -translate-y-1/2 rotate-90">
              <div className="border border-white rounded-full px-4 py-1">
                <span className="text-xl tracking-wider">KAVEEN</span>
              </div>
            </div>
          </div>

          <div className="h-[5px]" />

          <div className="border-t border-gray-400 p-12 flex items-center justify-center">
            <div className="circle">
              <div className="wave" />
            </div>
          </div>
        </div>
      </div>

      {/* Corner frames */}
      <div className="absolute top-8 left-8 z-10">
        <div className="border-t border-l border-gray-400 w-32 h-32" />
      </div>
      <div className="absolute top-8 right-8 z-10">
        <div className="border-t border-r border-gray-400 w-32 h-32" />
      </div>
      <div className="absolute bottom-8 left-8 z-10">
        <div className="border-b border-l border-gray-400 w-32 h-32" />
      </div>
      <div className="absolute bottom-8 right-8 z-10">
        <div className="border-b border-r border-gray-400 w-32 h-32" />
      </div>

      {/* Inline CSS */}
      <style>{`
        .custom-star-container {
          width: 80px;
          height: 80px;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        @keyframes starFloat {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
          100% { transform: translateY(0px); }
        }
        .animate-star-float { animation: starFloat 3s ease-in-out infinite; }
        .custom-star { width: 100%; height: 100%; }

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
          0% { transform: translate(-50%, -75%) rotate(0deg); }
          100% { transform: translate(-50%, -75%) rotate(360deg); }
        }
        .ocean-container, .ocean, .animate-water-fill { display: none; }
      `}</style>
    </div>
  );
};

export default Project;
