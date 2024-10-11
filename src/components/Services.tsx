import React from 'react';
import { Globe, Smartphone, Monitor, Cog } from 'lucide-react';

const ServiceCard = ({ icon: Icon, title, description }) => (
  <div className="bg-white p-6 rounded-lg shadow-md">
    <Icon className="h-12 w-12 text-blue-600 mb-4" />
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const Services = () => {
  const services = [
    {
      icon: Globe,
      title: "Web Development",
      description: "Custom web applications tailored to your business needs."
    },
    {
      icon: Smartphone,
      title: "Mobile Development",
      description: "Native and cross-platform mobile apps for iOS and Android."
    },
    {
      icon: Monitor,
      title: "Desktop Applications",
      description: "Powerful desktop software for Windows, macOS, and Linux."
    },
    {
      icon: Cog,
      title: "In-house Automation",
      description: "Cost-effective, secure, and local automation solutions."
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;