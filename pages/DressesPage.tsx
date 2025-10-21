
import React from 'react';
import { dressDesigns } from '../constants';
import { DressCard } from '../components/DressCard';

export const DressesPage: React.FC = () => {
  return (
    <div className="bg-gray-50 py-16 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">كتالوج الفساتين</h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">اختر من بين أفضل التصاميم المتاحة للتصنيع بالجملة، بكميات تبدأ من 100 قطعة.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {dressDesigns.map((dress) => <DressCard key={dress.id} dress={dress} />)}
        </div>
      </div>
    </div>
  );
};
