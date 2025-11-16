
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#e4d6d9] text-[#5B5F97] mt-20">
      <div className="container mx-auto px-6 py-12 text-center">
        <h2 className="text-3xl font-bold">Ethereal Vows</h2>
        <p className="mt-4 max-w-md mx-auto">
          Making your special day perfect, one detail at a time.
        </p>
        <div className="flex justify-center space-x-6 mt-8">
          <a href="#" className="hover:text-white transition-colors">Facebook</a>
          <a href="#" className="hover:text-white transition-colors">Instagram</a>
          <a href="#" className="hover:text-white transition-colors">Pinterest</a>
        </div>
        <div className="mt-10 border-t border-[#c99faa]/50 pt-8">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} Ethereal Vows. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
