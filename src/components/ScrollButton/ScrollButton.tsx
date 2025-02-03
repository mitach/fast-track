import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import gsap from 'gsap';
import './ScrollButton.css';

const ScrollButton = () => {
  const [currentSection, setCurrentSection] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const buttonRef = useRef(null);
  const arrowRef = useRef(null);

  useEffect(() => {
    const sections = document.querySelectorAll('.results-section');
    
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2;
      
      sections.forEach((section, index) => {
        const rect = section.getBoundingClientRect();
        const absoluteTop = window.scrollY + rect.top;
        
        if (scrollPosition >= absoluteTop) {
          setCurrentSection(index);
        }
      });

      // Hide button if we're at the last section
      if (currentSection === sections.length - 1) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [currentSection]);

  useEffect(() => {
    if (!buttonRef.current || !arrowRef.current) return;

    const arrow = arrowRef.current;
    const tl = gsap.timeline({
      repeat: -1,
      repeatDelay: 15,
      defaults: {
        transformOrigin: "center center"
      }
    });

    // Single timeline for animation
    tl.to(arrow, {
      translateY: 4,
      duration: 0.5,
      ease: "power2.inOut"
    })
    .to(arrow, {
      translateY: -4,
      duration: 0.5,
      ease: "power2.inOut"
    })
    .to(arrow, {
      translateY: 0,
      duration: 0.3,
      ease: "power2.out"
    });

    return () => {
      // Just kill the timeline on cleanup
      tl.kill();
    };
  }, [isVisible]);

  const scrollToNextSection = () => {
    const sections = document.querySelectorAll('.results-section');
    if (currentSection < sections.length - 1) {
      const nextSection = sections[currentSection + 1];
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="scroll-button-wrapper"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
        >
          <button
            ref={buttonRef}
            className="scroll-button"
            onClick={scrollToNextSection}
          >
            <div className="arrow-container" ref={arrowRef}>
              <svg 
                width="24" 
                height="24" 
                viewBox="0 0 24 24" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path 
                  d="M12 4L19 11H15V20H9V11H5L12 4Z" 
                  fill="currentColor"
                  transform="rotate(180 12 12)"
                />
              </svg>
            </div>
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ScrollButton; 