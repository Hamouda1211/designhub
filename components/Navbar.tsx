
import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Menu, X, Phone } from './icons';

export const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    document.body.style.overflow = 'auto';
    setIsMenuOpen(false);
  }, [location.pathname]);

  const toggleMenu = () => {
    setIsMenuOpen(prev => {
      const next = !prev;
      document.body.style.overflow = next ? 'hidden' : 'auto';
      return next;
    });
  };
  
  const handleNavigation = (path: string) => {
    navigate(path);
  }

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-3 rtl:space-x-reverse cursor-pointer" onClick={() => handleNavigation('/')}>
            <div className="w-10 h-10 bg-gradient-to-r from-amber-500 to-amber-600 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-xl">D</span>
            </div>
            <span className="text-xl font-bold text-gray-900">DesignHub Egypt</span>
          </div>

          <nav className="hidden md:flex items-center space-x-8 rtl:space-x-reverse">
            <button onClick={() => handleNavigation('/')} className="text-gray-700 hover:text-amber-600 transition-colors">الرئيسية</button>
            <button onClick={() => handleNavigation('/dresses')} className="text-gray-700 hover:text-amber-600 transition-colors">فساتين</button>
            <button onClick={() => handleNavigation('/design')} className="text-gray-700 hover:text-amber-600 transition-colors">اطلب تصميمك</button>
            <button onClick={() => handleNavigation('/about')} className="text-gray-700 hover:text-amber-600 transition-colors">عنّا</button>
            <button onClick={() => handleNavigation('/contact')} className="text-gray-700 hover:text-amber-600 transition-colors">تواصل معنا</button>

            <div className="flex items-center space-x-2 rtl:space-x-reverse text-gray-700">
              <Phone className="w-4 h-4 text-amber-600" />
              <span className="font-medium">0100-000-0000</span>
            </div>
            <button className="bg-black text-white px-4 py-2 rounded-full hover:bg-gray-800 transition-colors">انضم كمصنع</button>
          </nav>

          <div className="md:hidden">
            <button onClick={toggleMenu} className="p-2 text-gray-700">
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      <div className={`md:hidden fixed top-16 right-0 h-[calc(100vh-4rem)] w-full bg-white z-40 transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="px-5 pt-5 pb-3 space-y-2">
          <button onClick={() => handleNavigation('/')} className="block px-3 py-3 text-lg text-gray-700 hover:text-amber-600 w-full text-right hover:bg-gray-50 rounded-md">الرئيسية</button>
          <button onClick={() => handleNavigation('/dresses')} className="block px-3 py-3 text-lg text-gray-700 hover:text-amber-600 w-full text-right hover:bg-gray-50 rounded-md">فساتين</button>
          <button onClick={() => handleNavigation('/design')} className="block px-3 py-3 text-lg text-gray-700 hover:text-amber-600 w-full text-right hover:bg-gray-50 rounded-md">اطلب تصميمك</button>
          <button onClick={() => handleNavigation('/about')} className="block px-3 py-3 text-lg text-gray-700 hover:text-amber-600 w-full text-right hover:bg-gray-50 rounded-md">عنّا</button>
          <button onClick={() => handleNavigation('/contact')} className="block px-3 py-3 text-lg text-gray-700 hover:text-amber-600 w-full text-right hover:bg-gray-50 rounded-md">تواصل معنا</button>
          <div className="px-3 py-4 border-t mt-4">
            <button className="w-full bg-black text-white px-4 py-3 rounded-full text-sm mb-4">انضم كمصنع</button>
            <div className="flex items-center justify-center space-x-2 rtl:space-x-reverse text-gray-700">
              <Phone className="w-4 h-4 text-amber-600" />
              <span className="font-medium">0100-000-0000</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
