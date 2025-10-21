
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import type { DressDesign } from '../types';

interface DressCardProps {
  dress: DressDesign;
}

export const DressCard: React.FC<DressCardProps> = ({ dress }) => {
  const navigate = useNavigate();
  const [selectedColor, setSelectedColor] = useState<string>(dress.availableColors[0] || '#ffffff');

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 group flex flex-col">
      <div className="relative">
        <div className={`w-full h-80 bg-gray-100 flex items-center justify-center`}>
           <div className={`w-full h-full bg-[${selectedColor}]`}>
             <img src={dress.baseImage} alt={dress.name} className="w-full h-full object-cover mix-blend-multiply opacity-80 group-hover:opacity-100 transition-opacity" />
           </div>
        </div>
        <div className="absolute top-4 right-4 bg-white/80 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-semibold text-gray-900">من {dress.minQuantity} قطعة</div>
      </div>
      <div className="p-5 flex-grow flex flex-col">
        <h3 className="font-bold text-lg text-gray-900 mb-2 truncate">{dress.name}</h3>
        <p className="text-gray-600 text-sm mb-4">{dress.factory}</p>
        <div className="mb-4 mt-auto">
          <p className="text-sm text-gray-600 mb-2">الألوان المتاحة:</p>
          <div className="flex flex-wrap items-center gap-2">
            {dress.availableColors.slice(0, 5).map((color) => (
              <button 
                key={color} 
                onClick={() => setSelectedColor(color)} 
                className={`w-7 h-7 rounded-full border-2 transition-transform transform hover:scale-110 ${selectedColor === color ? 'border-gray-900 scale-110' : 'border-gray-300'} bg-[${color}]`}
                aria-label={`Select color ${color}`}
              />
            ))}
            {dress.availableColors.length > 5 && <span className="text-sm text-gray-500 self-center">+{dress.availableColors.length - 5}</span>}
          </div>
        </div>

        <button onClick={() => { navigate(`/dresses/${dress.id}`, { state: { dress, color: selectedColor } }); }} className="w-full mt-4 bg-amber-500 text-black py-2.5 rounded-lg hover:bg-amber-600 transition-colors font-semibold">
          عرض التفاصيل
        </button>
      </div>
    </div>
  );
};
