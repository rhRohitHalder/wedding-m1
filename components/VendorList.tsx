import React, { useState } from 'react';
import AnimatedSection from './AnimatedSection';
import { motion, AnimatePresence } from 'framer-motion';

const VendorList: React.FC = () => {
  const vendors = [
    { name: 'Elysian Photography', category: 'Photographer', img: 'https://picsum.photos/id/10/400/300' },
    { name: 'Bloom & Petal', category: 'Florist', img: 'https://picsum.photos/id/1025/400/300' },
    { name: 'Grand Ballroom', category: 'Venue', img: 'https://picsum.photos/id/1040/400/300' },
    { name: 'Gourmet Delights', category: 'Catering', img: 'https://picsum.photos/id/225/400/300' },
    { name: 'DJ Rhythm', category: 'Music', img: 'https://picsum.photos/id/119/400/300' },
    { name: 'Sweet Tiers', category: 'Cake', img: 'https://picsum.photos/id/312/400/300' },
  ];

  const [activeFilter, setActiveFilter] = useState('All');
  
  const categories = ['All', ...Array.from(new Set(vendors.map(v => v.category)))];

  const filteredVendors = activeFilter === 'All' 
    ? vendors 
    : vendors.filter(vendor => vendor.category === activeFilter);

  return (
    <AnimatedSection id="vendors">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold text-[#5B5F97]">Your Dream Team</h2>
        <p className="mt-4 text-lg text-gray-500 max-w-2xl mx-auto">Browse and manage your hand-picked wedding vendors.</p>
      </div>
      
      <div className="flex justify-center flex-wrap gap-3 md:gap-4 mb-12">
        {categories.map(category => (
          <motion.button
            key={category}
            onClick={() => setActiveFilter(category)}
            className={`px-5 py-2 rounded-full text-sm font-semibold transition-colors duration-300
              ${activeFilter === category 
                ? 'bg-[#5B5F97] text-white shadow-lg' 
                : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'}
            `}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {category}
          </motion.button>
        ))}
      </div>

      <motion.div 
        layout
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        <AnimatePresence>
          {filteredVendors.map((vendor) => (
            <motion.div
              key={vendor.name}
              layout
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ type: 'spring', stiffness: 300, damping: 25 }}
              whileHover={{ scale: 1.05, y: -10 }}
              className="rounded-2xl overflow-hidden shadow-lg group"
            >
              <div className="relative">
                <img src={vendor.img} alt={vendor.name} className="w-full h-56 object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <p className="text-sm font-light">{vendor.category}</p>
                  <h3 className="text-xl font-bold">{vendor.name}</h3>
                </div>
              </div>
              <div className="bg-white p-4">
                <button className="w-full bg-[#D4AFB9] text-white py-2 rounded-lg hover:bg-[#c99faa] transition-colors duration-300">View Details</button>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </AnimatedSection>
  );
};

export default VendorList;