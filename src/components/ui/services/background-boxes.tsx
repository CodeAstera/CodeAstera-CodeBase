"use client";
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import TextHoverEffect from '@/components/services/TextHoverEffect';

// Props for Spotlight
interface SpotlightProps {
  gradientFirst?: string;
  gradientSecond?: string;
  gradientThird?: string;
  translateY?: number;
  width?: number;
  height?: number;
  smallWidth?: number;
  duration?: number;
  xOffset?: number;
}

// Spotlight background animation
const Spotlight: React.FC<SpotlightProps> = ({
  gradientFirst = "radial-gradient(68.54% 68.72% at 55.02% 31.46%, hsla(210, 100%, 85%, .08) 0, hsla(210, 100%, 55%, .02) 50%, hsla(210, 100%, 45%, 0) 80%)",
  gradientSecond = "radial-gradient(500% 50% at 50% 50%, hsla(210, 100%, 85%, .06) 0, hsla(210, 100%, 55%, .02) 80%, transparent 100%)",
  gradientThird = "radial-gradient(500% 50% at 50% 50%, hsla(210, 100%, 85%, .04) 0, hsla(210, 100%, 45%, .02) 80%, transparent 100%)",
  translateY = -350,
  width = 560,
  height = 1380,
  smallWidth = 240,
  duration = 7,
  xOffset = 100
}) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 1.5 }}
    className="pointer-events-none absolute inset-0 h-full w-full hidden xl:block"
  >
    <motion.div
      animate={{ x: [0, xOffset, 0] }}
      transition={{
        duration,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut",
      }}
      className="absolute top-0 left-0 w-screen h-screen z-40 pointer-events-none"
    >
      <div
        style={{
          transform: `translateY(${translateY}px) rotate(-45deg)`,
          background: gradientFirst,
          width: `${width}px`,
          height: `${height}px`,
        }}
        className="absolute top-0 left-0"
      />
      <div
        style={{
          transform: "rotate(-45deg) translate(5%, -50%)",
          background: gradientSecond,
          width: `${smallWidth}px`,
          height: `${height}px`,
        }}
        className="absolute top-0 left-0 origin-top-left"
      />
      <div
        style={{
          transform: "rotate(-45deg) translate(-180%, -70%)",
          background: gradientThird,
          width: `${smallWidth}px`,
          height: `${height}px`,
        }}
        className="absolute top-0 left-0 origin-top-left"
      />
    </motion.div>

    <motion.div
      animate={{ x: [0, -xOffset, 0] }}
      transition={{
        duration,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut",
      }}
      className="absolute top-0 right-0 w-screen h-screen z-40 pointer-events-none"
    >
      <div
        style={{
          transform: `translateY(${translateY}px) rotate(45deg)`,
          background: gradientFirst,
          width: `${width}px`,
          height: `${height}px`,
        }}
        className="absolute top-0 right-0"
      />
      <div
        style={{
          transform: "rotate(45deg) translate(-5%, -50%)",
          background: gradientSecond,
          width: `${smallWidth}px`,
          height: `${height}px`,
        }}
        className="absolute top-0 right-0 origin-top-right"
      />
      <div
        style={{
          transform: "rotate(45deg) translate(180%, -70%)",
          background: gradientThird,
          width: `${smallWidth}px`,
          height: `${height}px`,
        }}
        className="absolute top-0 right-0 origin-top-right"
      />
    </motion.div>
  </motion.div>
);

// Grid background
const GridBackground: React.FC = () => (
  <div className="absolute inset-0 pointer-events-none">
    <div className="absolute inset-0 bg-[linear-gradient(to_right,#1a365d20_1px,transparent_1px),linear-gradient(to_bottom,#1a365d20_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
  </div>
);

// Main AboutMe section
const AboutMe: React.FC = () => {


  // seprater line Starts 


  const [width, setWidth] = useState(0);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setWidth(100); // 90% final width
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);

  // Seprater Line Ends 


  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: (e.clientY / window.innerHeight) * 2 - 1
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="min-h-screen bg-transparent text-white relative overflow-hidden">
      <GridBackground />
      <Spotlight />


      {/* Heading Data Starts  */}

      <div className='w-full h-auto flex justify-center items-center flex-col mt-[10vh]'>
        <div className='h-[250px] w-[80vh]'>
          <TextHoverEffect text="Our Expertise" duration={0.2} />
        </div>


        <p className="max-w-7xl  text-center   text-md text-[rgb(197,197,209)]  text-balance sm:text-xl font-semibold  -mt-[5vh]  ">
        At CodeAstera, we specialize in designing and developing cutting-edge digital experiences tailored for startups and small businesses.
        From sleek, high-performance websites to intuitive user interfaces, we empower brands to stand out, connect with their audience, and scale confidently in today’s fast-moving digital world.
</p>


      </div>


      {/* Heading Data Ends */}


{/* Seprater Line Starts  */}

<div className='mt-[10vh] flex justify-center'>
        <div 
          style={{
            width: `${width}%`,
            transition: 'width 1.5s ease-out',
            display: 'flex'
          }}
        >
          <div className="h-0.5 bg-gradient-to-r from-transparent to-white/30 w-[10%] inline-block z-50"></div>
          <div className="h-0.5 bg-white/30 w-[80%] inline-block z-50"></div>
          <div className="h-0.5 bg-gradient-to-r to-transparent from-white/30 w-[10%] inline-block z-50"></div>
        </div>
      </div>

      {/* Separater Line Ends */}



    </div>
  );
};

export default AboutMe;
