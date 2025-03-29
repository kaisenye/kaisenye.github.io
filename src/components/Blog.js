import React, { useState, useEffect } from 'react';

const Blog = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Animation effect on component mount
  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen-80 py-8 px-4 sm:px-8 mt-14 bg-gradient-to-b from-white to-gray-50">
      <h1 className="text-xl ml-5 font-bold mb-12 text-gray-800 relative">
        <span className="relative inline-block after:content-[''] after:absolute after:-bottom-3 after:left-0 after:w-1/3 after:h-1 after:bg-blue-500"></span>
        nothing on top of my head, <span className="text-accent">coming soon</span>
      </h1>
      
    </div>
  );
};

export default Blog; 