'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

const heroImages = [
  '/images/hero/hero1.jpg',
  '/images/hero/hero2.jpg',
  '/images/hero/hero3.jpg',
];

const clientLogos = [
  { src: '/images/clients/kgc.jpg', alt: 'KGC' },
  { src: '/images/clients/ohana.jpg', alt: 'Ohana' },
  { src: '/images/clients/pcg.jpg', alt: 'PCG' },
  { src: '/images/clients/pollinate.jpg', alt: 'Pollinate' },
  { src: '/images/clients/prepay.jpg', alt: 'Prepay' },
];

export default function HeroSection() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === heroImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-screen min-h-[600px] overflow-hidden">
      {/* Hero image carousel */}
      {heroImages.map((image, index) => (
        <div
          key={image}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentImageIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
        >
          <Image
            src={image}
            alt={`Hero image ${index + 1}`}
            fill
            priority={index === 0}
            className="object-cover object-center"
          />
        </div>
      ))}

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50 z-20"></div>

      {/* Content */}
      <div className="relative container mx-auto px-4 h-full flex flex-col justify-center z-30">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            We're in the business of writing great code.
          </h1>
          <p className="text-xl text-white/80 mb-8">
            We provide on-time delivery along with transparent communication. But we also make sure that our people have great work-life balance, meritocracy, and a healthy work environment.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              size="lg"
              className="bg-primary text-white hover:bg-primary/90"
            >
              Our Services
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-black"
            >
              Work With Us
            </Button>
          </div>
        </div>
      </div>

      {/* Client logos */}
      <div className="absolute bottom-0 left-0 right-0 bg-white/95 py-6 z-30">
        <div className="container mx-auto">
          <p className="text-center text-gray-500 mb-4 text-sm">
            We're trusted by many fast growing companies for their tech needs
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            {clientLogos.map((logo) => (
              <div key={logo.alt} className="w-24 h-12 relative">
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  fill
                  className="object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
