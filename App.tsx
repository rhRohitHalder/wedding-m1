
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Dashboard from './components/Dashboard';
import ProgressTracker from './components/ProgressTracker';
import VendorList from './components/VendorList';
import BudgetTracker from './components/BudgetTracker';
import TaskList from './components/TaskList';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="bg-[#FFF8F5] overflow-x-hidden">
      <Header />
      <main>
        <Hero />
        <div className="container mx-auto px-6 py-12 md:py-20 space-y-20 md:space-y-32">
          <Dashboard />
          <ProgressTracker />
          <VendorList />
          <BudgetTracker />
          <TaskList />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default App;
