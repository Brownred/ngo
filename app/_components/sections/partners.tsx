import React from 'react';
import { 
  Building2, 
  Handshake, 
  Globe, 
  ArrowRight,
} from 'lucide-react';

const SponsorsPartners = () => {

  const sponsors = [
    {
      name: "United Nations Development Programme (UNDP)",
      category: "International Organization",
      image: "/sp5.png",
      type: "Major Partner",
      description: "Supporting sustainable livelihoods and governance initiatives.",
      since: "2018"
    },
    {
      name: "World Health Organization (WHO)",
      category: "Healthcare",
      image: "/sp1.jpg",
      type: "Health Partner",
      description: "Partnering on health and nutrition programs.",
      since: "2019"
    },
    {
      name: "UNICEF",
      category: "International Organization",
      image: "/sp2.jpg",
      type: "Education Partner",
      description: "Supporting education and child protection initiatives.",
      since: "2017"
    },
    {
      name: "World Food Programme (WFP)",
      category: "International Organization",
      image: "/sp3.jpg",
      type: "Food Security Partner",
      description: "Providing food assistance and supporting nutrition programs.",
      since: "2020"
    },
    {
      name: "Ministry of Health, Somalia",
      category: "Government",
      image: "/sp4.jpg",
      type: "Regional Health Partner",
      description: "Collaborating on healthcare access and community health projects.",
      since: "2016"
    }
  ];

  const partnerTypes = [
    {
      title: "Major Sponsors",
      icon: Building2,
      description: "Organizations providing significant support in BSDC's mission areas."
    },
    {
      title: "Implementation Partners",
      icon: Handshake,
      description: "Working directly with us on ground-level projects to impact communities."
    },
    {
      title: "International Collaborators",
      icon: Globe,
      description: "Global organizations supporting our initiatives across sectors and regions."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Our Sponsors & Partners</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Together with our esteemed partners, we&apos;re creating lasting positive change in communities.
          </p>
        </div>

        {/* Partnership Types */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {partnerTypes.map((type) => (
            <div key={type.title} className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-all">
              <type.icon className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-2">{type.title}</h3>
              <p className="text-gray-600">{type.description}</p>
            </div>
          ))}
        </div>

        {/* Sponsors Grid */}
        <div className="bg-gray-50 rounded-2xl p-8 mb-16">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {sponsors.map((sponsor) => (
              <div 
                key={sponsor.name}
                className="bg-white rounded-lg p-6 flex flex-col items-center justify-center hover:shadow-lg transition-all group cursor-pointer"
              >
                <img
                  src={sponsor.image}
                  alt={sponsor.name}
                  className="w-full h-auto object-contain mb-4 group-hover:scale-105 transition-transform"
                />
                {/* <p className="text-sm font-medium text-center">{sponsor.name}</p> */}
                {/* <span className="text-xs text-gray-500">Since {sponsor.since}</span> */}
              </div>
            ))}
          </div>
        </div>

        {/* Partnership Benefits */}
        <div className="bg-primary text-white rounded-2xl p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4">Become a Partner</h3>
              <p className="text-blue-100 mb-6">
                Join us in our mission to create positive change. Partner with BSDC and help us make a lasting impact in communities.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3">
                  <div className="bg-primary/80 rounded-full p-1">
                    <Handshake className="w-4 h-4" />
                  </div>
                  <span>Access to community networks</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="bg-primary/80 rounded-full p-1">
                    <Globe className="w-4 h-4" />
                  </div>
                  <span>International collaboration opportunities</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="bg-primary/80 rounded-full p-1">
                    <Building2 className="w-4 h-4" />
                  </div>
                  <span>Strategic project implementation</span>
                </li>
              </ul>
              <button className="bg-white text-primary hover:bg-blue-50 px-6 py-3 rounded-lg flex items-center gap-2 transition-colors">
                Partner With Us
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
            <div className="relative">
              <img
                src="https://picsum.photos/600/400"
                alt="Partnership Impact"
                className="rounded-xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-primary/80 text-white p-4 rounded-lg">
                <p className="text-2xl font-bold">4+</p>
                <p className="text-sm">Years of Impact</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SponsorsPartners;
