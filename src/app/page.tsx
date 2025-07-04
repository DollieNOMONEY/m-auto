"use client"
import Navigation from "./components/Navigation";
import { useState, useEffect, useRef } from "react";

export default function Home() {
  const videos = [
    "videos/heropage_clip1.mp4",
    "videos/heropage_clip2.mp4",
  ];

    const [currentIndex, setCurrentIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsFading(true);

      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % videos.length);
        setIsFading(false);
      }, 1000);
    }, 8000);

    return () => clearInterval(interval);
  }, [videos.length]);

  const nextIndex = (currentIndex + 1) % videos.length;

  return (
    <div className="bg-black">
      <Navigation />
      <div className="relative h-[56.1rem] w-full overflow-hidden mb-5">
        <video
          key={currentIndex}
          src={videos[currentIndex]}
          autoPlay
          muted
          playsInline
          loop
          className={`brightness-95 contrast-125 absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-out ${
            isFading ? "opacity-0 z-10" : "opacity-100 z-20"
          }`}
        />
        <h1 className='w-[300px] sm:w-full text-center z-100 text-white font-bold uppercase absolute left-1/2 top-32 -translate-x-1/2 text-3xl lg:text-4xl'>H Auto Car Dealership</h1>
        <h1 className='w-[300px] sm:w-[550px] md:w-full text-center z-100 text-white absolute left-1/2 top-56 lg:top-52 -translate-x-1/2 lg:text-lg'>Retailing new and used vehicles across every major category of the Automobile Industry.</h1>
        <video
          key={nextIndex}
          src={videos[nextIndex]}
          autoPlay
          muted
          playsInline
          loop
          
          className={`brightness-95 contrast-125 absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-out ${
            isFading ? "opacity-100 z-20" : "opacity-0 z-10"
          }`}
        />
      </div>
      <div className="relative w-full overflow-hidden h-[100dvh]">
        <video
          src="videos/heropage_clip3.mp4"
          autoPlay
          muted
          playsInline
          loop
          className={`brightness-95 contrast-125 absolute inset-0 w-full h-full object-cover`}
        />
                  <h1 className='w-[300px] sm:w-[550px] md:w-full text-left z-100 text-white font-bold absolute left-5 lg:left-12 top-32 text-3xl lg:text-4xl uppercase'>Supplying Quality Cars</h1>
                  <h1 className='w-[300px] sm:w-[550px] md:w-full text-left z-100 text-white absolute left-5 lg:left-12 top-56 lg:text-lg font-semibold'>H AUTO ដឹងថាអតិថិជនដែលមានសក្តានុពលកំពុងត្រូវការរថយន្តដែលមានគុណភាព</h1>
      </div>
    </div>
  );
}
