// Project.tsx
import React, { useEffect, useState } from 'react';
import { motion } from "framer-motion";


const FigmaIcon = ({ fill = "#000" }: { fill?: string }) => (
  <svg width="40" height="34" viewBox="0 0 240 234" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clipPath="url(#clip0_5_58)">
      <path d="M95 192C108.807 192 120 180.807 120 167V142H95C81.1929 142 70 153.193 70 167C70 180.807 81.1929 192 95 192Z" fill={fill} />
      <path d="M70 117C70 103.193 81.1929 92 95 92H120V142H95C81.1929 142 70 130.807 70 117Z" fill={fill} />
      <path d="M70 67C70 53.1929 81.1929 42 95 42H120V92H95C81.1929 92 70 80.8071 70 67Z" fill={fill} />
      <path d="M120 42H145C158.807 42 170 53.1929 170 67C170 80.8071 158.807 92 145 92H120V42Z" fill={fill} />
      <path d="M170 117C170 130.807 158.807 142 145 142C131.193 142 120 130.807 120 117C120 103.193 131.193 92 145 92C158.807 92 170 103.193 170 117Z" fill={fill} />
    </g>
    <defs>
      <clipPath id="clip0_5_58">
        <rect width="240" height="234" fill="black" />
      </clipPath>
    </defs>
  </svg>
);

type ProjectItem = {
  id: string;
  img?: string;
  icon: React.ReactElement<{ fill?: string }>;
  title: string;
  description: string;
};

const projects: ProjectItem[] = [
  {
    id: 'barrett',
    img: '/contact.png',
    icon: <FigmaIcon />,
    title: 'Barrett Plastic Surgery',
    description: 'Branding, Website',
  },
  {
    id: 'mystudio-1',
    icon: <FigmaIcon />,
    title: 'MyStudio',
    description: 'Branding, Website, Art Direction',
  },
  {
    id: 'mystudio-2',
    icon: <FigmaIcon />,
    title: 'MyStudio',
    description: 'Branding, Website, Art Direction',
  },
  {
    id: 'mystudio-3',
    icon: <FigmaIcon />,
    title: 'MyStudio',
    description: 'Branding, Website, Art Direction',
  },
  {
    id: 'mystudio-4',
    icon: <FigmaIcon />,
    title: 'MyStudio',
    description: 'Branding, Website, Art Direction',
  },
  {
    id: 'mystudio-5',
    icon: <FigmaIcon />,
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
      className="relative h-screen bg-white text-black overflow-hidden flex flex-col items-center justify-center"
      style={{ fontFamily: "'Canela Trial', serif" }}
    >
      {/* Header */}
      <h1 className="absolute top-12 text-6xl font-light tracking-widest text-black">PROJECTS</h1>

      {/* Projects List */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-8">
        {projects.map((project, idx) => (
          <motion.div
    key={project.id}
    className={`relative transition-colors duration-300 ${
      hoveredIdx === idx ? 'bg-black' : 'bg-transparent'
      }`}
      onMouseEnter={() => setHoveredIdx(idx)}
      onMouseLeave={() => setHoveredIdx(null)}
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ amount: 0.2 }}
      transition={{ type: "spring", stiffness: 60, delay: idx * 0.1 }}
    >
            <div className="flex items-center justify-between py-6">
              {/* Icon + Text */}
              <div className="flex items-center gap-4">
        <span className="text-2xl">
          {/* Change SVG color on hover */}
          {React.isValidElement(project.icon)
            ? React.cloneElement(project.icon as React.ReactElement<{ fill?: string }>, { fill: hoveredIdx === idx ? '#fff' : '#000' })
            : null}
        </span>
        <span className={`h-8 w-px mx-2 ${hoveredIdx === idx ? 'bg-white' : 'bg-black'}`} />
        <span className={`text-xl font-normal ${hoveredIdx === idx ? 'text-white' : 'text-black'}`}>{project.title}</span>
        <span className={`mx-4 text-lg ${hoveredIdx === idx ? 'text-white' : 'text-black'}`}>—</span>
        <span className={`text-lg ${hoveredIdx === idx ? 'text-white' : 'text-black'}`}>{project.description}</span>
      </div>

              {/* Button */}
              <button className={`flex items-center gap-2 border rounded-md px-4 py-2 mr-4 text-sm font-semibold transition ${
                hoveredIdx === idx
                  ? 'bg-white text-black border-white'
                  : 'border-black hover:bg-black hover:text-white'
              }`}>
                <span className={`text-base ${hoveredIdx === idx ? 'text-black' : 'text-black'}`}>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20" className="w-5 h-5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 8V6a4 4 0 118 0v2m-9 4h10a1 1 0 011 1v5a1 1 0 01-1 1H5a1 1 0 01-1-1v-5a1 1 0 011-1zm5 3v2" />
                  </svg>
                </span>
                CONTACT FOR DETAILS
              </button>
            </div>

            {/* Divider */}
            {idx < projects.length - 0 &&(
              <hr className={`border-t ${hoveredIdx === idx ? 'border-white' : 'border-black'}`} />
            )}

            {/* Hover Overlay */}
            {hoveredIdx === idx && (
              <div className="absolute left-1/2 top-0 transform -translate-x-1/2 -translate-y-1/4 w-[300px] h-[400px] border-2 border-black bg-white text-black shadow-2xl flex flex-col items-center justify-center z-30 transition-all duration-300">
                {project.img && (
                  <img src={project.img} alt={project.title} className="w-full h-full object-cover mb-4 rounded" />
                )}
                <h2 className="text-3xl font-bold mb-2 text-black">{project.title}</h2>
                <p className="text-lg text-black">{project.description}</p>
              </div>
            )}
          </motion.div>
        ))}
      </div>

      {/* Left side box */}
      <div className="absolute left-12 top-1/2 -translate-y-1/2 flex flex-col items-center z-10">
        <div className="border border-black flex flex-col">
          <div className="border-b border-black p-12 flex items-center justify-center">
            <div className="custom-star-container animate-star-float">
              {/* ...SVG remains unchanged... */}
               <svg className="custom-star" viewBox="0 0 80 80" width="80" height="80" fill="none" xmlns="http://www.w3.org/2000/svg">
                <polygon
                  points="40,5 48,30 75,30 52,45 60,70 40,55 20,70 28,45 5,30 32,30"
                  fill="#000"
                />
    </svg>

            </div>
          </div>

          <div className="h-[5px]" />

          <div className="border-t border-black p-8 h-145 w-50 flex items-center justify-center relative">

            
            <div className="-rotate-90 origin-center whitespace-nowrap flex items-center">
              <span className="text-9xl font-light tracking-wider text-black">React.js</span>
            </div>
            <div className="absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 -rotate-90">
              <div className="border border-black rounded-full px-4 py-1">
                <span className="text-xl tracking-wider text-black">KAVEEN</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right side box */}
      <div className="absolute right-12 top-1/2 -translate-y-1/2 flex flex-col items-center z-10">
        <div className="border border-black flex flex-col">
          <div className="border-b border-black p-8 h-140 w-50 flex items-center justify-center relative">
            <div className="rotate-90 origin-center whitespace-nowrap flex items-center">
              <span className="text-9xl font-light tracking-wider text-black">Node.js</span>
            </div>
            <div className="absolute right-0 top-1/2 translate-x-1/2 -translate-y-1/2 rotate-90">
              <div className="border border-black rounded-full px-4 py-1">
                <span className="text-xl tracking-wider text-black">KAVEEN</span>
              </div>
            </div>
          </div>

          <div className="h-[5px]" />

          <div className="border-t border-black p-12 flex items-center justify-center">
            <div className="circle">
              <div className="wave" />
            </div>
          </div>
        </div>
      </div>

      {/* Corner frames */}
      <div className="absolute top-8 left-8 z-10">
        <div className="border-t border-l border-black w-32 h-32" />
      </div>
      <div className="absolute top-8 right-8 z-10">
        <div className="border-t border-r border-black w-32 h-32" />
      </div>
      <div className="absolute bottom-8 left-8 z-10">
        <div className="border-b border-l border-black w-32 h-32" />
      </div>
      <div className="absolute bottom-8 right-8 z-10">
        <div className="border-b border-r border-black w-32 h-32" />
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
          background: #fff;
          border: 2px solid #000;
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
          background: rgba(0, 0, 0, 1);
          animation: animate 5s linear infinite;
        }
        .wave:after {
          border-radius: 40%;
          background: rgba(0, 0, 0, 0.5);
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
