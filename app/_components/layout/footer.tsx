import React from 'react';
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Organization Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <img
                src="/logo.jpg"
                alt="BSDC Logo"
                className="h-12 w-12 rounded-full"
              />
              <div>
                <h3 className="font-bold text-lg">BSDC</h3>
                <p className="text-sm text-gray-400">Empowering Communities</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm">
              Barwaqo Social Development Committee (BSDC) is dedicated to improving lives
              through sustainable community development initiatives.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="/about" className="text-gray-400 hover:text-white transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="/projects" className="text-gray-400 hover:text-white transition-colors">
                  Our Projects
                </a>
              </li>
              <li>
                <a href="/donate" className="text-gray-400 hover:text-white transition-colors">
                  Donate
                </a>
              </li>
              <li>
                <a href="/volunteer" className="text-gray-400 hover:text-white transition-colors">
                  Volunteer
                </a>
              </li>
              <li>
                <a href="/news" className="text-gray-400 hover:text-white transition-colors">
                  News & Updates
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="font-bold text-lg mb-4">Our Offices</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-green-400 mt-1" />
                <p className="text-gray-400">
                  Faanole, Kismayo<br />
                  Jubaland State of Somalia
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-green-400" />
                <div className="text-gray-400">
                  <p>MOGADISHU Office: +252 61 6705858</p>
                  <p>Kismayo Office: +252 61 6986455</p>
                  <p>Dubai Office: +971 55 741 1718</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-green-400" />
                <a href="mailto:info@bsdc.so" className="text-gray-400 hover:text-white transition-colors">
                  info@bsdc.so
                </a>
              </div>
            </div>
          </div>

          {/* Newsletter Signup */}
          <div>
            <h3 className="font-bold text-lg mb-4">Stay Updated</h3>
            <p className="text-gray-400 mb-4">Subscribe to our newsletter for updates on our work and impact.</p>
            <form className="space-y-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 rounded-md bg-gray-800 text-white placeholder-gray-400 border border-gray-700 focus:outline-none focus:border-green-400"
              />
              <button className="w-full bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition-colors">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Social Links */}
        <div className="mt-8 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} BSDC. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;