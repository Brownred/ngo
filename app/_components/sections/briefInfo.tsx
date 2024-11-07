

import { Award, Globe, Target } from 'lucide-react';

const HomeIntroSection = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-green-50 to-green-100">
      <div className="container mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gray-800 mb-4">About Us</h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            At BSDC, we are committed to driving sustainable development, promoting peace, and empowering communities in Somalia.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Vision */}
          <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center mb-4">
              <Globe className="w-8 h-8 text-green-600" />
              <h3 className="text-2xl font-semibold text-gray-800 ml-4">Our Vision</h3>
            </div>
            <p className="text-gray-600">
              To empower communities and promote sustainable development to achieve peace and prosperity in Somalia.
            </p>
          </div>

          {/* Mission */}
          <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center mb-4">
              <Target className="w-8 h-8 text-green-600" />
              <h3 className="text-2xl font-semibold text-gray-800 ml-4">Our Mission</h3>
            </div>
            <p className="text-gray-600">
              We promote community-driven sustainable development initiatives with a focus on quality humanitarian services, peace, and justice.
            </p>
          </div>

          {/* Achievements */}
          <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center mb-4">
              <Award className="w-8 h-8 text-yellow-600" />
              <h3 className="text-2xl font-semibold text-gray-800 ml-4">Achievements</h3>
            </div>
            <ul className="text-gray-600 list-disc list-inside space-y-2">
              <li>5,000+ people provided with healthcare</li>
              <li>3,000+ children supported in education</li>
              <li>25+ clean water projects completed</li>
              <li>2,000+ families empowered through livelihood programs</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeIntroSection;
