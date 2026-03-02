import React from 'react';
import { Settings, ArrowRight, ShieldCheck } from 'lucide-react';

interface OriginalPartsBannerProps {
  backgroundImage?: string;
  vehicleName?: string;
}

const OriginalPartsBanner: React.FC<OriginalPartsBannerProps> = ({
  backgroundImage = 'https://i.ibb.co/1G4w6v9C/ex5-lateral-low.jpg',
  vehicleName = 'Geely EX5'
}) => {
  const handleCustomQuote = () => {
    const phoneNumber = "50660963373";
    const message = `Hola, estoy interesado en cotizar un repuesto original específico para mi ${vehicleName} que no encontré en el catálogo. ¿Podrían ayudarme?`;
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <div className="w-full mb-12">
      <div className="relative overflow-hidden rounded-3xl bg-brand-900 shadow-2xl min-h-[300px] flex items-center">
        {/* Background Image with Overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center z-0 transition-all duration-700"
          style={{ backgroundImage: `url('${backgroundImage}')` }}
        ></div>

        {/* Dark Gradient Overlay for Text Readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-brand-900 via-brand-900/90 to-brand-900/20 z-10"></div>

        {/* Decorative background elements */}
        <div className="absolute top-0 right-0 -mt-20 -mr-20 w-64 h-64 bg-brand-500/10 rounded-full blur-3xl z-10"></div>

        <div className="relative px-8 py-10 md:px-12 md:py-12 flex flex-col md:flex-row items-center justify-between gap-8 z-20 w-full">
          <div className="flex-1 text-center md:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-white text-xs font-bold uppercase tracking-wider mb-4 border border-white/20 backdrop-blur-sm">
              <ShieldCheck size={14} className="text-brand-400" />
              Servicio de Importación Directa
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 drop-shadow-lg">
              ¿Buscas un repuesto <span className="text-brand-400">original</span> específico?
            </h2>
            <p className="text-brand-100/90 text-lg max-w-xl leading-relaxed drop-shadow-md">
              Si no encuentras la pieza exacta que necesitas en nuestro catálogo, podemos cotizarla e importarla directamente para ti. Repuestos originales y accesorios adecuados perfectamente a tu vehiculo
            </p>
          </div>

          <div className="flex-shrink-0">
            <button
              onClick={handleCustomQuote}
              className="group bg-white text-brand-900 hover:bg-brand-50 px-8 py-4 rounded-2xl font-bold text-lg transition-all flex items-center gap-3 shadow-xl active:scale-95"
            >
              <Settings className="text-brand-600 group-hover:rotate-90 transition-transform duration-500" />
              Cotizar Pieza Genuina
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OriginalPartsBanner;