import { useState } from 'react';

const WelcomePage = () => {
  const [isButtonHovered, setIsButtonHovered] = useState(false);

  const handleButtonMouseEnter = () => {
    setIsButtonHovered(true);
  };

  const handleButtonMouseLeave = () => {
    setIsButtonHovered(false);
  };

  const buttonColor = isButtonHovered ? 'bg-blue-700' : 'bg-blue-600';

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-blue-500">
      <div className="max-w-3xl px-6 py-8 bg-white rounded-lg shadow-xl">
        <img
          src="https://storage.googleapis.com/website-production/uploads/2016/03/welcome-pages-slack.png"
          alt="Welcome"
          className="mb-8"
        />
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Welcome to DesignXcel</h1>
        <p className="text-lg text-gray-600 mb-8">
          We are a vibrant community of designers, creators, and innovators. Join us to explore the world of design and unleash your creativity.
        </p>
        <button
          className={`px-4 py-2 rounded-md text-white font-semibold transition-colors duration-300 ${buttonColor}`}
          onMouseEnter={handleButtonMouseEnter}
          onMouseLeave={handleButtonMouseLeave}
        >
          Get Started
        </button>
      </div>
    </div>
  );
};

export default WelcomePage;
