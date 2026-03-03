import React from 'react';
import { X, Trash2, ShoppingBag } from 'lucide-react';
import { CartItem } from '../types';

interface CartProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onRemoveItem: (id: string, color: string) => void;
  vehicleName?: string;
}

const Cart: React.FC<CartProps> = ({ isOpen, onClose, items, onRemoveItem, vehicleName = 'Geely EX5' }) => {
  // Only sum items that are NOT special shipping
  const total = items.reduce((sum, item) => {
    if (item.isSpecialShipping) return sum;
    return sum + (item.price * item.quantity);
  }, 0);

  const hasSpecialShippingItems = items.some(item => item.isSpecialShipping);

  const handleCheckout = () => {
    if (items.length === 0) return;

    const phoneNumber = "50660963373";
    let message = `Hola, estoy interesado en los siguientes accesorios para el ${vehicleName}:\n\n`;

    items.forEach(item => {
      const priceDisplay = item.isSpecialShipping ? "Cotizar Envío" : `₡${item.price.toLocaleString()}`;
      message += `• ${item.quantity}x ${item.name} (${item.selectedColor}) - ${priceDisplay}\n`;
    });

    if (total > 0) {
      message += `\n*SUBTOTAL (Productos estándar):* ₡${total.toLocaleString()}\n`;
    }

    if (hasSpecialShippingItems) {
      message += `\n*NOTA:* Incluye productos que requieren cotización de envío especial.\n`;
    }

    message += `\nQuedo atento para coordinar precios finales, pago y envío.`;

    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-50 transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={onClose}
      />

      {/* Slide-over panel */}
      <div className={`fixed inset-y-0 right-0 z-50 w-full max-w-md bg-white shadow-2xl transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex flex-col h-full">

          {/* Header */}
          <div className="px-6 py-4 border-b border-gray-100 flex items-center justify-between">
            <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2">
              <ShoppingBag className="text-brand-600" />
              Tu Carrito
            </h2>
            <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full transition-colors text-gray-500">
              <X size={24} />
            </button>
          </div>

          {/* Items */}
          <div className="flex-1 overflow-y-auto p-6 space-y-6">
            {items.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-gray-400 space-y-4">
                <ShoppingBag size={64} className="opacity-20" />
                <p>Tu carrito está vacío</p>
                <button onClick={onClose} className="text-brand-600 font-medium hover:underline">
                  Ver productos
                </button>
              </div>
            ) : (
              items.map((item) => (
                <div key={`${item.id}-${item.selectedColor}`} className="flex gap-4 animate-in slide-in-from-right-8 duration-300">
                  <div className="w-20 h-20 bg-gray-100 rounded-lg overflow-hidden flex-shrink-0 border border-gray-200 relative">
                    <img src={item.images[0]} alt={item.name} className="w-full h-full object-cover" />
                    {item.isSpecialShipping && (
                      <div className="absolute bottom-0 left-0 right-0 bg-amber-500 text-white text-[9px] text-center font-bold py-0.5">
                        ESPECIAL
                      </div>
                    )}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-medium text-gray-900 leading-tight mb-1">{item.name}</h3>
                    <p className="text-xs text-gray-500 uppercase tracking-wide">Color: {item.selectedColor}</p>
                    <div className="flex justify-between items-center mt-2">
                      <span className={`font-bold ${item.isSpecialShipping ? 'text-amber-600 text-sm' : 'text-brand-600'}`}>
                        {item.isSpecialShipping ? 'Cotizar Envío' : `₡${item.price.toLocaleString()}`}
                      </span>
                      <div className="flex items-center gap-3">
                        <span className="text-sm text-gray-600 bg-gray-100 px-2 py-0.5 rounded text-xs">x{item.quantity}</span>
                        <button
                          onClick={() => onRemoveItem(item.id, item.selectedColor)}
                          className="text-gray-400 hover:text-red-500 transition-colors p-1"
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer */}
          {items.length > 0 && (
            <div className="p-6 bg-gray-50 border-t border-gray-100 space-y-4">
              <div className="flex justify-between items-center text-lg font-bold text-gray-900">
                <span>Total Estimado</span>
                <span>
                  {hasSpecialShippingItems && total > 0 && "Desde "}
                  ₡{total.toLocaleString()}
                  {hasSpecialShippingItems && <span className="text-xs font-normal text-amber-600 block text-right">+ Cotización Envío</span>}
                </span>
              </div>
              <button
                onClick={handleCheckout}
                className="w-full bg-brand-600 text-white py-4 rounded-xl font-bold hover:bg-brand-700 transition-colors shadow-lg shadow-brand-200 flex items-center justify-center gap-2"
              >
                <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.305-5.235c0-5.42 4.409-9.85 9.82-9.85 2.624 0 5.093 1.021 6.948 2.877 1.855 1.856 2.876 4.326 2.876 6.951 0 5.42-4.409 9.85-9.82 9.85" />
                </svg>
                Proceder al WhatsApp
              </button>
              <p className="text-center text-xs text-gray-400">
                Coordinaremos el pago y envío directamente por chat.
              </p>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Cart;