'use client'

import React, { useState } from 'react';
import { 
  MapPin, 
  Users,    
  Activity,
  ChevronRight,
  Globe,
  Target,
  ArrowUpRight
} from 'lucide-react';

const GeographicalFocus = () => {
  const [activeLocation, setActiveLocation] = useState<number | null>(null);

  const locations = [
    {
      id: 1,
      name: "Kismayo",
      type: "Major Hub",
      projects: 12,
      beneficiaries: "5,000+",
      description: "Primary operational center with comprehensive programs in education, healthcare, and community development.",
      activeProjects: ["Water Systems", "School Support", "Healthcare"]
    },
    {
      id: 2,
      name: "Badhaadhe",
      type: "Regional Center",
      projects: 8,
      beneficiaries: "3,200+",
      description: "Focus on rural development and sustainable agriculture initiatives.",
      activeProjects: ["Agricultural Support", "Community Health"]
    },
    {
      id: 3,
      name: "Afmadow",
      type: "Development Zone",
      projects: 6,
      beneficiaries: "2,800+",
      description: "Emphasis on youth empowerment and vocational training programs.",
      activeProjects: ["Youth Training", "Infrastructure"]
    },
    {
      id: 4,
      name: "Jamaame",
      type: "Community Hub",
      projects: 7,
      beneficiaries: "3,500+",
      description: "Concentrated efforts on community resilience and education.",
      activeProjects: ["Education", "Community Building"]
    },
    {
      id: 5,
      name: "Dhobley",
      type: "Border Region",
      projects: 5,
      beneficiaries: "2,000+",
      description: "Cross-border initiatives and humanitarian assistance programs.",
      activeProjects: ["Relief Aid", "Healthcare"]
    },
    {
      id: 6,
      name: "Elberde",
      type: "Emerging Focus",
      projects: 4,
      beneficiaries: "1,800+",
      description: "New development initiatives with focus on basic infrastructure.",
      activeProjects: ["Infrastructure", "Water Access"]
    },
    {
      id: 7,
      name: "Yeed",
      type: "Rural Development",
      projects: 3,
      beneficiaries: "1,500+",
      description: "Rural community support and agricultural development.",
      activeProjects: ["Agriculture", "Education"]
    },
    {
      id: 8,
      name: "Mogadishu",
      type: "Capital Hub",
      projects: 15,
      beneficiaries: "8,000+",
      description: "Comprehensive urban development and social support programs.",
      activeProjects: ["Urban Development", "Youth Employment", "Healthcare"]
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Our Geographical Focus</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            BSDC operates across key regions in Somalia, delivering targeted support and development programs.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Location List */}
          <div className="lg:col-span-1 space-y-4">
            {locations.map((location) => (
              <div
                key={location.id}
                className={`p-4 rounded-xl cursor-pointer transition-all ${
                  activeLocation === location.id
                    ? 'bg-primary text-white shadow-lg'
                    : 'bg-white hover:bg-gray-100'
                }`}
                onClick={() => setActiveLocation(location.id)}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <MapPin className={`w-5 h-5 ${
                      activeLocation === location.id ? 'text-white' : 'text-primary'
                    }`} />
                    <h3 className="font-semibold">{location.name}</h3>
                  </div>
                  <ChevronRight className={`w-4 h-4 ${
                    activeLocation === location.id ? 'text-white' : 'text-gray-400'
                  }`} />
                </div>
              </div>
            ))}
          </div>

          {/* Location Details */}
          <div className="lg:col-span-2">
            {activeLocation ? (
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                {(() => {
                  const location = locations.find(l => l.id === activeLocation);
                  if (!location) return null;
                  return (
                    <>
                      <div className="flex items-start justify-between mb-6">
                        <div>
                          <h3 className="text-2xl font-bold mb-2">{location.name}</h3>
                          <span className="inline-flex items-center gap-2 text-gray-600">
                            <Target className="w-4 h-4" />
                            {location.type}
                          </span>
                        </div>
                        <div className="bg-blue-50 text-primary px-4 py-2 rounded-lg">
                          <span className="font-semibold">{location.projects}</span> Active Projects
                        </div>
                      </div>

                      <p className="text-gray-600 mb-8">{location.description}</p>

                      <div className="grid md:grid-cols-2 gap-6 mb-8">
                        <div className="bg-gray-50 p-4 rounded-lg">
                          <div className="flex items-center gap-2 text-gray-600 mb-2">
                            <Users className="w-4 h-4" />
                            <span>Beneficiaries</span>
                          </div>
                          <p className="text-2xl font-bold">{location.beneficiaries}</p>
                        </div>
                        <div className="bg-gray-50 p-4 rounded-lg">
                          <div className="flex items-center gap-2 text-gray-600 mb-2">
                            <Activity className="w-4 h-4" />
                            <span>Impact Areas</span>
                          </div>
                          <p className="text-2xl font-bold">{location.activeProjects.length}</p>
                        </div>
                      </div>

                      <div>
                        <h4 className="font-semibold mb-4">Active Projects</h4>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                          {location.activeProjects.map((project, index) => (
                            <div 
                              key={index}
                              className="bg-gray-50 px-4 py-2 rounded-lg text-sm flex items-center justify-between"
                            >
                              {project}
                              <ArrowUpRight className="w-4 h-4 text-primary" />
                            </div>
                          ))}
                        </div>
                      </div>
                    </>
                  );
                })()}
              </div>
            ) : (
              <div className="bg-white rounded-2xl p-8 shadow-lg flex flex-col items-center justify-center text-center h-full">
                <Globe className="w-16 h-16 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-2">Select a Location</h3>
                <p className="text-gray-600">
                  Click on any location to see detailed information about our work in that area.
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Impact Summary */}
        <div className="mt-16 bg-primary rounded-2xl p-8 text-white">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <h4 className="text-3xl font-bold mb-2">8</h4>
              <p className="text-blue-100">Major Locations</p>
            </div>
            <div>
              <h4 className="text-3xl font-bold mb-2">60+</h4>
              <p className="text-blue-100">Active Projects</p>
            </div>
            <div>
              <h4 className="text-3xl font-bold mb-2">27,800+</h4>
              <p className="text-blue-100">Total Beneficiaries</p>
            </div>
            <div>
              <h4 className="text-3xl font-bold mb-2">15+</h4>
              <p className="text-blue-100">Partner Organizations</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GeographicalFocus;