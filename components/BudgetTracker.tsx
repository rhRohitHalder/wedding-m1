import React, { useState, useEffect } from 'react';
import AnimatedSection from './AnimatedSection';
// Fix: Import motion from framer-motion and chart components from recharts instead of accessing them from the window object.
import { motion } from 'framer-motion';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from 'recharts';

const BudgetTracker: React.FC = () => {
  const data = [
    { name: 'Venue', value: 4000 },
    { name: 'Catering', value: 3000 },
    { name: 'Photography', value: 2000 },
    { name: 'Attire', value: 1500 },
    { name: 'Decor', value: 1000 },
    { name: 'Other', value: 500 },
  ];
  
  const COLORS = ['#D4AFB9', '#9cadce', '#B5D6D6', '#f3e6e3', '#c9adc4', '#a4a8d1'];

  const totalBudget = 15000;
  const totalSpent = data.reduce((acc, item) => acc + item.value, 0);

  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null; // Prevent server-side rendering mismatch for Recharts

  return (
    <AnimatedSection id="budget">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold text-[#5B5F97]">Budget Overview</h2>
        <p className="mt-4 text-lg text-gray-500 max-w-2xl mx-auto">Keep your spending in check and allocate your funds wisely.</p>
      </div>
      <div className="bg-white rounded-2xl shadow-lg p-8 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="w-full h-80">
          <ResponsiveContainer>
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                innerRadius={80}
                outerRadius={120}
                fill="#8884d8"
                paddingAngle={5}
                dataKey="value"
                isAnimationActive={true}
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Legend iconSize={10} layout="vertical" verticalAlign="middle" align="right" />
            </PieChart>
          </ResponsiveContainer>
        </div>
        <div>
          <div className="text-center md:text-left">
            <p className="text-lg text-gray-500">Total Spent</p>
            <p className="text-5xl font-bold text-[#5B5F97]">${totalSpent.toLocaleString()}</p>
            <p className="text-lg text-gray-500 mt-2">of ${totalBudget.toLocaleString()} budget</p>
            <div className="w-full bg-gray-200 rounded-full h-4 mt-6">
               <motion.div
                 className="bg-gradient-to-r from-[#9cadce] to-[#D4AFB9] h-4 rounded-full"
                 initial={{ width: 0 }}
                 animate={{ width: `${(totalSpent / totalBudget) * 100}%` }}
                 transition={{ duration: 1.5, ease: 'easeInOut' }}
               />
            </div>
          </div>
          <div className="mt-8 space-y-4">
            <h3 className="text-xl font-semibold text-gray-700 text-center md:text-left">Expense Breakdown</h3>
            {data.map((item, index) => (
              <motion.div
                key={item.name}
                className="flex items-center justify-between p-3 bg-gray-50/80 rounded-lg"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5, ease: 'easeOut' }}
              >
                <div className="flex items-center gap-3">
                  <span 
                    className="w-3 h-3 rounded-full"
                    style={{ backgroundColor: COLORS[index % COLORS.length] }}
                  ></span>
                  <p className="text-gray-600">{item.name}</p>
                </div>
                <p className="font-semibold text-gray-800">${item.value.toLocaleString()}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default BudgetTracker;