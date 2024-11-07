'use client'
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import {
  NavigationMenu,
//   NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList
//   NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import Link from 'next/link';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white/70 backdrop-blur-lg z-50 fixed top-0 left-0 right-0 shadow-md">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          {/* Logo and Organization Name */}
          <div className="flex items-center space-x-4">
            <img 
              src="/logo.jpg" 
              alt="BSDC Logo" 
              className="h-12 w-12 rounded-full"
            />
            <div>
              <h1 className="text-xl font-bold text-gray-800">BSDC</h1>
              <p className="text-sm text-gray-600">Barwaqo Social Development Committee</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <NavigationMenu>
              <NavigationMenuList className="flex space-x-8">
                <NavigationMenuItem>
                  <NavigationMenuLink className="text-gray-600 hover:text-primary transition-colors" href="/">
                    Home
                  </NavigationMenuLink>
                </NavigationMenuItem>
                
                {/* <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-gray-600 hover:text-primary">
                    Our Work
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="p-4 w-48">
                      <NavigationMenuLink className="block py-2 text-gray-600 hover:text-primary" href="/projects">
                        Projects
                      </NavigationMenuLink>
                      <NavigationMenuLink className="block py-2 text-gray-600 hover:text-primary" href="/impact">
                        Impact
                      </NavigationMenuLink>
                      <NavigationMenuLink className="block py-2 text-gray-600 hover:text-primary" href="/communities">
                        Communities
                      </NavigationMenuLink>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem> */}

                <NavigationMenuItem>
                  <NavigationMenuLink className="text-gray-600 hover:text-primary transition-colors" href="/about">
                    About Us
                  </NavigationMenuLink>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuLink className="text-gray-600 hover:text-primary transition-colors" href="/contact">
                    Contact
                  </NavigationMenuLink>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* Donate Button */}
          <Link href='/contact' className="hidden md:block bg-primary text-white px-6 py-2 rounded-full hover:bg-green-700 transition-colors">
            Join Us
          </Link>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-gray-800 focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4">
            <a href="/" className="block py-2 text-gray-600 hover:text-primary">Home</a>
            <a href="/projects" className="block py-2 text-gray-600 hover:text-primary">Our Work</a>
            <a href="/about" className="block py-2 text-gray-600 hover:text-primary">About Us</a>
            <a href="/contact" className="block py-2 text-gray-600 hover:text-primary">Contact</a>
            <Link href={'/contact'} className="mt-4 w-full bg-primary text-white px-6 py-2 rounded-full hover:bg-green-700 transition-colors">
              Join Us
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;