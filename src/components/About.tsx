import { motion } from 'framer-motion'
import SplitText from "./SplitText"

const handleAnimationComplete = () => {
  console.log('All letters have animated!');
};

const About = () => {
  return (
     <div
      className="relative w-full h-screen bg-black text-white overflow-hidden flex flex-col items-center "
      style={{ fontFamily: "'Bodoni Moda', serif" }}
    >
        {/* Image  */}
         <div className="absolute items-center justify-center top-0 left-0 w-full h-full">
        <img
          src="contact.png"
          alt="Classical sculpture background"
          className="w-full h-full object-cover opacity-90"
        />
      </div>

        {/* Main topic  */}
        <div className="z-20 mt-25">
        <SplitText
          text="ABOUT ME"
          className="text-6xl font-bold tracking-widest"
          delay={100}
          duration={0.6}
          ease="power3.out"
          splitType="chars"
          from={{ opacity: 0, y: 40 }}
          to={{ opacity: 1, y: 0 }}
          threshold={0.1}
          rootMargin="-100px"
          textAlign="center"
          onLetterAnimationComplete={handleAnimationComplete}
        />
      </div>

                {/* pharagrhaphe */}
        <div className="mt-15 text-center z-20 max-w-6xl font-light space-y-15 text-2xl">
            <div className="mt-15 text-center z-20 max-w-6xl font-light space-y-15 text-2xl">
        <SplitText
          text="Software Engineer - Undergraduate - B.Tech in Software Technology"
          className="block"
          delay={10}
          duration={1}
          ease="power3.out"
          splitType="chars"
          from={{ opacity: 0, y: 40 }}
          to={{ opacity: 1, y: 0 }}
          threshold={0.1}
          rootMargin="-100px"
          textAlign="center"
          onLetterAnimationComplete={handleAnimationComplete}
        />
        </div>

            {/* Description paragraphs */}
            <SplitText
          text="An enthusiastic Software Engineering undergraduate at the University of Vocational Technology, specializing in software development, system optimization, and scalable web applications. Proficient in Java, JavaScript, Python, cloud computing, and database management. Strong problem-solving, analytical, and AI-driven decision-making skills, with excellent teamwork, leadership, and communication abilities."
          className="block text-left"
          delay={2}
          duration={0.6}
          ease="power3.out"
          splitType="chars"
          from={{ opacity: 0, y: 40 }}
          to={{ opacity: 1, y: 0 }}
          threshold={0.1}
          rootMargin="-100px"
          textAlign="left"
          onLetterAnimationComplete={handleAnimationComplete}
        />

            <SplitText
          text="A motivated Software Engineering student skilled in software development, cloud computing, and system optimization. Proficient in Java, JavaScript, Python, and databases, with a passion for AI-driven solutions. Strong in critical thinking, leadership, and collaboration, thriving in fast-paced environments."
          className="block text-left"
          delay={2}
          duration={0.6}
          ease="power3.out"
          splitType="chars"
          from={{ opacity: 0, y: 40 }}
          to={{ opacity: 1, y: 0 }}
          threshold={0.1}
          rootMargin="-100px"
          textAlign="left"
          onLetterAnimationComplete={handleAnimationComplete}
        />

            
            {/* icons  */}
            <div className="w-full overflow-hidden mt-50 relative">
                {/* Left dust-like smoke - organic shapes */}
                <div className="absolute left-0 top-0 w-32 h-full z-10 rounded-full">
                    <div className="absolute left-0 top-1/4 w-20 h-8 bg-white/20 rounded-full blur-md"></div>
                    <div className="absolute left-4 top-1/2 w-16 h-6 bg-white/15 rounded-full blur-lg"></div>
                    <div className="absolute left-2 top-3/4 w-18 h-7 bg-white/18 rounded-full blur-md"></div>
                    <div className="absolute left-6 top-1/3 w-12 h-4 bg-white/12 rounded-full blur-xl"></div>
                    <div className="absolute left-8 top-2/3 w-14 h-5 bg-white/10 rounded-full blur-xl"></div>
                </div>
                
                {/* Right dust-like smoke - organic shapes */}
                <div className="absolute right-0 top-0 w-32 h-full z-10">
                    <div className="absolute right-0 top-1/4 w-20 h-8 bg-white/20 rounded-full blur-md"></div>
                    <div className="absolute right-4 top-1/2 w-16 h-6 bg-white/15 rounded-full blur-lg"></div>
                    <div className="absolute right-2 top-3/4 w-18 h-7 bg-white/18 rounded-full blur-md"></div>
                    <div className="absolute right-6 top-1/3 w-12 h-4 bg-white/12 rounded-full blur-xl"></div>
                    <div className="absolute right-8 top-2/3 w-14 h-5 bg-white/10 rounded-full blur-xl"></div>
                </div>
                
                {/* Floating dust particles - left */}
                <div className="absolute left-4 top-1/5 w-6 h-6 bg-white/5 rounded-full blur-2xl z-10"></div>
                <div className="absolute left-8 top-2/5 w-4 h-4 bg-white/3 rounded-full blur-xl z-10"></div>
                <div className="absolute left-6 top-3/5 w-5 h-5 bg-white/4 rounded-full blur-3xl z-10"></div>
                <div className="absolute left-10 top-4/5 w-3 h-3 bg-white/2 rounded-full blur-lg z-10"></div>
                
                {/* Floating dust particles - right */}
                <div className="absolute right-4 top-1/5 w-6 h-6 bg-white/5 rounded-full blur-2xl z-10"></div>
                <div className="absolute right-8 top-2/5 w-4 h-4 bg-white/3 rounded-full blur-xl z-10"></div>
                <div className="absolute right-6 top-3/5 w-5 h-5 bg-white/4 rounded-full blur-3xl z-10"></div>
                <div className="absolute right-10 top-4/5 w-3 h-3 bg-white/2 rounded-full blur-lg z-10"></div>

                <motion.div
                    className="flex items-center"
                    animate={{
                        x: [0, -560],
                    }}
                    transition={{
                        x: {
                            repeat: Infinity,
                            repeatType: "loop",
                            duration: 8,
                            ease: "linear",
                        },
                    }}
                    style={{ 
                        display: 'flex',
                        width: 'max-content',
                        gap: '150px'
                    }}
                >
                    {/* First set of icons */}
                    <svg width="43" height="43" viewBox="0 0 240 234" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clipPath="url(#clip0_5_58)">
                        <path d="M95 192C108.807 192 120 180.807 120 167V142H95C81.1929 142 70 153.193 70 167C70 180.807 81.1929 192 95 192Z" fill="#0ACF83"/>
                        <path d="M70 117C70 103.193 81.1929 92 95 92H120V142H95C81.1929 142 70 130.807 70 117Z" fill="#A259FF"/>
                        <path d="M70 67C70 53.1929 81.1929 42 95 42H120V92H95C81.1929 92 70 80.8071 70 67Z" fill="#F24E1E"/>
                        <path d="M120 42H145C158.807 42 170 53.1929 170 67C170 80.8071 158.807 92 145 92H120V42Z" fill="#FF7262"/>
                        <path d="M170 117C170 130.807 158.807 142 145 142C131.193 142 120 130.807 120 117C120 103.193 131.193 92 145 92C158.807 92 170 103.193 170 117Z" fill="#1ABCFE"/>
                        </g>
                        <defs>
                        <clipPath id="clip0_5_58">
                        <rect width="240" height="234" fill="white"/>
                        </clipPath>
                        </defs>
                    </svg>

                    {/* ...existing icons... */}
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
                        <path d="M4.459 4.208c.746.606 1.026.56 2.428.466l13.215-.793c.28 0 .047-.28-.046-.326L17.86 1.968c-.42-.326-.981-.7-2.055-.607L3.01 2.295c-.466.046-.56.28-.374.466l1.823 1.447zm.793 3.08v13.904c0 .747.373 1.027 1.214.98l14.523-.84c.841-.046.935-.56.935-1.167V6.354c0-.606-.233-.933-.748-.887l-15.177.887c-.56.047-.747.327-.747.933zm14.337.606c.093.42 0 .84-.42.888l-.7.14v10.264c-.608.327-1.168.514-1.635.514-.748 0-.935-.234-1.495-.933l-4.577-7.186v6.952L12.21 19s0 .84-1.168.84l-3.222.186c-.093-.186 0-.653.327-.746l.84-.233V9.854L7.822 9.76c-.094-.42.14-1.026.793-1.073l3.456-.233 4.764 7.279v-6.44l-1.215-.139c-.093-.514.28-.887.747-.933l3.269-.186z" fill="#000"/>
                    </svg>

                    <svg width="40" height="40" viewBox="0 0 24 24" fill="#F7DF1E">
                        <path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z"/>
                    </svg>

                    <svg width="40" height="40" viewBox="0 0 24 24" fill="#339933">
                        <path d="M11.998,24c-0.321,0-0.641-0.084-0.922-0.247l-2.936-1.737c-0.438-0.245-0.224-0.332-0.08-0.383 c0.585-0.203,0.703-0.25,1.328-0.604c0.065-0.037,0.151-0.023,0.218,0.017l2.256,1.339c0.082,0.045,0.197,0.045,0.272,0l8.795-5.076 c0.082-0.047,0.134-0.141,0.134-0.238V6.921c0-0.099-0.053-0.192-0.137-0.242l-8.791-5.072c-0.081-0.047-0.189-0.047-0.271,0 L3.075,6.68C2.99,6.729,2.936,6.825,2.936,6.921v10.15c0,0.097,0.054,0.189,0.139,0.235l2.409,1.392 c1.307,0.654,2.108-0.116,2.108-0.89V7.787c0-0.142,0.114-0.253,0.256-0.253h1.115c0.139,0,0.255,0.112,0.255,0.253v10.021 c0,1.745-0.95,2.745-2.604,2.745c-0.508,0-0.909,0-2.026-0.551L2.28,18.675c-0.57-0.329-0.922-0.945-0.922-1.604V6.921 c0-0.659,0.353-1.275,0.922-1.603l8.795-5.082c0.557-0.315,1.296-0.315,1.848,0l8.794,5.082c0.570,0.329,0.924,0.944,0.924,1.603 v10.15c0,0.659-0.354,1.273-0.924,1.604l-8.794,5.078C12.643,23.916,12.324,24,11.998,24z"/>
                    </svg>

                    <svg width="40" height="40" viewBox="0 0 24 24" fill="#1572B6">
                        <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.565-2.438L1.5 0zm17.09 4.413L5.41 4.413l.213 2.622h10.125l-.255 2.716h-6.64l.24 2.573h6.182l-.366 3.523-2.91.804-2.956-.81-.188-2.11h-2.61l.29 3.855L12 19.288l5.373-1.53L18.59 4.414z"/>
                    </svg>

                    <svg width="40" height="40" viewBox="0 0 24 24" fill="#E34F26">
                        <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622L5.412 4.41l.698 8.01h9.126l-.326 3.426-2.91.804-2.955-.81-.188-2.11H6.248l.33 4.171L12 19.351l5.379-1.443.744-8.157H8.531z"/>
                    </svg>

                    <svg width="40" height="40" viewBox="0 0 24 24" fill="#3776AB">
                        <path d="M14.25.18l.9.2.73.26.59.3.45.32.34.34.25.34.16.33.1.3.04.26.02.2-.01.13V8.5l-.05.63-.13.55-.21.46-.26.38-.3.31-.33.25-.35.19-.35.14-.33.1-.3.07-.26.04-.21.02H8.77l-.69.05-.59.14-.5.22-.41.27-.33.32-.27.35-.2.36-.15.37-.1.35-.07.32-.04.27-.02.21v3.06H3.17l-.21-.03-.28-.07-.32-.12-.35-.18-.36-.26-.36-.36-.35-.46-.32-.59-.28-.73-.21-.88-.14-1.05-.05-1.23.06-1.22.16-1.04.24-.87.32-.71.36-.57.4-.44.42-.33.42-.24.4-.16.36-.1.32-.05.24-.01h.16l.06.01h8.16v-.83H6.18l-.01-2.75-.02-.37.05-.34.11-.31.17-.28.25-.26.31-.23.38-.2.44-.18.51-.15.58-.12.64-.1.71-.06.77-.04.84-.02 1.27.05zm-6.3 1.98l-.23.33-.08.41.08.41.23.34.33.22.41.09.41-.09.33-.22.23-.34.08-.41-.08-.41-.23-.33-.33-.22-.41-.09-.41.09zm13.09 3.95l.28.06.32.12.35.18.36.27.36.35.35.47.32.59.28.73.21.88.14 1.04.05 1.23-.06 1.23-.16 1.04-.24.86-.32.71-.36.57-.4.45-.42.33-.42.24-.4.16-.36.09-.32.05-.24.02-.16-.01h-8.22v.82h5.84l.01 2.76.02.36-.05.34-.11.31-.17.29-.25.25-.31.24-.38.2-.44.17-.51.15-.58.13-.64.09-.71.07-.77.04-.84.01-1.27-.04-1.07-.14-.9-.2-.73-.25-.59-.3-.45-.33-.34-.34-.25-.34-.16-.33-.1-.3-.04-.25-.02-.2.01-.13v-5.34l.05-.64.13-.54.21-.46.26-.38.3-.32.33-.24.35-.2.35-.14.33-.1.3-.06.26-.04.21-.02.13-.01h5.84l.69-.05.59-.14.5-.21.41-.28.33-.32.27-.35.2-.36.15-.36.1-.35.07-.32.04-.28.02-.21V6.07h2.09l.14.01zm-6.47 14.25l-.23.33-.08.41.08.41.23.33.33.23.41.08.41-.08.33-.23.23-.33.08-.41-.08-.41-.23-.33-.33-.23-.41-.08-.41.08z"/>
                    </svg>

                    {/* Duplicate set for seamless loop - positioned exactly to create no gap */}
                    <svg width="40" height="40" viewBox="0 0 240 234" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clipPath="url(#clip0_5_58)">
                        <path d="M95 192C108.807 192 120 180.807 120 167V142H95C81.1929 142 70 153.193 70 167C70 180.807 81.1929 192 95 192Z" fill="#0ACF83"/>
                        <path d="M70 117C70 103.193 81.1929 92 95 92H120V142H95C81.1929 142 70 130.807 70 117Z" fill="#A259FF"/>
                        <path d="M70 67C70 53.1929 81.1929 42 95 42H120V92H95C81.1929 92 70 80.8071 70 67Z" fill="#F24E1E"/>
                        <path d="M120 42H145C158.807 42 170 53.1929 170 67C170 80.8071 158.807 92 145 92H120V42Z" fill="#FF7262"/>
                        <path d="M170 117C170 130.807 158.807 142 145 142C131.193 142 120 130.807 120 117C120 103.193 131.193 92 145 92C158.807 92 170 103.193 170 117Z" fill="#1ABCFE"/>
                        </g>
                        <defs>
                        <clipPath id="clip0_5_58">
                        <rect width="240" height="234" fill="white"/>
                        </clipPath>
                        </defs>
                    </svg>

                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
                        <path d="M4.459 4.208c.746.606 1.026.56 2.428.466l13.215-.793c.28 0 .047-.28-.046-.326L17.86 1.968c-.42-.326-.981-.7-2.055-.607L3.01 2.295c-.466.046-.56.28-.374.466l1.823 1.447zm.793 3.08v13.904c0 .747.373 1.027 1.214.98l14.523-.84c.841-.046.935-.56.935-1.167V6.354c0-.606-.233-.933-.748-.887l-15.177.887c-.56.047-.747.327-.747.933zm14.337.606c.093.42 0 .84-.42.888l-.7.14v10.264c-.608.327-1.168.514-1.635.514-.748 0-.935-.234-1.495-.933l-4.577-7.186v6.952L12.21 19s0 .84-1.168.84l-3.222.186c-.093-.186 0-.653.327-.746l.84-.233V9.854L7.822 9.76c-.094-.42.14-1.026.793-1.073l3.456-.233 4.764 7.279v-6.44l-1.215-.139c-.093-.514.28-.887.747-.933l3.269-.186z" fill="#000"/>
                    </svg>

                    <svg width="40" height="40" viewBox="0 0 24 24" fill="#F7DF1E">
                        <path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z"/>
                    </svg>

                    <svg width="40" height="40" viewBox="0 0 24 24" fill="#339933">
                        <path d="M11.998,24c-0.321,0-0.641-0.084-0.922-0.247l-2.936-1.737c-0.438-0.245-0.224-0.332-0.08-0.383 c0.585-0.203,0.703-0.25,1.328-0.604c0.065-0.037,0.151-0.023,0.218,0.017l2.256,1.339c0.082,0.045,0.197,0.045,0.272,0l8.795-5.076 c0.082-0.047,0.134-0.141,0.134-0.238V6.921c0-0.099-0.053-0.192-0.137-0.242l-8.791-5.072c-0.081-0.047-0.189-0.047-0.271,0 L3.075,6.68C2.99,6.729,2.936,6.825,2.936,6.921v10.15c0,0.097,0.054,0.189,0.139,0.235l2.409,1.392 c1.307,0.654,2.108-0.116,2.108-0.89V7.787c0-0.142,0.114-0.253,0.256-0.253h1.115c0.139,0,0.255,0.112,0.255,0.253v10.021 c0,1.745-0.95,2.745-2.604,2.745c-0.508,0-0.909,0-2.026-0.551L2.28,18.675c-0.57-0.329-0.922-0.945-0.922-1.604V6.921 c0-0.659,0.353-1.275,0.922-1.603l8.795-5.082c0.557-0.315,1.296-0.315,1.848,0l8.794,5.082c0.570,0.329,0.924,0.944,0.924,1.603 v10.15c0,0.659-0.354,1.273-0.924,1.604l-8.794,5.078C12.643,23.916,12.324,24,11.998,24z"/>
                    </svg>

                    <svg width="40" height="40" viewBox="0 0 24 24" fill="#1572B6">
                        <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.565-2.438L1.5 0zm17.09 4.413L5.41 4.413l.213 2.622h10.125l-.255 2.716h-6.64l.24 2.573h6.182l-.366 3.523-2.91.804-2.956-.81-.188-2.11h-2.61l.29 3.855L12 19.288l5.373-1.53L18.59 4.414z"/>
                    </svg>

                    <svg width="40" height="40" viewBox="0 0 24 24" fill="#E34F26">
                        <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622L5.412 4.41l.698 8.01h9.126l-.326 3.426-2.91.804-2.955-.81-.188-2.11H6.248l.33 4.171L12 19.351l5.379-1.443.744-8.157H8.531z"/>
                    </svg>

                    <svg width="40" height="40" viewBox="0 0 24 24" fill="#3776AB">
                        <path d="M14.25.18l.9.2.73.26.59.3.45.32.34.34.25.34.16.33.1.3.04.26.02.2-.01.13V8.5l-.05.63-.13.55-.21.46-.26.38-.3.31-.33.25-.35.19-.35.14-.33.1-.3.07-.26.04-.21.02H8.77l-.69.05-.59.14-.5.22-.41.27-.33.32-.27.35-.2.36-.15.37-.1.35-.07.32-.04.27-.02.21v3.06H3.17l-.21-.03-.28-.07-.32-.12-.35-.18-.36-.26-.36-.36-.35-.46-.32-.59-.28-.73-.21-.88-.14-1.05-.05-1.23.06-1.22.16-1.04.24-.87.32-.71.36-.57.4-.44.42-.33.42-.24.4-.16.36-.1.32-.05.24-.01h.16l.06.01h8.16v-.83H6.18l-.01-2.75-.02-.37.05-.34.11-.31.17-.28.25-.26.31-.23.38-.2.44-.18.51-.15.58-.12.64-.1.71-.06.77-.04.84-.02 1.27.05zm-6.3 1.98l-.23.33-.08.41.08.41.23.34.33.22.41.09.41-.09.33-.22.23-.34.08-.41-.08-.41-.23-.33-.33-.22-.41-.09-.41.09zm13.09 3.95l.28.06.32.12.35.18.36.27.36.35.35.47.32.59.28.73.21.88.14 1.04.05 1.23-.06 1.23-.16 1.04-.24.86-.32.71-.36.57-.4.45-.42.33-.42.24-.4.16-.36.09-.32.05-.24.02-.16-.01h-8.22v.82h5.84l.01 2.76.02.36-.05.34-.11.31-.17.29-.25.25-.31.24-.38.2-.44.17-.51.15-.58.13-.64.09-.71.07-.77.04-.84.01-1.27-.04-1.07-.14-.9-.2-.73-.25-.59-.3-.45-.33-.34-.34-.25-.34-.16-.33-.1-.3-.04-.25-.02-.2.01-.13v-5.34l.05-.64.13-.54.21-.46.26-.38.3-.32.33-.24.35-.2.35-.14.33-.1.3-.06.26-.04.21-.02.13-.01h5.84l.69-.05.59-.14.5-.21.41-.28.33-.32.27-.35.2-.36.15-.36.1-.35.07-.32.04-.28.02-.21V6.07h2.09l.14.01zm-6.47 14.25l-.23.33-.08.41.08.41.23.33.33.23.41.08.41-.08.33-.23.23-.33.08-.41-.08-.41-.23-.33-.33-.23-.41-.08-.41.08z"/>
                    </svg>
                </motion.div>
            </div>
        </div>
    </div>
  )
}

export default About