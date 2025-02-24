
import React from "react";
import { Menu, X } from "lucide-react";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <a href="/" className="flex items-center gap-2">
              <img 
                src="/lovable-uploads/617718f3-4ea5-4681-ae22-5b6143430b90.png" 
                alt="2C Motivation Logo" 
                className="h-10 w-auto"
              />
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="/citations" className="nav-link">
              Citations
            </a>
            <a href="/articles" className="nav-link">
              Articles
            </a>
            <a href="/videos" className="nav-link">
              Vidéos
            </a>
            <a href="/a-propos" className="nav-link">
              À Propos
            </a>
            <a href="/recherche" className="nav-link">
              Recherche
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-b">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="/citations" className="block px-3 py-2 rounded-md hover:bg-gray-50">
              Citations
            </a>
            <a href="/articles" className="block px-3 py-2 rounded-md hover:bg-gray-50">
              Articles
            </a>
            <a href="/videos" className="block px-3 py-2 rounded-md hover:bg-gray-50">
              Vidéos
            </a>
            <a href="/a-propos" className="block px-3 py-2 rounded-md hover:bg-gray-50">
              À Propos
            </a>
            <a href="/recherche" className="block px-3 py-2 rounded-md hover:bg-gray-50">
              Recherche
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};
