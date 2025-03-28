import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const navItems = [
    { name: 'about.', path: '/' },
    { name: 'experience.', path: '/experience' },
    { name: 'projects.', path: '/projects' },
    { name: 'blog.', path: '/blog' },
    
  ];

  // Extract all unique characters from nav item names
  const allNavChars = [...new Set(navItems.map(item => item.name).join('').split(''))];
  
  // State to track which link is being hovered
  const [hoveredIndex, setHoveredIndex] = useState(null);
  // State for animated text
  const [animatedText, setAnimatedText] = useState({});
  // Ref for animation intervals
  const intervalRefs = useRef({});

  // Generate a single random character from the available nav characters
  const getRandomChar = () => {
    return allNavChars[Math.floor(Math.random() * allNavChars.length)];
  };

  // Start character animation for the hovered item
  const startAnimation = (index) => {
    const itemName = navItems[index].name;
    
    // Initialize the animated text with the original text
    setAnimatedText(prev => ({
      ...prev,
      [index]: itemName.split('').map(char => char)
    }));
    
    // Clear any existing interval for this index
    if (intervalRefs.current[index]) {
      clearInterval(intervalRefs.current[index]);
    }
    
    // Create a new interval that updates random characters
    intervalRefs.current[index] = setInterval(() => {
      setAnimatedText(prev => {
        const newText = [...(prev[index] || itemName.split(''))];
        
        // Randomly change 1-2 characters at a time
        const numChanges = Math.floor(Math.random() * 2) + 1;
        for (let i = 0; i < numChanges; i++) {
          const charIndex = Math.floor(Math.random() * itemName.length);
          newText[charIndex] = getRandomChar();
        }
        
        return {
          ...prev,
          [index]: newText
        };
      });
    }, 10); // Update every 10ms for a fast flickering effect
    
    // Stop the animation after 1 second and revert to original text
    setTimeout(() => {
      stopAnimation(index);
      
      // Set the text back to original after animation stops
      setAnimatedText(prev => ({
        ...prev,
        [index]: itemName.split('')
      }));
    }, 300);
  };
  
  // Stop the animation
  const stopAnimation = (index) => {
    if (intervalRefs.current[index]) {
      clearInterval(intervalRefs.current[index]);
      delete intervalRefs.current[index];
    }
  };

  // Handle mouse enter
  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
    startAnimation(index);
  };

  // Handle mouse leave
  const handleMouseLeave = (index) => {
    setHoveredIndex(null);
    stopAnimation(index);
  };

  // Clean up all intervals on unmount
  useEffect(() => {
    return () => {
      Object.values(intervalRefs.current).forEach(interval => {
        clearInterval(interval);
      });
    };
  }, []);

  return (
    <nav className="fixed left-36 top-20 md:left-20 h-full w-16 md:w-48 text-black flex flex-col shadow-sm">
      {/* Navigation Links */}
      <div className="flex-1 px-2 py-3">
        <ul className="">
          {navItems.map((item, index) => (
            <li key={index}>
              <Link
                to={item.path}
                className="flex items-center p-1 rounded-lg transition-colors text-sm font-500"
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={() => handleMouseLeave(index)}
              >
                <span className="hidden md:block font-mono">
                  {hoveredIndex === index && animatedText[index] 
                    ? animatedText[index].join('') 
                    : item.name}
                </span>
                <span className="md:hidden text-xs font-mono">
                  {hoveredIndex === index && animatedText[index] 
                    ? animatedText[index][0] 
                    : item.name.charAt(0)}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
      
      {/* Footer Section */}
      <div className="p-2 mt-auto border-t border-gray-200 text-center">
        <div className="hidden md:block text-xs text-gray-600">© 2024 Kaisen Ye</div>
        <div className="md:hidden text-xs text-gray-600">© 2024</div>
      </div>
    </nav>
  );
};

export default Navbar; 