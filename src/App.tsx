import React from 'react';
import { Code, Smartphone, Monitor, Cog } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-blue-600 text-white p-4">
        <div className="container mx-auto">
          <h1 className="text-3xl font-bold">Anand Enterprises</h1>
          <p className="mt-2">Custom Software Solutions</p>
        </div>
      </header>

      <main className="container mx-auto mt-8 px-4">
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <ServiceCard
              icon={<Code size={24} />}
              title="Web Development"
              description="Custom web applications tailored to your needs"
            />
            <ServiceCard
              icon={<Smartphone size={24} />}
              title="Mobile Development"
              description="Native and cross-platform mobile apps"
            />
            <ServiceCard
              icon={<Monitor size={24} />}
              title="Desktop Applications"
              description="Powerful desktop software for Windows, macOS, and Linux"
            />
            <ServiceCard
              icon={<Cog size={24} />}
              title="In-house Automation"
              description="Cost-effective, secure, and local automation solutions"
            />
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Why Choose Us?</h2>
          <ul className="list-disc list-inside">
            <li>Customized solutions tailored to your specific needs</li>
            <li>Expertise in web, mobile, and desktop platforms</li>
            <li>Cost-effective in-house automation without paid tools</li>
            <li>Focus on security and local deployment</li>
            <li>Experienced team of developers</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
          <p>Ready to discuss your project? Get in touch with us today!</p>
          <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors">
            Contact Us
          </button>
        </section>
      </main>

      <footer className="bg-gray-200 mt-12 py-4">
        <div className="container mx-auto text-center">
          <p>&copy; 2024 Anand Enterprises. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

function ServiceCard({ icon, title, description }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="text-blue-600 mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

export default App;