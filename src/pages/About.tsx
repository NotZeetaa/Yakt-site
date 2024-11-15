import React from "react";

interface FeatureCardProps {
  title: string;
  description: string;
  icon: string;
}

export default function About() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 text-gray-800 mt-16 rounded-lg shadow-lg shadow-gray-300">
      {/* Hero Section */}
      <section className="w-full max-w-4xl px-6 py-16 text-center mt-16 rounded-lg">
        <h1 className="text-5xl font-extrabold text-blue-400 mb-4">
          About Us
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          Welcome to Yakt! Our mission is to optimize your smartphone experience with cutting-edge technology.
          <br />
          Whether you're looking for better battery life, smoother performance, or gaming enhancements, we've got you covered.
        </p>
        <div className="flex justify-center space-x-4">
          <a
            href="#features"
            className="inline-block bg-blue-400 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-200 transform transition duration-300 ease-in-out hover:scale-105 hover:shadow-xl"
          >
            Explore Features
          </a>
          <a
            href="https://telegram.me/NotZeetaa"
            className="inline-block bg-gray-200 text-gray-800 px-6 py-3 rounded-lg font-semibold hover:bg-gray-300 transition duration-200 transform transition duration-300 ease-in-out hover:scale-105 hover:shadow-xl hover:bg-gray-200"
          >
            Contact Me
          </a>
        </div>
      </section>

      {/* Key Features Section */}
      <section id="features" className="w-full max-w-5xl px-6 py-16 bg-white shadow-lg rounded-lg mt-8">
        <h2 className="text-3xl font-bold text-gray-700 text-center mb-8">Why Choose Yakt?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <FeatureCard
            title="Open Source"
            description="Fully open-source under the MIT license, allowing customization and collaboration."
            icon="🌐"
          />
          <FeatureCard
            title="User-Friendly"
            description="Simple and intuitive design for all skill levels to enjoy the benefits effortlessly."
            icon="👍"
          />
          <FeatureCard
            title="Community-Driven"
            description="Actively supported and improved by a vibrant and dedicated community."
            icon="🤝"
          />
        </div>
      </section>
    </div>
  );
}

// FeatureCard Component
function FeatureCard({ title, description, icon }: FeatureCardProps) {
  return (
    <div className="bg-gray-100 p-6 rounded-lg shadow-md text-center transform transition duration-300 ease-in-out hover:scale-105 hover:shadow-xl hover:bg-gray-200 cursor-pointer">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}
