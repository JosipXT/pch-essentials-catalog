import React, { useState, useMemo } from 'react';
import LandingPage from './components/LandingPage';
import Header from './components/Header';
import ProductCard from './components/ProductCard';
import ProductDetails from './components/ProductDetails';
import OriginalPartsBanner from './components/OriginalPartsBanner';
import { MOCK_PRODUCTS, CATEGORIES } from './constants';
import { GEOME_PRODUCTS } from './geomeConstants';
import { Product } from './types';
import geomeVideo from './assets/Geome main video.mp4';
import geomePortada from './assets/geome_portada.jpeg';
import geomeBase from './assets/geome_base.jpeg';
import { Filter, Search, SlidersHorizontal, ChevronDown, Check, Info, ArrowLeft, Instagram, Facebook } from 'lucide-react';

const App: React.FC = () => {
  // Router state
  const [currentView, setCurrentView] = useState<'landing' | 'ex5' | 'geometry'>('landing');

  // Product Details Modal State
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);

  // Filter State
  const [showFilters, setShowFilters] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("Todos");
  const [searchQuery, setSearchQuery] = useState("");
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 200000]);
  const [selectedColors, setSelectedColors] = useState<string[]>([]);

  const activeProducts = useMemo(() => {
    return currentView === 'geometry' ? GEOME_PRODUCTS : MOCK_PRODUCTS;
  }, [currentView]);

  // Derived Data for Filters
  const allColors = useMemo(() => {
    const colors = new Set<string>();
    activeProducts.forEach(p => p.colors.forEach(c => colors.add(c.name)));
    return Array.from(colors);
  }, [activeProducts]);

  const handleOpenDetails = (product: Product) => {
    setSelectedProduct(product);
    setIsDetailsOpen(true);
  };

  const toggleColorFilter = (color: string) => {
    setSelectedColors(prev =>
      prev.includes(color) ? prev.filter(c => c !== color) : [...prev, color]
    );
  };

  const handleSelectVehicle = (vehicle: string) => {
    if (vehicle === 'ex5') {
      setCurrentView('ex5');
    } else if (vehicle === 'geometry') {
      setCurrentView('geometry');
    }
    // Reset filters on vehicle change
    setSelectedCategory("Todos");
    setSearchQuery("");
    setPriceRange([0, 200000]);
    setSelectedColors([]);
    setShowFilters(false);
  };

  const handleBackToLanding = () => {
    setCurrentView('landing');
  };

  const filteredProducts = useMemo(() => {
    return activeProducts.filter(product => {
      const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = selectedCategory === "Todos" || product.category === selectedCategory;
      const matchesPrice = product.price >= priceRange[0] && product.price <= priceRange[1];
      const matchesColor = selectedColors.length === 0 ||
        product.colors.some(c => selectedColors.includes(c.name));

      return matchesSearch && matchesCategory && matchesPrice && matchesColor;
    });
  }, [selectedCategory, searchQuery, priceRange, selectedColors]);

  // Landing Page
  if (currentView === 'landing') {
    return <LandingPage onSelectVehicle={handleSelectVehicle} />;
  }

  // EX5 & Geometry Catalog View
  const heroData = {
    ex5: {
      title: "EX5",
      bgImage: "https://i.ibb.co/rGckLTWY/EX5-Sport.png",
      baseImage: 'https://i.ibb.co/1G4w6v9C/ex5-lateral-low.jpg'
    },
    geometry: {
      title: "Geome",
      bgImage: geomePortada,
      baseImage: geomeBase,
    }
  };

  const currentHero = currentView === 'geometry' ? heroData.geometry : heroData.ex5;
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col font-sans">
      <Header
        onSearch={setSearchQuery}
        onBack={handleBackToLanding}
      />

      {/* Hero Section */}
      <div className="bg-gray-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url('${currentHero.bgImage}')` }}></div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 leading-tight drop-shadow-md">
              Personaliza tu <span className="text-brand-500">{currentHero.title}</span> al Máximo
            </h1>
            <p className="text-xl text-gray-100 mb-8 leading-relaxed drop-shadow-sm">
              Descubre accesorios exclusivos importados para mejorar el confort y estilo de tu vehículo eléctrico.
            </p>
            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => {
                  const element = document.getElementById('catalog');
                  element?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="bg-white text-brand-900 px-8 py-3.5 rounded-full font-bold hover:bg-brand-50 transition-colors shadow-lg shadow-white/10"
              >
                Ver Catálogo
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main id="catalog" className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 w-full">

        <OriginalPartsBanner
          backgroundImage={currentHero.baseImage}
          vehicleName={`Geely ${currentHero.title}`}
        />

        {/* Top Filter Bar */}
        <div className="flex flex-col gap-6 mb-10">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2 overflow-x-auto pb-2 sm:pb-0 w-full sm:w-auto no-scrollbar order-2 sm:order-1">
              <div className="bg-white p-1 rounded-lg border border-gray-200 shadow-sm flex items-center">
                {CATEGORIES.map(cat => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-4 py-2 rounded-md text-sm font-medium transition-all whitespace-nowrap ${selectedCategory === cat
                      ? 'bg-brand-100 text-brand-700 shadow-sm'
                      : 'text-gray-500 hover:text-gray-900 hover:bg-gray-50'
                      }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-4 w-full sm:w-auto justify-between sm:justify-end order-1 sm:order-2">
              <div className="text-sm text-gray-500">
                {filteredProducts.length} resultados
              </div>
              <button
                onClick={() => setShowFilters(!showFilters)}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg border text-sm font-medium transition-colors ${showFilters ? 'bg-brand-50 border-brand-200 text-brand-700' : 'bg-white border-gray-200 text-gray-700 hover:bg-gray-50'
                  }`}
              >
                <SlidersHorizontal size={16} />
                Filtros
                <ChevronDown size={16} className={`transform transition-transform ${showFilters ? 'rotate-180' : ''}`} />
              </button>
            </div>
          </div>

          {showFilters && (
            <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm grid grid-cols-1 md:grid-cols-2 gap-8 animate-in slide-in-from-top-4 fade-in duration-200">
              <div>
                <h3 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                  <Filter size={16} /> Rango de Precio
                </h3>
                <div className="px-2">
                  <input
                    type="range"
                    min="0"
                    max="200000"
                    step="1000"
                    value={priceRange[1]}
                    onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-brand-600"
                  />
                  <div className="flex justify-between text-sm text-gray-500 mt-2 font-medium">
                    <span>₡{priceRange[0]}</span>
                    <span>Hasta ₡{priceRange[1].toLocaleString()}</span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-4">Filtrar por Color</h3>
                <div className="flex flex-wrap gap-2">
                  {allColors.map(color => (
                    <button
                      key={color}
                      onClick={() => toggleColorFilter(color)}
                      className={`px-3 py-1.5 rounded-full text-xs font-medium border transition-all flex items-center gap-1.5 ${selectedColors.includes(color)
                        ? 'bg-brand-600 text-white border-brand-600 shadow-sm'
                        : 'bg-white text-gray-600 border-gray-200 hover:border-gray-300'
                        }`}
                    >
                      {selectedColors.includes(color) && <Check size={12} />}
                      {color}
                    </button>
                  ))}
                  {selectedColors.length > 0 && (
                    <button
                      onClick={() => setSelectedColors([])}
                      className="px-3 py-1.5 text-xs font-medium text-gray-400 hover:text-gray-600 underline"
                    >
                      Limpiar
                    </button>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Product Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map(product => (
              <ProductCard
                key={product.id}
                product={product}
                onOpenDetails={handleOpenDetails}
                vehicleName={currentHero.title}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <div className="bg-gray-100 rounded-full h-20 w-20 flex items-center justify-center mx-auto mb-4">
              <Search className="text-gray-400" size={32} />
            </div>
            <h3 className="text-xl font-bold text-gray-900">No se encontraron productos</h3>
            <p className="text-gray-500 mt-2">Intenta cambiar los filtros o tu búsqueda.</p>
            <button
              onClick={() => {
                setSelectedCategory("Todos");
                setSearchQuery("");
                setPriceRange([0, 200000]);
                setSelectedColors([]);
              }}
              className="mt-6 text-brand-600 font-medium hover:underline"
            >
              Limpiar todos los filtros
            </button>
          </div>
        )}
      </main>

      {/* Footer Disclaimer Banner */}
      <div className="bg-gray-100 border-t border-gray-200 py-6">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-start gap-3 text-gray-600 bg-white/50 p-4 rounded-xl border border-gray-200">
            <Info className="text-brand-600 flex-shrink-0 mt-0.5" size={20} />
            <p className="text-sm leading-relaxed">
              <span className="font-bold">Aviso Importante:</span> Los envíos pueden variar dependiendo del stock disponible y el tiempo de importación de las piezas. Todo producto debe cancelarse <span className="text-brand-700 font-bold">50% por adelantado</span> para confirmar y procesar el pedido.
            </p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-gray-500 font-medium">
            2026 PCH ESSENTIALS ACCESSORIES.
          </p>
          <p className="text-gray-400 text-sm mt-1">
            Todo lo que necesitas para equipar y proteger tu Geely {currentHero.title}.
          </p>
          <div className="flex justify-center gap-6 mt-6">
            <a
              href="https://www.instagram.com/pch_essentials?igsh=cXZyNTJ6cmlzeWJq&utm_source=qr"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-brand-600 transition-colors"
            >
              <Instagram size={24} />
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=61588202117491&mibextid=wwXIfr&rdid=MsCL0eFOk5DirKwH&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1AS1XqhNnK%2F%3Fmibextid%3DwwXIfr%26ref%3D1#"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-brand-600 transition-colors"
            >
              <Facebook size={24} />
            </a>
          </div>
        </div>
      </footer>

      <ProductDetails
        key={selectedProduct?.id || 'modal'}
        product={selectedProduct}
        isOpen={isDetailsOpen}
        onClose={() => setIsDetailsOpen(false)}
        vehicleName={currentHero.title}
      />

    </div>
  );
};

export default App;