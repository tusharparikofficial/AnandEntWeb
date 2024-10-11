import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between items-center">
          <div className="w-full md:w-1/3 text-center md:text-left mb-6 md:mb-0">
            <h3 className="text-xl font-semibold">Anand Enterprises</h3>
            <p className="mt-2">Custom Software Solutions</p>
          </div>
          <div className="w-full md:w-1/3 text-center mb-6 md:mb-0">
            <h4 className="text-lg font-semibold mb-2">Quick Links</h4>
            <ul>
              <li><a href="#services" className="hover:text-blue-400">Services</a></li>
              <li><a href="#about" className="hover:text-blue-400">About</a></li>
              <li><a href="#contact" className="hover:text-blue-400">Contact</a></li>
            </ul>
          </div>
          <div className="w-full md:w-1/3 text-center md:text-right">
            <h4 className="text-lg font-semibold mb-2">Connect With Us</h4>
            <p>Email: info@anandenterprises.com</p>
            <p>Phone: +1 (123) 456-7890</p>
          </div>
        </div>
        <div className="mt-8 text-center">
          <p>&copy; 2024 Anand Enterprises. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;