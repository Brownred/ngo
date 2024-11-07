// pages/about.js

import React from 'react';
import { FaHandsHelping, FaHeartbeat, FaSeedling, FaSchool, FaWater, FaPeace } from 'react-icons/fa';

export default function About() {
  return (
    <div className="bg-gray-50 text-gray-900 pt-10 md:pt-16">
      {/* Hero Section */}
      <section className="relative flex items-center justify-center h-96 bg-cover bg-center bg-[url('/logo.jpg')]">
        <div className="bg-black bg-opacity-50 p-8 text-center text-white rounded-lg max-w-xl mx-auto">
          <h1 className="text-4xl font-bold">About Barwaqo Social Development Committee</h1>
          <p className="mt-4 text-lg">Empowering communities for sustainable development, peace, and prosperity in Somalia.</p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 px-4 sm:px-8 lg:px-16 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-semibold text-gray-800">Our Story</h2>
          <p className="mt-4 text-lg text-gray-600">
            Founded in 2020, Barwaqo Social Development Committee (BSDC) was established by professionals dedicated to making a meaningful difference in their communities. BSDC bridges local communities with global partners to address drought, conflict, and other challenges.
          </p>
        </div>
      </section>

      {/* Mission and Vision */}
      <section className="py-16 px-4 sm:px-8 lg:px-16 bg-gradient-to-r from-green-600 to-green-400 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-semibold">Our Mission & Vision</h2>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold">Vision</h3>
              <p className="mt-2 text-lg">Empower communities to achieve sustainable peace and prosperity in Somalia.</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold">Mission</h3>
              <p className="mt-2 text-lg">Promote community-driven sustainable development initiatives, equitable resource access, and humanitarian support to foster peace and justice.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 px-4 sm:px-8 lg:px-16 bg-gray-100">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-semibold text-gray-800">Core Values</h2>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 bg-white rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-green-600">Integrity</h3>
              <p className="mt-2 text-gray-700">Commitment to ethical conduct and honesty in every action.</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-green-600">Adaptability</h3>
              <p className="mt-2 text-gray-700">Embracing innovation and agility to serve dynamic needs.</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-green-600">Collaboration</h3>
              <p className="mt-2 text-gray-700">Working with partners to deliver effective community solutions.</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-green-600">Inclusivity</h3>
              <p className="mt-2 text-gray-700">Ensuring equal access to resources and opportunities for all.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Areas of Focus */}
      <section className="py-16 px-4 sm:px-8 lg:px-16 bg-green-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-semibold text-gray-800">Our Areas of Focus</h2>
          <p className="mt-4 text-lg text-gray-600">BSDC’s work spans a range of humanitarian and development areas to address the diverse needs of Somali communities.</p>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <FocusCard icon={<FaHandsHelping />} title="Humanitarian Assistance" description="Supporting communities in crises through immediate life-saving interventions." />
            <FocusCard icon={<FaSeedling />} title="Sustainable Livelihoods" description="Improving food security and economic stability." />
            <FocusCard icon={<FaWater />} title="Water & Sanitation" description="Providing clean water, sanitation, and hygiene support." />
            <FocusCard icon={<FaHeartbeat />} title="Health & Nutrition" description="Ensuring healthcare and nutritional support for the vulnerable." />
            <FocusCard icon={<FaSchool />} title="Education & Protection" description="Enhancing educational access and protecting vulnerable groups." />
            <FocusCard icon={<FaSeedling />} title="Environmental Protection" description="Promoting sustainable practices to protect natural resources." />
            <FocusCard icon={<FaPeace />} title="Peacebuilding" description="Engaging in conflict resolution to foster regional peace." />
            <FocusCard icon={<FaHandsHelping />} title="Good Governance" description="Strengthening local governance through training and advocacy." />
          </div>
        </div>
      </section>

      {/* Geographic Focus */}
      <section className="py-16 px-4 sm:px-8 lg:px-16 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-semibold text-gray-800">Where We Work</h2>
          <p className="mt-4 text-lg text-gray-600">BSDC operates in key regions across Somalia, with a focus on the most vulnerable communities.</p>
          <ul className="mt-6 text-lg grid grid-cols-2 sm:grid-cols-3 gap-4 list-disc list-inside">
            <li>Kismayo</li>
            <li>Badhaadhe</li>
            <li>Afmadow</li>
            <li>Jamaame</li>
            <li>Dhobley</li>
            <li>Elberde</li>
            <li>Yeed</li>
            <li>Mogadishu</li>
          </ul>
        </div>
      </section>

      {/* Join Us */}
      <section className="py-16 px-4 sm:px-8 lg:px-16 bg-gradient-to-r from-green-500 to-green-700 text-white text-center">
        <h2 className="text-3xl font-semibold">Join Us in Making a Difference</h2>
        <p className="mt-4 text-lg">Together, we can create a lasting impact. Partner with us to empower communities across Somalia.</p>
        <button className="mt-8 px-6 py-3 bg-white text-green-700 text-lg font-semibold rounded-lg hover:bg-gray-100">
          Get Involved
        </button>
      </section>
    </div>
  );
}

function FocusCard({ icon, title, description }) {
  return (
    <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md text-center">
      <div className="text-green-600 text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-bold">{title}</h3>
      <p className="mt-2 text-gray-700">{description}</p>
    </div>
  );
}
