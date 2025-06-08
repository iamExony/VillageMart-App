import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronDown } from 'lucide-react';
import heroImage1 from '@/assets/harvesting.jpg';
import heroImage2 from '@/assets/Mask group.jpg';
import heroImage3 from '@/assets/pexels-jubair-hosen-junet-1766563-29948462.jpg';
import { FaCircle } from "react-icons/fa6";
import { ImArrowUpRight2 } from 'react-icons/im';


const slides = [
  {
    image: heroImage1,
    text: 'Sell Farm Produce',
    desc1: 'Easy',
    desc2: 'Fast'
  },
  {
    image: heroImage2,
    text: 'Buy crops and livestocks',
    desc1: 'Easy',
    desc2: 'Fast'
  },
  {
    image: heroImage3,
    text: 'Store crops securely',
    desc1: 'Safe',
    desc2: 'Convinient'
  },
];

export default function HeroSection() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Background Image */}
      {slides.map((slide, index) => (
        <img
          key={index}
          src={slide.image}
          alt="Farm background"
          className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000 ${index === current ? 'opacity-100' : 'opacity-0'
            }`}
        />
      ))}

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40 z-10" />

      {/* Text Content */}
      <div className="relative z-20 flex flex-col font-signika items-center justify-center h-full text-white text-center px-4">
        <h1 className="text-xl md:text-[94px] font-bold md:pt-20">{slides[current].text}</h1>
        <p className="text-xl md:text-[70px] mb-6 flex items-center gap-8">
          <div className='flex items-center'>
            <span className="mx-1">
              <FaCircle size={20} />
            </span>
            <span>{slides[current].desc1}</span>
          </div>
          <div className='flex items-center'>
            <span className="mx-1">
              <FaCircle size={20} />
            </span>
            <span>{slides[current].desc2}</span>
          </div>
        </p>
        <Button className="bg-white hover:bg-bgPrimary hover:text-white text-black px-6 py-2 rounded-[20px] mb-8 md:w-[136.42px] md:h-[54px] cursor-pointer">
          Get started <ImArrowUpRight2 />
        </Button>
        <ChevronDown className="animate-bounce" size={32} />
      </div>

      {/* Indicators */}
      <div className="absolute right-4 top-1/2 transform -translate-y-1/2 z-30 flex flex-col gap-2">
        {slides.map((_, index) => (
          <div
            key={index}
            className={`w-4 h-4 rounded-full transition-all duration-300 ${index === current ? 'bg-white' : 'bg-white/40'
              }`}
          />
        ))}
      </div>
    </section>
  );
}
