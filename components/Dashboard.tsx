import React from 'react';
import AnimatedSection from './AnimatedSection';
// Fix: Import motion from framer-motion instead of accessing it from the window object.
// Fix: Import Variants type to correctly type the cardVariants object.
import { motion, Variants } from 'framer-motion';

const Dashboard: React.FC = () => {
  const stats = [
    { title: 'Days Until I Do', value: '187', icon: '📅' },
    { title: 'Guests Invited', value: '124', icon: '💌' },
    { title: 'Budget Spent', value: '42%', icon: '💰' },
    { title: 'Tasks Completed', value: '15/28', icon: '✅' },
  ];
  
  // Fix: Explicitly type cardVariants with Variants to resolve type inference issue with the 'ease' property.
  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.15,
        duration: 0.5,
        ease: 'easeOut'
      },
    }),
  };

  return (
    <AnimatedSection id="dashboard">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold text-[#5B5F97]">Your Wedding At a Glance</h2>
        <p className="mt-4 text-lg text-gray-500 max-w-2xl mx-auto">Stay on top of every detail with your personalized planning dashboard.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {stats.map((stat, i) => (
          <motion.div
            key={stat.title}
            className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 text-center transform hover:-translate-y-2 transition-transform duration-300"
            custom={i}
            initial="hidden"
            animate="visible"
            variants={cardVariants}
          >
            <div className="text-5xl mb-4">{stat.icon}</div>
            <h3 className="text-xl font-semibold text-gray-700">{stat.title}</h3>
            <p className="text-4xl font-bold text-[#D4AFB9] mt-2">{stat.value}</p>
          </motion.div>
        ))}
      </div>
    </AnimatedSection>
  );
};

export default Dashboard;
