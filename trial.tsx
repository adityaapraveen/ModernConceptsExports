import React from 'react';
import { Globe, LeafyGreen } from 'lucide-react';
import { Button } from './ui/button';
export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-sage-50 to-sage-100">
      <div className="absolute inset-0 bg-[url('/photo-1501854140801-50d01698950b')] bg-cover bg-center opacity-10" />
      <div className="container mx-auto px-4 py-24 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center justify-center space-x-2 mb-6 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full animate-fade-down">
            <LeafyGreen className="w-5 h-5 text-sage-600" />
            <span className="text-sage-800 font-medium">Discover Nature's Finest Treasures</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-earth-800 animate-fade-up">
            India's Ancient <br /> Superfoods
          </h1>
          
          <p className="text-lg md:text-xl text-earth-600 mb-8 animate-fade-up [animation-delay:200ms]">
            Journey through centuries of wellness tradition with our premium selection of Makhana, Kalonji, and Butterfly Pea Flower.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up [animation-delay:400ms]">
            <Button className="bg-sage-600 hover:bg-sage-700 text-white px-8 py-6 rounded-full text-lg transition-all duration-300 hover:shadow-lg hover:scale-105">
              Explore Products
            </Button>
            <Button variant="outline" className="border-sage-600 text-sage-700 hover:bg-sage-50 px-8 py-6 rounded-full text-lg">
              Learn More
            </Button>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-background to-transparent" />
      <Globe className="absolute bottom-12 right-12 w-24 h-24 text-sage-400 animate-float opacity-50" />
    </section>
  );
};