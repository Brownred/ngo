import React from 'react';
import { ArrowRight, Heart, Users, Globe } from 'lucide-react';

const HeroSection = () => {
  return (
    <div className="relative min-h-screen pt-10">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://picsum.photos/1920/1080"
          alt="Community members supported by BSDC"
          className="object-cover w-full h-full"
        />
        <div className="absolute inset-0 bg-black/50" /> {/* Dark overlay */}
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-32">
        <div className="max-w-3xl text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Empowering Communities,
            <span className="block mt-2">Transforming Lives</span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-gray-200">
            Barwaqo Social Development Committee (BSDC) is committed to fostering sustainable development, promoting peace, and enhancing resilience across Somalia.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4">
            <button className="bg-primary hover:bg-primary/80 text-white px-8 py-3 rounded-lg flex items-center gap-2 transition-colors">
              Donate Now
              <Heart className="w-5 h-5" />
            </button>
            <button className="bg-white hover:bg-gray-100 text-primary px-8 py-3 rounded-lg flex items-center gap-2 transition-colors">
              Learn More
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>

          {/* Quick Stats */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex items-center gap-3">
              <Users className="w-8 h-8 text-primary" />
              <div>
                <h3 className="text-2xl font-bold">5,000+</h3>
                <p className="text-gray-300">Lives Impacted</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Globe className="w-8 h-8 text-primary" />
              <div>
                <h3 className="text-2xl font-bold">10+</h3>
                <p className="text-gray-300">Communities Served</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Heart className="w-8 h-8 text-primary" />
              <div>
                <h3 className="text-2xl font-bold">100%</h3>
                <p className="text-gray-300">Dedication to Change</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
