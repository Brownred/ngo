'use client'

import { MapPin, Phone, Mail, Globe } from 'lucide-react';

const ContactUs = () => {
  return (
    <section className="py-20 md:py-28 bg-gray-50 relative">
      <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-green-500 opacity-10 pointer-events-none"></div>
      
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gray-800 mb-4">Get in Touch</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Reach out for partnership opportunities, inquiries, or to learn more about our work. We'd love to hear from you!
          </p>
        </div>

        {/* Contact Information */}
        <div className="grid md:grid-cols-1 gap-10">
          {/* Our Office Info */}
          <div className="bg-white rounded-2xl shadow-lg p-10 md:p-20 mx-auto m-20 transition transform hover:scale-105 duration-300 ease-in-out">
            <h3 className="text-3xl font-semibold mb-8 text-green-600">Our Office</h3>
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <MapPin className="w-7 h-7 text-green-600" />
                <div>
                  <p className="text-gray-900 font-bold">Faanole, Kismayo</p>
                  <p className="text-gray-500">Jubaland State, Somalia</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <Phone className="w-7 h-7 text-green-600" />
                <div>
                  <p className="text-gray-900 font-bold">MOGADISHU Office: +252 61 6705858</p>
                  <p className="text-gray-900 font-bold">Kismayo Office: +252 61 6986455</p>
                  <p className="text-gray-900 font-bold">Dubai Office: +971 55 741 1718</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <Mail className="w-7 h-7 text-green-600" />
                <p className="text-gray-900 font-bold">info@bsdc.so</p>
              </div>
              <div className="flex items-center gap-4">
                <Globe className="w-7 h-7 text-green-600" />
                <p className="text-gray-900 font-bold">www.bsdc.so</p>
              </div>
            </div>
          </div>

          {/* Social Media Links */}
          {/* <div className="bg-white rounded-2xl shadow-lg p-10 transition transform hover:scale-105 duration-300 ease-in-out">
            <h3 className="text-3xl font-semibold mb-8 text-green-600">Follow Us</h3>
            <p className="text-gray-600 mb-8">
              Stay updated on our latest projects and news by following us on social media.
            </p>
            <div className="flex space-x-6">
              <a href="#" target="_blank" rel="noopener noreferrer" className="text-green-600 hover:text-green-800 transition">
                <i className="fab fa-facebook fa-2x"></i>
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" className="text-green-600 hover:text-green-800 transition">
                <i className="fab fa-twitter fa-2x"></i>
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" className="text-green-600 hover:text-green-800 transition">
                <i className="fab fa-linkedin fa-2x"></i>
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" className="text-green-600 hover:text-green-800 transition">
                <i className="fab fa-instagram fa-2x"></i>
              </a>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
