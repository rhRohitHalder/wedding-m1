import React, { useState, useEffect } from 'react';
// Fix: Import motion from framer-motion instead of accessing it from the window object.
import { motion, AnimatePresence } from 'framer-motion';

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = ['Dashboard', 'Vendors', 'Budget', 'Tasks'];

  const menuVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.07 } },
    exit: { opacity: 0, y: -20 },
  };

  const menuItemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled || isMenuOpen ? 'bg-white/80 shadow-lg backdrop-blur-sm' : 'bg-transparent'
        }`}
      >
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-[#5B5F97] tracking-wider">Ethereal Vows</h1>
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-gray-600 hover:text-[#D4AFB9] transition-colors duration-300 relative group"
              >
                {item}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#D4AFB9] transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </nav>
          <button className="hidden md:block bg-[#D4AFB9] text-white px-5 py-2 rounded-full hover:bg-[#c99faa] transition-all duration-300 transform hover:scale-105 shadow-md">
            Sign In
          </button>
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden text-2xl text-[#5B5F97] z-50">
            {isMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
            )}
          </button>
        </div>
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              variants={menuVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="md:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-sm shadow-lg"
            >
              <nav className="flex flex-col items-center space-y-4 py-6">
                {navItems.map((item) => (
                  <motion.a
                    key={item}
                    variants={menuItemVariants}
                    href={`#${item.toLowerCase()}`}
                    onClick={() => setIsMenuOpen(false)}
                    className="text-gray-600 hover:text-[#D4AFB9] transition-colors duration-300 text-lg"
                  >
                    {item}
                  </motion.a>
                ))}
                <motion.button 
                  variants={menuItemVariants}
                  className="bg-[#D4AFB9] text-white px-6 py-3 rounded-full hover:bg-[#c99faa] transition-all duration-300 transform hover:scale-105 shadow-md mt-4"
                >
                  Sign In
                </motion.button>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
    </>
  );
};

export default Header;
