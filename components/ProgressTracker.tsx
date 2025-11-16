import React from 'react';
import AnimatedSection from './AnimatedSection';
// Fix: Import motion from framer-motion instead of accessing it from the window object.
import { motion } from 'framer-motion';

const ProgressTracker: React.FC = () => {
  const steps = [
    { name: 'Budget & Guests', status: 'complete' },
    { name: 'Venue & Date', status: 'complete' },
    { name: 'Vendors', status: 'current' },
    { name: 'Invitations', status: 'upcoming' },
    { name: 'Final Details', status: 'upcoming' },
  ];

  const currentStepIndex = steps.findIndex(step => step.status === 'current');
  const progressPercentage = (currentStepIndex / (steps.length - 1)) * 100;

  return (
    <AnimatedSection id="progress">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold text-[#5B5F97]">Planning Progress</h2>
        <p className="mt-4 text-lg text-gray-500">Follow these steps to ensure a smooth planning process.</p>
      </div>
      <div className="w-full max-w-4xl mx-auto">
        <div className="relative h-2 bg-gray-200 rounded-full">
          <motion.div
            className="absolute top-0 left-0 h-2 bg-[#9cadce] rounded-full"
            initial={{ width: 0 }}
            animate={{ width: `${progressPercentage}%` }}
            transition={{ duration: 1.5, ease: 'easeInOut' }}
          />
        </div>
        <div className="mt-4 flex justify-between">
          {steps.map((step, index) => (
            <div key={step.name} className="flex flex-col items-center text-center w-1/5">
              <motion.div
                className={`w-8 h-8 rounded-full flex items-center justify-center border-2
                  ${step.status === 'complete' ? 'bg-[#9cadce] border-[#9cadce] text-white' : ''}
                  ${step.status === 'current' ? 'bg-white border-[#9cadce] scale-125' : ''}
                  ${step.status === 'upcoming' ? 'bg-white border-gray-300' : ''}
                `}
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: step.status === 'current' ? 1.25 : 1, opacity: 1 }}
                transition={{ delay: index * 0.2, type: 'spring', stiffness: 200 }}
              >
                {step.status === 'complete' && '✓'}
              </motion.div>
              <p className={`mt-2 text-sm font-medium
                ${step.status === 'current' ? 'text-[#5B5F97]' : 'text-gray-500'}
              `}>
                {step.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
};

export default ProgressTracker;