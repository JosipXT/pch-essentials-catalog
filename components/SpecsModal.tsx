import React from 'react';
import { X, Zap, Maximize, Battery, Gauge, Info } from 'lucide-react';

interface SpecsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const SpecsModal: React.FC<SpecsModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto" aria-labelledby="specs-title" role="dialog" aria-modal="true">
      <div 
        className="fixed inset-0 bg-gray-900/80 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      <div className="flex min-h-full items-center justify-center p-4">
        <div className="relative w-full max-w-4xl transform overflow-hidden rounded-2xl bg-white text-left shadow-2xl transition-all">
          
          {/* Header */}
          <div className="bg-brand-900 p-6 flex justify-between items-start">
            <div>
                <h2 className="text-2xl font-bold text-white flex items-center gap-2">
                    <Info className="text-brand-400" />
                    Ficha Técnica EX5
                </h2>
                <p className="text-brand-200 text-sm mt-1">Especificaciones oficiales del fabricante</p>
            </div>
            <button onClick={onClose} className="text-white/70 hover:text-white transition-colors bg-white/10 p-2 rounded-full">
              <X size={24} />
            </button>
          </div>

          <div className="p-6 md:p-8 bg-gray-50 max-h-[80vh] overflow-y-auto">
            
            {/* Grid Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm text-center">
                    <Maximize className="w-6 h-6 text-brand-600 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-gray-900">4.61m</div>
                    <div className="text-xs text-gray-500 uppercase tracking-wide">Largo</div>
                </div>
                <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm text-center">
                    <Battery className="w-6 h-6 text-green-500 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-gray-900">480km</div>
                    <div className="text-xs text-gray-500 uppercase tracking-wide">Autonomía (NEDC)</div>
                </div>
                <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm text-center">
                    <Zap className="w-6 h-6 text-yellow-500 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-gray-900">160kW</div>
                    <div className="text-xs text-gray-500 uppercase tracking-wide">Potencia</div>
                </div>
                <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm text-center">
                    <Gauge className="w-6 h-6 text-red-500 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-gray-900">320Nm</div>
                    <div className="text-xs text-gray-500 uppercase tracking-wide">Torque</div>
                </div>
            </div>

            {/* Detailed Tables */}
            <div className="grid md:grid-cols-2 gap-8">
                
                {/* Dimensions */}
                <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-4 border-b pb-2">Dimensiones y Peso</h3>
                    <ul className="space-y-3 text-sm">
                        <li className="flex justify-between"><span className="text-gray-500">Largo Total</span> <span className="font-medium">4615 mm</span></li>
                        <li className="flex justify-between"><span className="text-gray-500">Ancho Total</span> <span className="font-medium">1901 mm</span></li>
                        <li className="flex justify-between"><span className="text-gray-500">Alto Total</span> <span className="font-medium">1670 mm</span></li>
                        <li className="flex justify-between"><span className="text-gray-500">Distancia entre ejes</span> <span className="font-medium">2750 mm</span></li>
                        <li className="flex justify-between"><span className="text-gray-500">Altura libre al suelo</span> <span className="font-medium">173 mm</span></li>
                        <li className="flex justify-between"><span className="text-gray-500">Peso Neto</span> <span className="font-medium">1715 kg</span></li>
                        <li className="flex justify-between"><span className="text-gray-500">Capacidad pasajeros</span> <span className="font-medium">5</span></li>
                    </ul>
                </div>

                {/* Performance & Battery */}
                <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-4 border-b pb-2">Rendimiento y Batería</h3>
                    <ul className="space-y-3 text-sm">
                        <li className="flex justify-between"><span className="text-gray-500">Tipo de Batería</span> <span className="font-medium">LFP (Fosfato Hierro-Litio)</span></li>
                        <li className="flex justify-between"><span className="text-gray-500">Capacidad Batería</span> <span className="font-medium">60.22 kWh</span></li>
                        <li className="flex justify-between"><span className="text-gray-500">Carga Rápida (DC)</span> <span className="font-medium">30-80% en 28 min (100kW)</span></li>
                        <li className="flex justify-between"><span className="text-gray-500">Carga Lenta (AC)</span> <span className="font-medium">11 kW</span></li>
                        <li className="flex justify-between"><span className="text-gray-500">Aceleración 0-100km/h</span> <span className="font-medium">6.9 segundos</span></li>
                        <li className="flex justify-between"><span className="text-gray-500">Suspensión Delantera</span> <span className="font-medium">McPherson Independiente</span></li>
                    </ul>
                </div>

                {/* Exterior & Wheels */}
                <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-4 border-b pb-2">Exterior y Llantas</h3>
                    <ul className="space-y-3 text-sm">
                        <li className="flex justify-between"><span className="text-gray-500">Faros</span> <span className="font-medium">LED Principales y Diurnas</span></li>
                        <li className="flex justify-between"><span className="text-gray-500">Llantas (GT)</span> <span className="font-medium">225/55 R18</span></li>
                        <li className="flex justify-between"><span className="text-gray-500">Llantas (GT+ Sport)</span> <span className="font-medium">235/50 R19 Goodyear</span></li>
                        <li className="flex justify-between"><span className="text-gray-500">Techo</span> <span className="font-medium">Panorámico + Sunroof</span></li>
                        <li className="flex justify-between"><span className="text-gray-500">Puerta Trasera</span> <span className="font-medium">Eléctrica (GT+)</span></li>
                    </ul>
                </div>

                {/* Interior Tech */}
                <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-4 border-b pb-2">Tecnología Interior</h3>
                    <ul className="space-y-3 text-sm">
                        <li className="flex justify-between"><span className="text-gray-500">Pantalla Central</span> <span className="font-medium">15.4 Pulgadas Táctil</span></li>
                        <li className="flex justify-between"><span className="text-gray-500">Panel Instrumentos</span> <span className="font-medium">10.2 Pulgadas Digital</span></li>
                        <li className="flex justify-between"><span className="text-gray-500">Audio</span> <span className="font-medium">Hasta 16 parlantes</span></li>
                        <li className="flex justify-between"><span className="text-gray-500">Cargador</span> <span className="font-medium">Inalámbrico</span></li>
                        <li className="flex justify-between"><span className="text-gray-500">Cámaras</span> <span className="font-medium">Visualización 360 grados</span></li>
                    </ul>
                </div>

            </div>
          </div>
          
          <div className="p-4 bg-gray-100 border-t border-gray-200 text-center text-xs text-gray-500">
            * Información basada en la ficha técnica del fabricante. Puede variar según versión.
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpecsModal;