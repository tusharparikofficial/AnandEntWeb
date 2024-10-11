import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">About Anand Enterprises</h2>
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-gray-600 mb-6">
            At Anand Enterprises, we specialize in developing customized software applications that cater to the unique needs of businesses across various industries. Our expertise spans web, mobile, and desktop platforms, ensuring that we can provide comprehensive solutions for any technological challenge.
          </p>
          <p className="text-gray-600 mb-6">
            What sets us apart is our commitment to creating cost-effective, secure, and fully localized automation solutions. We understand the importance of data privacy and security, which is why our in-house automation tools are designed to operate entirely within your local infrastructure, eliminating the need for expensive third-party services.
          </p>
          <p className="text-gray-600">
            With a team of skilled developers and a passion for innovation, we're dedicated to helping your business thrive in the digital age. Let us transform your ideas into powerful, efficient, and user-friendly software solutions.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;