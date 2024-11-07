/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"

import React, { useState } from 'react';
import { 
  
  Calendar,
  MapPin,
  Users,
  Target,
  HandHeart,
  Clock
} from 'lucide-react';
import Link from 'next/link';

const ProjectCard = ({ project, onSelect }: {project: any, onSelect: any}) => (
  <div 
    onClick={() => onSelect(project)}
    className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group"
  >
    <div className="relative">
      <img
        src={`/sp5.png`}
        alt={project.title}
        className="w-full h-48 object-cover rounded-t-xl"
      />
      <div className="absolute top-4 left-4">
        <span className={`px-3 py-1 rounded-full text-sm font-medium ${
          project.status === 'Ongoing' ? 'bg-blue-500 text-white' :
          project.status === 'Urgent' ? 'bg-red-500 text-white' :
          'bg-blue-500 text-white'
        }`}>
          {project.status}
        </span>
      </div>
    </div>

    <div className="p-6">
      <div className="flex items-start justify-between">
        <div>
          <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
            {project.title}
          </h3>
          <p className="text-gray-600 mb-4">{project.shortDescription}</p>
        </div>
        <project.icon className="w-8 h-8 text-primary shrink-0 ml-4" />
      </div>

      <div className="space-y-3">
        <div className="flex items-center text-gray-500">
          <MapPin className="w-4 h-4 mr-2" />
          <span className="text-sm">{project.location}</span>
        </div>
        <div className="flex items-center text-gray-500">
          <Users className="w-4 h-4 mr-2" />
          <span className="text-sm">{project.beneficiaries} beneficiaries</span>
        </div>
      </div>

      {/* <div className="mt-4">
        <div className="flex justify-between text-sm text-gray-600 mb-2">
          <span>Progress</span>
          <span>{project.progress}%</span>
        </div>
        <div className="w-full h-2 bg-gray-200 rounded-full">
          <div 
            className="h-full bg-primary rounded-full transition-all duration-500"
            style={{ width: `${project.progress}%` }}
          />
        </div>
      </div> */}
    </div>
  </div>
);

const ProjectDetails = ({ project, onClose }: {project: any, onClose: any}) => (
  <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
    <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
      <div className="p-8">
        <div className="flex items-start justify-between mb-6">
          <div className="flex items-center gap-3">
            <project.icon className="w-8 h-8 text-primary" />
            <h2 className="text-2xl font-bold">{project.title}</h2>
          </div>
          <button 
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            ×
          </button>
        </div>

        <img
          src={`/sp5.png`}
          alt={project.title}
          className="w-full h-64 object-cover rounded-xl mb-6"
        />

        <div className="grid md:grid-cols-3 gap-4 mb-6">
          <div className="bg-gray-50 p-4 rounded-lg">
            <div className="flex items-center gap-2 text-gray-600 mb-1">
              <Target className="w-4 h-4" />
              <span className="text-sm">Goal</span>
            </div>
            <p className="font-semibold">{project.goal}</p>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg">
            <div className="flex items-center gap-2 text-gray-600 mb-1">
              <Clock className="w-4 h-4" />
              <span className="text-sm">Timeline</span>
            </div>
            <p className="font-semibold">{project.timeline}</p>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg">
            <div className="flex items-center gap-2 text-gray-600 mb-1">
              <Users className="w-4 h-4" />
              <span className="text-sm">Impact</span>
            </div>
            <p className="font-semibold">{project.beneficiaries} beneficiaries</p>
          </div>
        </div>

        <div className="prose max-w-none mb-8">
          <h3 className="text-xl font-semibold mb-3">About This Project</h3>
          <p className="text-gray-600">{project.fullDescription}</p>
        </div>

        <div className="flex flex-wrap gap-4">
          <Link href='/contact' className="bg-primary hover:bg-green-700 text-white px-6 py-3 rounded-lg flex items-center gap-2">
            Support This Project
            <HandHeart className="w-5 h-5" />
          </Link>
          {/* <button className="border border-primary text-primary hover:bg-blue-50 px-6 py-3 rounded-lg flex items-center gap-2">
            Learn More
            <ChevronRight className="w-5 h-5" />
          </button> */}
        </div>
      </div>
    </div>
  </div>
);

const CurrentProjects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    // {
    //   id: 1,
    //   title: "Clean Water Initiative",
    //   shortDescription: "Providing clean water access to rural communities",
    //   fullDescription: "This comprehensive water project aims to install sustainable water systems in 5 rural communities, benefiting over 1,000 households. The project includes well drilling, water purification systems, and community training on maintenance.",
    //   icon: Droplets,
    //   status: "Ongoing",
    //   location: "Baidoa Region",
    //   beneficiaries: "1,000+",
    //   progress: 65,
    //   goal: "5 Water Systems",
    //   timeline: "12 months"
    // },
    {
      id: 1,
      title: "Tender Agreement for Catering Services",
      shortDescription: "Contractual catering services for the United Nations",
      fullDescription: "This tender agreement, titled 'TENDER AGREEMENT FOR CATERING SERVICES,' establishes the terms and conditions under which the Barwaqo Social Development Committee (BSDC) will provide catering services to the United Nations. BSDC will deliver these services according to the agreement, with the United Nations represented by the Aden Adde International office in Mogadishu, Somalia. This project highlights an ongoing collaboration between BSDC and the United Nations to support operational needs in Kismayo and surrounding regions.",
      icon: Users,
      status: "Ongoing",
      location: "Kismayo, Somalia",
      beneficiaries: "UN personnel and local staff",
      progress: 10,
      goal: "Provision of Catering Services",
      timeline: "Contract Duration - Ongoing"
    },
    
  ];

  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Current Projects</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Join us in making a difference through our ongoing initiatives that are transforming communities.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard 
              key={project.id} 
              project={project}
              onSelect={setSelectedProject}
            />
          ))}

          {/* Add Project Card */}
          <div className="bg-green-50 rounded-xl p-6 flex flex-col items-center justify-center text-center group hover:bg-green-100 transition-colors cursor-pointer">
            <Calendar className="w-12 h-12 text-primary mb-4" />
            <h3 className="text-xl font-bold mb-2">Upcoming Projects</h3>
            <p className="text-gray-600 mb-4">
              Stay tuned for more upcoming initiatives and projects.
            </p>
            {/* <button className="text-primary font-medium group-hover:underline">
              Get Notified
            </button> */}
          </div>
        </div>

        {/* Project Details Modal */}
        {selectedProject && (
          <ProjectDetails 
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </div>
    </section>
  );
};

export default CurrentProjects;