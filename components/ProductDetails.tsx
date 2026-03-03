import React, { useState, useEffect } from 'react';
import { X, Check, Plus, Minus, ChevronLeft, ChevronRight, Truck, Info } from 'lucide-react';
import { Product } from '../types';

interface ProductDetailsProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
  vehicleName?: string;
}

const ProductDetails: React.FC<ProductDetailsProps> = ({ product, isOpen, onClose, vehicleName = 'EX5' }) => {
  const [selectedColorIndex, setSelectedColorIndex] = useState(0);
  const [currentImage, setCurrentImage] = useState('');
  const [quantity, setQuantity] = useState(1);

  // Update internal state when product changes
  useEffect(() => {
    if (product) {
      setSelectedColorIndex(0);
      setCurrentImage(product.colors[0]?.imageUrl || product.images[0]);
      setQuantity(1);
    }
  }, [product]);

  // Helper to explicitly update color AND image together (used by color circle clicks)
  const handleColorCircleClick = (idx: number) => {
    setSelectedColorIndex(idx);
    if (product && product.colors[idx]?.imageUrl) {
      setCurrentImage(product.colors[idx].imageUrl!);
    }
  };


  if (!isOpen || !product) return null;

  const selectedColor = product.colors[selectedColorIndex] || product.colors[0];
  // Determine price based on selected variant
  const displayPrice = selectedColor?.price || product.price;

  // Combine main images and extra images for navigation purposes
  const allImages = [...product.images, ...(product.extraImages || [])];

  const handleImageChange = (img: string) => {
    setCurrentImage(img);
    // Find if this image belongs to a specific color
    const exactColorIndex = product.colors.findIndex(c => c.imageUrl === img);
    if (exactColorIndex !== -1) {
      setSelectedColorIndex(exactColorIndex);
    } else {
      // Try to match based on substrings in the image URL to update the color circle accurately
      const imgLower = img.toLowerCase();
      const matchIndex = product.colors.findIndex(c => {
        const cName = c.name.toLowerCase();
        if ((cName.includes('rosa') || cName.includes('rosado')) && imgLower.includes('rosa')) return true;
        if (cName.includes('negro') && imgLower.includes('negr')) return true;
        if (cName.includes('blanco') && imgLower.includes('blanc')) return true;
        if (cName.includes('crema') && imgLower.includes('crema')) return true;
        if (cName.includes('azul') && imgLower.includes('azul')) return true;
        return imgLower.includes(cName);
      });
      if (matchIndex !== -1) {
        setSelectedColorIndex(matchIndex);
      }
    }
  };

  const handlePrevImage = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    const currentIndex = allImages.indexOf(currentImage);
    // If current image is not in gallery (shouldn't happen usually), default to 0
    const idx = currentIndex === -1 ? 0 : currentIndex;
    const prevIndex = (idx - 1 + allImages.length) % allImages.length;
    handleImageChange(allImages[prevIndex]);
  };

  const handleNextImage = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    const currentIndex = allImages.indexOf(currentImage);
    const idx = currentIndex === -1 ? 0 : currentIndex;
    const nextIndex = (idx + 1) % allImages.length;
    handleImageChange(allImages[nextIndex]);
  };

  const handleWhatsAppClick = () => {
    const phoneNumber = "50660963373";
    let message = "";

    if (product.isSpecialShipping) {
      message = `Hola, estoy interesado en cotizar el siguiente producto con envío especial:\n\n*Producto:* ${product.name}\n*Variante:* ${selectedColor.name}\n*Cantidad:* ${quantity}\n\nPor favor indíquenme el precio final y opciones de envío.`;
    } else {
      message = `Hola, estoy interesado en comprar el siguiente accesorio para ${vehicleName}:\n\n*Producto:* ${product.name}\n*Variante:* ${selectedColor.name}\n*Cantidad:* ${quantity}\n*Precio Unitario:* ₡${displayPrice.toLocaleString()}\n\nQuedo atento a la información de pago y envío.`;
    }

    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-gray-900/75 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      ></div>

      <div className="flex min-h-full items-center justify-center p-4 text-center sm:p-0">
        <div className="relative transform overflow-hidden rounded-2xl bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-4xl">

          <div className="absolute top-4 right-4 z-50">
            <button
              onClick={onClose}
              className="rounded-full bg-white/90 p-2 text-gray-600 hover:text-black hover:bg-white shadow-sm focus:outline-none transition-all"
            >
              <X size={24} />
            </button>
          </div>

          <div className="flex flex-col md:flex-row">
            {/* Gallery Section */}
            <div className="w-full md:w-1/2 bg-gray-100 p-6 md:p-8 flex flex-col gap-4 relative">
              {product.isSpecialShipping && (
                <div className="absolute top-6 left-6 z-20 bg-amber-500 text-white text-xs font-bold px-3 py-1 rounded shadow-md flex items-center gap-1">
                  <Truck size={14} /> ENVÍO ESPECIAL
                </div>
              )}

              <div className="relative aspect-square w-full rounded-2xl overflow-hidden bg-white shadow-sm group">
                <img
                  src={currentImage}
                  alt={product.name}
                  className="h-full w-full object-cover object-center transition-opacity duration-300"
                />

                {/* Coming Soon Banner */}
                {product.isComingSoon && (
                  <div className="absolute inset-0 z-30 flex items-center justify-center bg-black/20 backdrop-blur-[2px] pointer-events-none">
                    <div className="bg-black/80 text-white w-full py-3 transform -rotate-12 text-center text-xl font-black tracking-[0.2em] shadow-2xl border-y-2 border-white/20 uppercase">
                      Próximamente
                    </div>
                  </div>
                )}

                {/* Navigation Arrows */}
                {allImages.length > 1 && (
                  <>
                    <button
                      onClick={handlePrevImage}
                      className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-2 rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-all duration-200 focus:opacity-100 focus:outline-none"
                      aria-label="Previous image"
                    >
                      <ChevronLeft size={24} />
                    </button>
                    <button
                      onClick={handleNextImage}
                      className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-2 rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-all duration-200 focus:opacity-100 focus:outline-none"
                      aria-label="Next image"
                    >
                      <ChevronRight size={24} />
                    </button>
                  </>
                )}
              </div>

              {/* Main Variant Thumbnails */}
              <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide px-1">
                {product.images.map((img, idx) => (
                  <button
                    key={`main-${idx}`}
                    onClick={() => handleImageChange(img)}
                    className={`relative h-20 w-20 flex-shrink-0 rounded-lg overflow-hidden border-2 transition-all duration-200 ${currentImage === img
                      ? 'border-brand-600 ring-2 ring-brand-100 opacity-100 scale-105 shadow-md'
                      : 'border-transparent hover:border-gray-300 opacity-70 hover:opacity-100'
                      }`}
                  >
                    <img src={img} alt={`View ${idx}`} className="h-full w-full object-cover" />
                  </button>
                ))}
              </div>

              {/* Extra Images / Reference Gallery */}
              {product.extraImages && product.extraImages.length > 0 && (
                <div className="mt-2 pt-4 border-t border-gray-200">
                  <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">Galería de Referencia</h4>
                  <div className="grid grid-cols-4 gap-2">
                    {product.extraImages.map((img, idx) => (
                      <button
                        key={`extra-${idx}`}
                        onClick={() => handleImageChange(img)}
                        className={`relative aspect-square rounded-lg overflow-hidden border-2 transition-all duration-200 ${currentImage === img
                          ? 'border-brand-600 ring-2 ring-brand-100 opacity-100 scale-105 shadow-md'
                          : 'border-transparent hover:border-brand-300 opacity-80 hover:opacity-100'
                          }`}
                      >
                        <img src={img} alt="Reference" className="w-full h-full object-cover" />
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Info Section */}
            <div className="w-full md:w-1/2 p-6 md:p-10 flex flex-col">
              <div className="mb-1">
                <span className="inline-flex items-center rounded-md bg-brand-50 px-2 py-1 text-xs font-medium text-brand-700 ring-1 ring-inset ring-brand-700/10">
                  {product.category}
                </span>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mb-6">{product.name}</h2>

              <div className={`text-3xl font-bold mb-6 ${product.isComingSoon ? 'text-gray-400 italic' : product.isSpecialShipping ? 'text-amber-600' : 'text-gray-900'}`}>
                {product.isComingSoon ? 'Próximamente' : product.isSpecialShipping ? 'Cotizar Envío' : `₡${displayPrice.toLocaleString()}`}
              </div>

              {product.isSpecialShipping && (
                <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mb-6 flex gap-3 text-amber-800 text-sm">
                  <Info className="flex-shrink-0" size={20} />
                  <p>Este producto requiere un manejo logístico especial. El precio final y el envío se coordinarán directamente por WhatsApp.</p>
                </div>
              )}

              <div className="prose prose-sm text-gray-500 mb-8">
                <p>{product.description}</p>
                <ul className="mt-4 space-y-2">
                  {product.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-brand-500"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-auto space-y-6">
                {/* Color/Variant Selection */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {selectedColor.name.includes("Lona") || selectedColor.name.includes("Cuero") || selectedColor.name.includes("Carbón") ? "Material seleccionado:" : selectedColor.name.includes("Estribos") || selectedColor.name.includes("Combo") ? "Opción seleccionada:" : "Color seleccionado:"} <span className="text-gray-900 font-bold">{selectedColor?.name}</span>
                  </label>
                  <div className="flex items-center space-x-3 flex-wrap gap-y-2">
                    {product.colors.map((color, idx) => (
                      <button
                        key={color.name}
                        onClick={() => handleColorCircleClick(idx)}
                        className={`relative h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-brand-500 focus:ring-offset-2 transition-transform active:scale-95 border border-black/20 ${!color.available || product.isComingSoon ? 'opacity-40 cursor-not-allowed' : 'cursor-pointer hover:scale-110'
                          } ${selectedColorIndex === idx ? 'ring-2 ring-brand-500 ring-offset-2 scale-110' : ''}`}
                        style={{ backgroundColor: color.hex }}
                        disabled={!color.available || product.isComingSoon}
                        title={color.name}
                      >
                        {selectedColorIndex === idx && (
                          <span className="absolute inset-0 flex items-center justify-center">
                            <Check size={16} className={color.name.toLowerCase().includes('blanco') || color.name.toLowerCase().includes('beige') || color.hex === '#ffffff' ? 'text-black' : 'text-white'} />
                          </span>
                        )}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="border-t border-gray-100 pt-6">
                  <div className="flex items-center gap-4 mb-2">
                    {/* Quantity */}
                    <div className="flex items-center rounded-xl border border-gray-200">
                      <button
                        className={`p-3 transition-colors ${product.isComingSoon ? 'text-gray-300 cursor-not-allowed' : 'hover:text-brand-600'}`}
                        onClick={() => !product.isComingSoon && setQuantity(Math.max(1, quantity - 1))}
                        disabled={product.isComingSoon}
                      >
                        <Minus size={16} />
                      </button>
                      <span className={`w-8 text-center font-medium ${product.isComingSoon ? 'text-gray-400' : ''}`}>{quantity}</span>
                      <button
                        className={`p-3 transition-colors ${product.isComingSoon ? 'text-gray-300 cursor-not-allowed' : 'hover:text-brand-600'}`}
                        onClick={() => !product.isComingSoon && setQuantity(quantity + 1)}
                        disabled={product.isComingSoon}
                      >
                        <Plus size={16} />
                      </button>
                    </div>

                    {/* Primary CTA - WhatsApp */}
                    {!product.isComingSoon ? (
                      <button
                        onClick={handleWhatsAppClick}
                        className={`flex-1 rounded-xl py-3 px-8 font-bold transition-all shadow-lg flex items-center justify-center gap-2 active:scale-95 text-white ${product.isSpecialShipping ? 'bg-amber-500 hover:bg-amber-600 shadow-amber-100' : 'bg-[#25D366] hover:bg-[#128C7E] shadow-green-100'}`}
                      >
                        <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current" xmlns="http://www.w3.org/2000/svg">
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.305-5.235c0-5.42 4.409-9.85 9.82-9.85 2.624 0 5.093 1.021 6.948 2.877 1.855 1.856 2.876 4.326 2.876 6.951 0 5.42-4.409 9.85-9.82 9.85" />
                        </svg>
                        {product.isSpecialShipping ? 'Cotizar por WhatsApp' : 'Pedir por WhatsApp'}
                      </button>
                    ) : (
                      <button
                        disabled
                        className="flex-1 rounded-xl py-3 px-8 font-bold transition-all shadow-sm border border-gray-300 flex items-center justify-center gap-2 text-white bg-gray-400 cursor-not-allowed uppercase tracking-widest"
                      >
                        Próximamente
                      </button>
                    )}
                  </div>

                  <div className="bg-gray-50 rounded-lg p-3 border border-gray-100 mt-4">
                    <p className="text-[11px] text-gray-500 italic leading-snug flex items-start gap-2">
                      <Info size={14} className="text-brand-500 flex-shrink-0" />
                      <span>*Los envíos pueden variar dependiendo del stock disponible y todo producto debe cancelarse 50% por adelantado para confirmar el pedido.</span>
                    </p>
                  </div>

                  <p className="text-center text-[10px] text-gray-400 mt-3">
                    Al hacer clic serás redirigido al chat de WhatsApp.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;