import React, { useState } from 'react';
import { Product } from '../types';
import { Check, Eye, Truck, Info } from 'lucide-react';

interface ProductCardProps {
  product: Product;
  onOpenDetails: (product: Product) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onOpenDetails }) => {
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);

  // Use the color specific image if available, otherwise fallback to the first gallery image
  const displayImage = selectedColor.imageUrl || product.images[0];

  // Use specific variant price if available, otherwise base product price
  const displayPrice = selectedColor.price || product.price;

  const handleWhatsAppClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    const phoneNumber = "50660963373";

    let actionText = "comprar";
    let priceText = `₡${displayPrice.toLocaleString()}`;

    if (product.isSpecialShipping) {
      actionText = "cotizar el envío especial para";
      priceText = "Cotizar";
    }

    const message = `Hola, estoy interesado en ${actionText} el accesorio para EX5: ${product.name} (Variante: ${selectedColor.name}) - Precio: ${priceText}`;
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <div className="group bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full relative">

      {/* Special Shipping Badge */}
      {product.isSpecialShipping && (
        <div className="absolute top-0 right-0 z-20">
          <div className="bg-amber-500 text-white text-[10px] font-bold px-3 py-1 rounded-bl-lg shadow-sm flex items-center gap-1">
            <Truck size={12} />
            ENVÍO ESPECIAL
          </div>
        </div>
      )}

      {/* Image Container */}
      <div
        className="relative aspect-square overflow-hidden bg-gray-100 cursor-pointer"
        onClick={() => onOpenDetails(product)}
      >
        <img
          src={displayImage}
          alt={product.name}
          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-md text-xs font-bold text-gray-900 shadow-sm">
          {product.category}
        </div>

        {/* Coming Soon Banner */}
        {product.isComingSoon && (
          <div className="absolute inset-0 z-20 flex items-center justify-center bg-black/20 backdrop-blur-[2px] pointer-events-none">
            <div className="bg-black/80 text-white w-full py-3 transform -rotate-12 text-center text-xl font-black tracking-[0.2em] shadow-2xl border-y-2 border-white/20 uppercase">
              Próximamente
            </div>
          </div>
        )}

        {/* Quick View Button Overlay */}
        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-30">
          <button className="bg-white text-gray-900 px-4 py-2 rounded-full font-medium text-sm flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 shadow-lg pointer-events-auto">
            <Eye size={16} /> Ver Detalles
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-2">
          <h3
            className="text-lg font-semibold text-gray-900 line-clamp-2 leading-tight cursor-pointer hover:text-brand-600 transition-colors"
            onClick={() => onOpenDetails(product)}
          >
            {product.name}
          </h3>
          <span className={`text-lg font-bold whitespace-nowrap ${product.isComingSoon ? 'text-gray-400 italic' : product.isSpecialShipping ? 'text-amber-600 text-base' : 'text-brand-600'}`}>
            {product.isComingSoon ? 'Próximamente' : product.isSpecialShipping ? 'Cotizar' : `₡${displayPrice.toLocaleString()}`}
          </span>
        </div>

        <p className="text-sm text-gray-500 line-clamp-2 mb-4">
          {product.description}
        </p>

        <div className="mt-auto space-y-4">
          {/* Color Selector */}
          <div>
            <div className="flex justify-between items-baseline mb-1.5">
              <span className="text-xs text-gray-400 font-medium uppercase tracking-wider">
                {selectedColor.name.includes("Lona") || selectedColor.name.includes("Cuero") || selectedColor.name.includes("Carbón") ? "Material" : selectedColor.name.includes("Estribos") || selectedColor.name.includes("Combo") ? "Opción" : "Color"}: <span className="text-gray-700">{selectedColor.name}</span>
              </span>
              {selectedColor.price && (
                <span className="text-[10px] font-bold text-brand-600 bg-brand-50 px-1.5 py-0.5 rounded">
                  ₡{selectedColor.price.toLocaleString()}
                </span>
              )}
            </div>

            <div className="flex gap-2 flex-wrap">
              {product.colors.map((color) => (
                <button
                  key={color.name}
                  onClick={() => setSelectedColor(color)}
                  disabled={!color.available}
                  className={`w-8 h-8 rounded-full flex items-center justify-center border-2 transition-all ${selectedColor.name === color.name
                    ? 'border-brand-500 scale-110 shadow-sm'
                    : 'border-black/10 hover:border-gray-300'
                    } ${!color.available ? 'opacity-40 cursor-not-allowed relative overflow-hidden' : 'cursor-pointer'}`}
                  style={{ backgroundColor: color.hex }}
                  title={color.name}
                  aria-label={`Select color ${color.name}`}
                >
                  {selectedColor.name === color.name && (
                    <Check size={14} className={color.name.toLowerCase().includes('blanco') || color.name.toLowerCase().includes('beige') || color.hex === '#ffffff' ? 'text-black' : 'text-white'} />
                  )}
                  {!color.available && (
                    <div className="absolute inset-0 bg-gray-500/50" />
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* WhatsApp Button */}
          <div>
            {!product.isComingSoon ? (
              <button
                onClick={handleWhatsAppClick}
                className={`w-full py-3 px-4 rounded-xl flex items-center justify-center gap-2 transition-colors duration-200 active:scale-95 font-medium shadow-sm text-white ${product.isSpecialShipping ? 'bg-amber-500 hover:bg-amber-600' : 'bg-[#25D366] hover:bg-[#128C7E]'}`}
              >
                <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.305-5.235c0-5.42 4.409-9.85 9.82-9.85 2.624 0 5.093 1.021 6.948 2.877 1.855 1.856 2.876 4.326 2.876 6.951 0 5.42-4.409 9.85-9.82 9.85" />
                </svg>
                {product.isSpecialShipping ? 'Cotizar Envío' : 'Comprar por WhatsApp'}
              </button>
            ) : (
              <button
                disabled
                className="w-full py-3 px-4 rounded-xl flex items-center justify-center gap-2 font-bold shadow-sm text-white bg-gray-400 cursor-not-allowed uppercase tracking-widest text-sm border border-gray-300"
              >
                Próximamente
              </button>
            )}
            <p className="mt-3 text-[10px] text-gray-400 italic flex items-start gap-1 leading-tight">
              <Info size={10} className="mt-0.5 flex-shrink-0" />
              *Los envíos pueden variar según stock disponible. Todo producto debe cancelarse 50% por adelantado.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;