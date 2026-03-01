import React from 'react';
import { Search, ArrowLeft, Instagram, Facebook } from 'lucide-react';

interface HeaderProps {
  onSearch: (query: string) => void;
  onBack?: () => void;
}

const Header: React.FC<HeaderProps> = ({ onSearch, onBack }) => {
  return (
    <header className="sticky top-0 z-40 w-full bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Back Button + Logo */}
          <div className="flex items-center gap-3">
            {onBack && (
              <button
                onClick={onBack}
                className="flex items-center gap-1.5 text-gray-500 hover:text-brand-600 transition-colors font-medium text-sm bg-gray-50 hover:bg-brand-50 px-3 py-2 rounded-lg border border-gray-200 hover:border-brand-200"
              >
                <ArrowLeft size={16} />
                <span className="hidden sm:inline">Modelos</span>
              </button>
            )}
            <img
              src="https://i.ibb.co/gZ6ZP0hz/PHC-logo-largo.png"
              alt="PHC ESSENTIALS ACCESSORIES"
              className="h-12 w-auto object-contain"
            />
          </div>

          {/* Search Bar - Desktop */}
          <div className="hidden md:flex flex-1 max-w-md mx-8">
            <div className="relative w-full">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                className="block w-full pl-10 pr-3 py-2 border border-gray-200 rounded-full leading-5 bg-gray-50 placeholder-gray-500 focus:outline-none focus:bg-white focus:ring-2 focus:ring-brand-500 focus:border-brand-500 sm:text-sm transition duration-150 ease-in-out"
                placeholder="Buscar accesorios..."
                onChange={(e) => onSearch(e.target.value)}
              />
            </div>
          </div>

          {/* Social Icons - Desktop */}
          <div className="hidden sm:flex items-center gap-4 ml-4">
            <a
              href="https://www.instagram.com/pch_essentials?igsh=cXZyNTJ6cmlzeWJq&utm_source=qr"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-brand-600 transition-all hover:scale-110 active:scale-95"
              title="Instagram"
            >
              <Instagram size={20} />
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=61588202117491&mibextid=wwXIfr&rdid=MsCL0eFOk5DirKwH&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1AS1XqhNnK%2F%3Fmibextid%3DwwXIfr%26ref%3D1#"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-brand-600 transition-all hover:scale-110 active:scale-95"
              title="Facebook"
            >
              <Facebook size={20} />
            </a>
          </div>
        </div>

        {/* Mobile Search & Social */}
        <div className="md:hidden py-3 border-t border-gray-100 flex items-center gap-4">
          <div className="relative flex-1">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-4 w-4 text-gray-400" />
            </div>
            <input
              type="text"
              className="block w-full pl-9 pr-3 py-1.5 border border-gray-200 rounded-lg leading-5 bg-gray-50 placeholder-gray-500 focus:outline-none focus:bg-white focus:ring-2 focus:ring-brand-500 focus:border-brand-500 text-xs"
              placeholder="Buscar accesorios..."
              onChange={(e) => onSearch(e.target.value)}
            />
          </div>
          <div className="flex items-center gap-3 pr-1">
            <a
              href="https://www.instagram.com/pch_essentials?igsh=cXZyNTJ6cmlzeWJq&utm_source=qr"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-brand-600"
            >
              <Instagram size={18} />
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=61588202117491&mibextid=wwXIfr&rdid=MsCL0eFOk5DirKwH&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1AS1XqhNnK%2F%3Fmibextid%3DwwXIfr%26ref%3D1#"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-brand-600"
            >
              <Facebook size={18} />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;