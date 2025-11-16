import React from 'react';
// Fix: Import motion, useScroll, and useTransform from framer-motion instead of accessing them from the window object.
import { motion, useScroll, useTransform } from 'framer-motion';

const Hero: React.FC = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const y2 = useTransform(scrollY, [0, 500], [0, -100]);
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);

  return (
    <div className="relative h-screen w-full overflow-hidden flex items-center justify-center text-center text-white">
      <motion.div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(https://storage.googleapis.com/aistudio-hosting/history/22c0172e-0a56-42d6-84d4-4537e6f33d7b/request.webp)`,
          y: y1,
        }}
      />
      <div className="absolute inset-0 bg-black/40"></div>
      <motion.div style={{ y: y2, opacity }} className="relative z-10 p-4">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
          className="text-5xl md:text-8xl font-bold tracking-tight text-shadow-lg"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Crafting Your Forever
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
          className="mt-4 text-lg md:text-2xl max-w-2xl mx-auto text-shadow"
        >
          Your journey to 'I do' begins here. Seamlessly plan, manage, and celebrate the wedding of your dreams.
        </motion.p>
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.6, type: 'spring', stiffness: 120 }}
          whileHover={{ scale: 1.05, boxShadow: '0px 10px 30px rgba(212, 175, 185, 0.5)' }}
          whileTap={{ scale: 0.95 }}
          className="mt-8 px-8 py-4 bg-white text-[#D4AFB9] font-bold rounded-full text-lg shadow-xl transition-all duration-300"
        >
          Start Planning
        </motion.button>
      </motion.div>
    </div>
  );
};

export default Hero;