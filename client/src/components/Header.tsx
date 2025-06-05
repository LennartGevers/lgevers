import * as React from 'react';

export const Header = (): React.ReactNode => {
    return <nav className="w-full px-12 flex justify-between items-center py-6 bg-opacity-80 backdrop-blur-md rounded-lg shadow-lg animate-fade-in">
        <span className="text-2xl font-bold uppercase tracking-widest text-[#c9c9c9] animate-fade-in">SwissBlog</span>
        <div className="flex gap-6 text-sm font-medium">
          <a href="#" className="hover:text-[#7fb4ff] text-[#a3aed2] transition-colors animate-fade-in" style={{ animationDelay: '0.1s' }}>Home</a>
          <a href="#" className="hover:text-[#7fb4ff] text-[#a3aed2] transition-colors animate-fade-in" style={{ animationDelay: '0.2s' }}>About</a>
          <a href="#" className="hover:text-[#7fb4ff] text-[#a3aed2] transition-colors animate-fade-in" style={{ animationDelay: '0.3s' }}>Contact</a>
        </div>
      </nav>
}