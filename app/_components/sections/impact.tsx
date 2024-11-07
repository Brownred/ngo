'use client'

import React, { useState } from 'react';
import { 
  BookOpen, 
  Bean, 
  Heart, 
  Droplets,
  Users,
  Sprout
} from 'lucide-react';
import { 
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from 'recharts';

const ImpactSection = () => {
  type ImpactCategory = 'education' | 'livelihood' | 'healthcare' | 'water';
  const [activeTab, setActiveTab] = useState<ImpactCategory>('education');

  const impactData = {
    education: {
      title: "Education & Skills Training",
      icon: BookOpen,
      stats: "3,000+ individuals trained",
      description: "Enhancing educational opportunities and skill training for youth and adults to improve livelihood standards.",
      chartData: [
        { year: '2020', beneficiaries: 150 },
        { year: '2021', beneficiaries: 200 },
        { year: '2022', beneficiaries: 250 },
        { year: '2023', beneficiaries: 300 }
      ]
    },
    livelihood: {
      title: "Livelihood & Food Security",
      icon: Bean,
      stats: "2,000+ families supported",
      description: "Improving food security and income generation through agricultural training, market access, and infrastructure development.",
      chartData: [
        { year: '2020', beneficiaries: 80 },
        { year: '2021', beneficiaries: 120 },
        { year: '2022', beneficiaries: 160 },
        { year: '2023', beneficiaries: 200 }
      ]
    },
    healthcare: {
      title: "Health & Nutrition",
      icon: Heart,
      stats: "6,000+ medical services provided",
      description: "Delivering essential health and nutrition services to conflict-affected and vulnerable communities.",
      chartData: [
        { year: '2020', beneficiaries: 3000 },
        { year: '2021', beneficiaries: 4000 },
        { year: '2022', beneficiaries: 5000 },
        { year: '2023', beneficiaries: 6000 }
      ]
    },
    water: {
      title: "Water, Sanitation, & Hygiene (WASH)",
      icon: Droplets,
      stats: "25+ clean water projects",
      description: "Providing clean water access, sanitation facilities, and hygiene education to promote health and prevent disease.",
      chartData: [
        { year: '2020', beneficiaries: 10 },
        { year: '2021', beneficiaries: 15 },
        { year: '2022', beneficiaries: 20 },
        { year: '2023', beneficiaries: 25 }
      ]
    }
  };

  const activeData = impactData[activeTab];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Our Impact</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Through dedication and community partnership, we&apos;re creating lasting positive change across multiple sectors.
          </p>
        </div>

        {/* Impact Categories */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {Object.entries(impactData).map(([key, data]) => {
            const Icon = data.icon;
            return (
              <button
                key={key}
                onClick={() => setActiveTab(key as ImpactCategory)}
                className={`p-6 rounded-xl transition-all ${
                  activeTab === key
                    ? 'bg-primary text-white shadow-lg scale-105'
                    : 'bg-white hover:bg-gray-50'
                }`}
              >
                <Icon className={`w-8 h-8 mb-4 mx-auto ${
                  activeTab === key ? 'text-white' : 'text-primary'
                }`} />
                <h3 className="font-semibold text-lg mb-2">{data.title}</h3>
                <p className={`text-sm ${
                  activeTab === key ? 'text-green-100' : 'text-gray-600'
                }`}>
                  {data.stats}
                </p>
              </button>
            );
          })}
        </div>

        {/* Active Category Details */}
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
                <activeData.icon className="w-6 h-6 text-primary" />
                {activeData.title} Impact
              </h3>
              <p className="text-gray-600 mb-6">{activeData.description}</p>
              
              {/* Success Story */}
              <div className="bg-blue-50 p-6 rounded-xl">
                <div className="flex items-center gap-3 mb-4">
                  <Users className="w-5 h-5 text-primary" />
                  <h4 className="font-semibold">Success Story</h4>
                </div>
                <p className="text-gray-700 italic">
                  &quot;BSDC&apos;s {activeData.title.toLowerCase()} initiative transformed our community. 
                  We&apos;ve seen remarkable improvements in our quality of life.&quot;
                </p>
                <p className="text-sm text-gray-600 mt-2">- Community Member</p>
              </div>
            </div>

            {/* Impact Growth Chart */}
            <div className="h-[400px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={activeData.chartData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="year" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="beneficiaries" fill="#2563eb" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-primary to-green-800 rounded-2xl p-8 md:p-12">
            <h3 className="text-3xl font-bold text-white mb-4">Join Us in Making a Difference</h3>
            <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
              Your support can help us expand our impact and reach more communities in need.
            </p>
            <button className="bg-white text-primary hover:bg-blue-50 px-8 py-3 rounded-lg flex items-center gap-2 mx-auto transition-colors">
              Support Our Cause
              <Sprout className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;
