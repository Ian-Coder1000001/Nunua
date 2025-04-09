

import React from "react";
import { assets } from "@/assets/assets";
import Image from "next/image";

const Footer = () => {
  return (
    <footer id="footer" className="bg-gray-50 py-8">
      <div className="container mx-auto px-6 md:px-16 lg:px-32">
        {/* About Us Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1 lg:col-span-2">
            <h3 className="text-lg font-medium mb-4">About Us</h3>
            <p className="text-gray-600 mb-4">
              Nunua is a premier e-commerce platform offering high-quality electronics and accessories at competitive prices. 
              Our mission is to provide excellent customer service and a seamless shopping experience.
            </p>
          </div>
          
          {/* Contact Section */}
          <div className="col-span-1">
            <h3 className="text-lg font-medium mb-4">Contact</h3>
            <ul className="text-gray-600">
              <li className="mb-2">Email: contact@nunua.com</li>
              <li className="mb-2">Phone: +254 7 07 08 2757</li>
              <li className="mb-2">Address: 123 Commerce St, Nairobi City</li>
            </ul>
          </div>
          
          {/* Quick Links */}
          <div className="col-span-1">
            <h3 className="text-lg font-medium mb-4">Quick Links</h3>
            <ul className="text-gray-600">
              <li className="mb-2"><a href="#" className="hover:text-gray-900">FAQ</a></li>
              <li className="mb-2"><a href="#" className="hover:text-gray-900">Shipping Policy</a></li>
              <li className="mb-2"><a href="#" className="hover:text-gray-900">Return Policy</a></li>
              <li className="mb-2"><a href="#" className="hover:text-gray-900">Terms & Conditions</a></li>
            </ul>
          </div>
        </div>
        
        {/* Copyright and Social Media */}
        <div className="flex md:flex-row flex-col-reverse items-center justify-between text-left w-full border-t border-gray-200 pt-6">
          <div className="flex items-center gap-4">
            <Image className="hidden md:block" src={assets.logo} alt="logo" />
            <div className="hidden md:block h-7 w-px bg-gray-500/60"></div>
            <p className="py-4 text-center text-xs md:text-sm text-gray-500">
              Copyright 2025 © Nunua All Right Reserved.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <a href="#">
              <Image src={assets.facebook_icon} alt="facebook_icon" />
            </a>
            <a href="#">
              <Image src={assets.twitter_icon} alt="twitter_icon" />
            </a>
            <a href="#">
              <Image src={assets.instagram_icon} alt="instagram_icon" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;