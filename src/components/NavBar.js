import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { CodeXml } from "lucide-react";

const Navbar = () => {
  const navItems = [
    { name: "about.", path: "/" },
    { name: "experience.", path: "/experience" },
    { name: "projects.", path: "/projects" },
    { name: "photos.", path: "/photos" },
    { name: "blog.", path: "/blog" },
  ];

  // Extract all unique characters from nav item names
  const allNavChars = [
    ...new Set(
      navItems
        .map((item) => item.name)
        .join("")
        .split("")
    ),
  ];

  // State to track which link is being hovered
  const [hoveredIndex, setHoveredIndex] = useState(null);
  // State for animated text
  const [animatedText, setAnimatedText] = useState({});
  // Ref for animation intervals
  const intervalRefs = useRef({});
  // State for mobile menu
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  // State to track if menu items should animate in
  const [shouldAnimateIn, setShouldAnimateIn] = useState(false);
  // State to track if we're on mobile
  const [isMobile, setIsMobile] = useState(false);

  // Check if we're on mobile screen
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Generate a single random character from the available nav characters
  const getRandomChar = () => {
    return allNavChars[Math.floor(Math.random() * allNavChars.length)];
  };

  // Start character animation for the hovered item
  const startAnimation = (index) => {
    const itemName = navItems[index].name;

    // Initialize the animated text with the original text
    setAnimatedText((prev) => ({
      ...prev,
      [index]: itemName.split("").map((char) => char),
    }));

    // Clear any existing interval for this index
    if (intervalRefs.current[index]) {
      clearInterval(intervalRefs.current[index]);
    }

    // Create a new interval that updates random characters
    intervalRefs.current[index] = setInterval(() => {
      setAnimatedText((prev) => {
        const newText = [...(prev[index] || itemName.split(""))];

        // Randomly change 1-2 characters at a time
        const numChanges = Math.floor(Math.random() * 2) + 1;
        for (let i = 0; i < numChanges; i++) {
          const charIndex = Math.floor(Math.random() * itemName.length);
          newText[charIndex] = getRandomChar();
        }

        return {
          ...prev,
          [index]: newText,
        };
      });
    }, 10); // Update every 10ms for a fast flickering effect

    // Stop the animation after 1 second and revert to original text
    setTimeout(() => {
      stopAnimation(index);

      // Set the text back to original after animation stops
      setAnimatedText((prev) => ({
        ...prev,
        [index]: itemName.split(""),
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
    const intervals = intervalRefs.current;
    return () => {
      Object.values(intervals).forEach((interval) => {
        clearInterval(interval);
      });
    };
  }, []);

  const toggleMobileMenu = () => {
    if (!isMobileMenuOpen) {
      // Opening menu - reset animation state first
      setShouldAnimateIn(false);
      setIsMobileMenuOpen(true);
      // Trigger animation after a brief delay to ensure DOM is ready
      setTimeout(() => {
        setShouldAnimateIn(true);
      }, 5);
    } else {
      // Closing menu
      setShouldAnimateIn(false);
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <>
      {/* Mobile Menu Button - Only visible on mobile */}
      <button
        onClick={toggleMobileMenu}
        className="fixed bottom-4 right-4 md:hidden w-12 h-12 bg-white rounded-full flex items-center justify-center z-50 hover:bg-gray-100 active:scale-95 active:shadow-md transition-all duration-150"
        style={{
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15), 0 0 0 1px rgba(0, 0, 0, 0.05)",
        }}
        aria-label="Toggle menu"
      >
        <CodeXml className="w-6 h-6 text-black" />
      </button>

      {/* Mobile Menu Overlay with Menu Items - Only visible when menu is open */}
      {isMobileMenuOpen && (
        <>
          <div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm md:hidden z-40"
            onClick={toggleMobileMenu}
          />
          {/* Mobile Menu Items - Displayed directly on overlay */}
          <div className="fixed inset-0 md:hidden z-50 flex flex-col items-end justify-end pb-20 pr-4 pointer-events-none">
            <ul className="flex flex-col gap-6 pointer-events-auto">
              {navItems.map((item, index) => {
                // Reverse index for mobile animation (last item animates first, appears at bottom)
                const mobileIndex = navItems.length - 1 - index;
                return (
                  <li
                    key={index}
                    style={{
                      transform: shouldAnimateIn
                        ? "translateY(0)"
                        : "translateY(80px)",
                      opacity: shouldAnimateIn ? 1 : 0,
                      transition: shouldAnimateIn
                        ? `all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1) ${mobileIndex * 50}ms`
                        : `all 0.2s ease-in ${index * 30}ms`,
                    }}
                  >
                    <Link
                      to={item.path}
                      className="flex items-center transition-colors text-white hover:text-gray-200"
                      onMouseEnter={() => handleMouseEnter(index)}
                      onMouseLeave={() => handleMouseLeave(index)}
                      onClick={() => {
                        setShouldAnimateIn(false);
                        setTimeout(() => {
                          setIsMobileMenuOpen(false);
                        }, 200);
                      }}
                    >
                      <span className="font-mono text-2xl font-bold">
                        {hoveredIndex === index && animatedText[index]
                          ? animatedText[index].join("")
                          : item.name}
                      </span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </>
      )}

      {/* Desktop Navbar - Always visible on desktop */}
      <nav
        className={`fixed text-black flex md:flex-col bg-white xs:bg-gray rounded-xl
                    ${
                      isMobile
                        ? "hidden"
                        : "md:left-20 md:top-20 md:h-full md:w-48 md:bottom-auto md:opacity-100 md:pointer-events-auto md:z-10"
                    }`}
      >
        {/* Navigation Links */}
        <div className="flex-1 px-2 py-3">
          <ul className="flex md:flex-col justify-around md:justify-start text-secondary space-y-2">
            {navItems.map((item, index) => (
              <li key={index}>
                <Link
                  to={item.path}
                  className="flex items-center p-1 rounded-lg transition-colors text-sm font-500"
                  onMouseEnter={() => handleMouseEnter(index)}
                  onMouseLeave={() => handleMouseLeave(index)}
                >
                  <span className="font-mono">
                    {hoveredIndex === index && animatedText[index]
                      ? animatedText[index].join("")
                      : item.name}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Footer Section - Hidden on mobile */}
        <div className="hidden md:block p-2 mt-auto border-t border-gray-200 text-center">
          <div className="hidden md:block text-xs text-secondary">
            © 2024 Kaisen Ye
          </div>
          <div className="md:hidden text-xs text-secondary">© 2024</div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
