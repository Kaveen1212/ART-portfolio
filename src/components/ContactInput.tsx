import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';

const ContactInput: React.FC = () => {

  const [sriLankaTime, setSriLankaTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true,
        timeZone: 'Asia/Colombo',
      };
      setSriLankaTime(now.toLocaleTimeString('en-US', options));
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);


  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  
  // Animation logic
  const [isHovered, setIsHovered] = useState(false);
  const [isFormActive, setIsFormActive] = useState(false);

  const rollingRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number | null>(null);

  // Animation runs if hovered or form is active
  useEffect(() => {
    let start: number | null = null;
    const duration = 3000;
    const lineLength = 200;
    const circleCircumference = Math.PI * 11.5;

    function animate(ts: number) {
      if (!start) start = ts;
      const elapsed = (ts - start) % duration;
      const progress = elapsed / duration;
      const x = progress * lineLength;
      const rotate = (x / circleCircumference) * 360;

      if (rollingRef.current) {
        rollingRef.current.style.transform = `translateX(${x}px) rotate(${rotate}deg)`;
      }
      animationRef.current = requestAnimationFrame(animate);
    }

    if (isHovered || isFormActive) {
      animationRef.current = requestAnimationFrame(animate);
    } else {
      if (rollingRef.current) {
        rollingRef.current.style.transform = `translateX(0px) rotate(0deg)`;
      }
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    }

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isHovered, isFormActive]);


  return (
     <div className="min-h-screen bg-white text-black flex flex-col">
      {/* Top Section: 2/3 height */}
      <div className="flex flex-row relative" style={{ height: '66.666vh' }}>
        {/* Rolling Circle on the line */}
        <div
          style={{
            position: 'absolute',
            left: '47%',
            top: '35%',
            width: '300px',
            height: '2px',
            transform: 'rotate(34deg) translateY(-50%)',
            transformOrigin: 'left center',
            pointerEvents: 'none',
            zIndex: 50,
          }}
        >
          {/* The animated circle */}
          <div
            ref={rollingRef}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            style={{
              position: 'absolute',
              top: '-11.35rem', // half of circle height to center on line
              left: 0,
              width: '11.5rem',
              height: '11.5rem',
              border: '1px solid black',
              borderRadius: '50%',
              background: 'white',
              opacity: 0.9,
              pointerEvents: 'auto', // allow hover
              cursor: 'pointer',
              transition: 'box-shadow 0.2s',
              boxShadow: isHovered ? '0 0 0 4px #e5e7eb' : 'none',
            }}
          />
          {/* The line itself */}
          <div
            style={{
              width: '300px',
              height: '2px',
              background: 'black',
              position: 'absolute',
              left: 0,
              top: '50%',
              transform: 'translateY(-50%)',
            }}
          />
        </div>
    
    {/* Left Section - Hero Text */}
    <div className="flex-1 flex items-start justify-start relative overflow-hidden">
      {/* Curved Line Element */}
      
        <div className="absolute top-8 left-32 text-left max-w-full">
          <h1 className="text-[180px] font-bold leading-none tracking-tight">
            LET'S
            <br />
            <span className="text-[180px] ml-20">GET IN</span>
            <br />
            <span className="text-[180px]">TOUCH</span>
          </h1>
        </div>
      </div>
      {/* Right Section - Contact Form */}
      <div className="flex-1 flex items-center justify-end pr-32">
          <form
            className="w-full max-w-md"
            onSubmit={handleSubmit}
            // Listen for focus/blur on the form
            onFocus={() => setIsFormActive(true)}
            onBlur={e => {
              // Only set inactive if focus leaves the form entirely
              if (!e.currentTarget.contains(e.relatedTarget)) {
                setIsFormActive(false);
              }
            }}
            tabIndex={-1}
          >
          <div className="space-y-18">
            {/* Full Name Field */}
            <div className="relative">
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleInputChange}
                className="w-full bg-transparent border-b border-gray-600 pb-3 text-black placeholder-gray-500 focus:border-black focus:outline-none transition-colors duration-300 text-lg"
                placeholder="Full Name"
              />
            </div>
            {/* Email and Phone Row */}
            <div className="grid grid-cols-2 gap-8">
              <div className="relative">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full bg-transparent border-b border-gray-600 pb-3 text-black placeholder-gray-500 focus:border-black focus:outline-none transition-colors duration-300 text-lg"
                  placeholder="Email"
                />
              </div>
              <div className="relative">
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full bg-transparent border-b border-gray-600 pb-3 text-black placeholder-gray-500 focus:border-black focus:outline-none transition-colors duration-300 text-lg"
                  placeholder="Phone"
                />
              </div>
            </div>
            {/* Message Field */}
            <div className="relative">
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                rows={1}
                className="w-full bg-transparent border-b border-gray-600 pb-1 text-black placeholder-gray-500 focus:border-black focus:outline-none transition-colors duration-300 text-lg resize-none"
                placeholder="Message"
              />
            </div>
            {/* Submit Button */}
            <div className="flex justify-end -mt-15">
              <button
                type="submit"
                className="flex items-center justify-center w-16 h-16 bg-white text-black rounded-full hover:bg-gray-200 transition-colors duration-300 group"
              >
                <ArrowRight className="w-6 h-6 transform group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </div>

            <div className="flex flex-row gap-20">
        <div>
          <h3 className="text-xs font-medium text-gray-400 mb-2 tracking-widest uppercase">
            LEEDU
          </h3>
          <div className="text-sm text-gray-300 space-y-1">
            <p>100 KING STREET WEST</p>
            
          </div>
        </div>
        <div>
          <h3 className="text-xs font-medium text-gray-400 mb-2 tracking-widest uppercase">
            SPRUCE GROVE
          </h3>
          <div className="text-sm text-gray-300 space-y-1">
            <p>203 CHURCH HILL SUITE 5095</p>
            
          </div>
        </div>
      </div>
          </div>
        </form>
      </div>
    </div>
    <div className="w-full border-t border-gray-300"></div>
{/* Bottom Section: 1/3 height */}
<div className="flex flex-row justify-center items-center" style={{ height: '33.333vh' }}>
  {/* Left: QR Code and Text Side by Side */}
  <div className="flex-1 flex flex-row justify-start items-start pl-32">
    {/* Text on the left */}
    <div className="flex flex-col justify-center text-left mr-6 space-y-3">
      <div className="text-2xl font-small text-gray-700">
        Freshly baked with love  in Kandy, Sri Lanka.
      </div>
      <div className="text-4xl font-bold text-gray-500">
        Local Time - <span className='text-black'>{sriLankaTime}</span>
      </div>
      
    
    <span className='text-[12px] mt-15'>© 2025 Kaveen Deshapriya. All right reserved.</span>
    </div>
    {/* Details  */}
    <div className='ml-12 flex flex-col'>
            <span className='font-bold'>Common Skils</span>
            <div className='flex flex-col gap-2 mt-2 text-zinc-500'>
              <span className=''>Communication Skils</span>
              <span className=''>Design Principles</span>
              <span className=''>Critical Thinking</span>
              <span className=''>Readability & Maintainability</span>
              <span className=''>Efficient Code</span>
            </div>
            
    </div>
      
  </div>
  {/* Right: Buttons */}
  <div className="flex-1 flex flex-col items-end pr-32">
    <div className="grid grid-cols-2 gap-6 w-full max-w-lg">
      {/* Button Example */}
      <a
        href="https://www.linkedin.com/in/kaveen-deshapriya-b68355253/"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-between border border-black rounded-lg px-10 py-4 w-full text-lg hover:bg-gray-50 transition"
      >
        Linkedin
        <span className="ml-2">↗</span>
      </a>
      <a
        href="https://github.com/Kaveen1212"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-between border border-black rounded-lg px-10 py-4 w-full text-lg hover:bg-gray-50 transition"
      >
        Git Hub
        <span className="ml-2">↗</span>
      </a>
      <a
        href="https://web.facebook.com/profile.php?id=61577058165811"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-between border border-black rounded-lg px-10 py-4 w-full text-lg hover:bg-gray-50 transition"
      >
        Facebook
        <span className="ml-2">↗</span>
      </a>
      <a
        href="https://twitter.com/"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-between border border-black rounded-lg px-10 py-4 w-full text-lg hover:bg-gray-50 transition"
      >
        Twitter
        <span className="ml-2">↗</span>
      </a>
    </div>
  </div>
</div>
    </div>
  );
};

export default ContactInput;