
import React, { useState } from 'react';
import { useNavigate, useLocation, useParams } from 'react-router-dom';
import { dressDesigns } from '../constants';
import { ChevronLeft, CheckCircle } from '../components/icons';
import { formatCurrency } from '../utils/helpers';
import type { DressDesign } from '../types';

export const DressDetailPage: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { id } = useParams<{ id: string }>();

  const stateDress: DressDesign | null = location.state?.dress || null;
  const stateColor: string | null = location.state?.color || null;

  const dress = stateDress || dressDesigns.find(d => d.id === Number(id));

  if (!dress) {
    return (
      <div className="py-32 text-center bg-gray-50">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">عذراً!</h2>
        <p className="text-gray-700">التصميم المطلوب غير موجود.</p>
        <button onClick={() => navigate('/dresses')} className="mt-6 bg-amber-500 text-black px-6 py-2 rounded-lg font-semibold hover:bg-amber-600 transition-colors">
          العودة إلى كل الفساتين
        </button>
      </div>
    );
  }

  const [selectedColor, setSelectedColor] = useState<string>(stateColor || dress.availableColors[0] || '#ffffff');
  const [quantity, setQuantity] = useState<number>(dress.minQuantity);
  const commissionPerPiece = 150;

  const totalProductPrice = quantity * dress.pricePerPiece;
  const totalCommission = quantity * commissionPerPiece;
  const grandTotal = totalProductPrice + totalCommission;
  
  const quantityOptions = [100, 200, 300, 500, 1000, 2000, 3000, 5000].filter(q => q >= dress.minQuantity && q <= dress.maxQuantity);
  if (!quantityOptions.includes(dress.minQuantity)) {
    quantityOptions.unshift(dress.minQuantity);
  }
  
  return (
    <div className="bg-gray-50 py-12 md:py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <button onClick={() => navigate(-1)} className="mb-8 text-amber-600 hover:text-amber-800 flex items-center font-semibold">
          <ChevronLeft className="w-5 h-5 mr-1" />
          <span>رجوع</span>
        </button>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Image and details column */}
          <div className="lg:col-span-3 bg-white rounded-lg shadow-lg p-4 md:p-6">
            <div className={`w-full aspect-[3/4] rounded-lg mb-6 flex items-center justify-center bg-[${selectedColor}]`}>
                <img src={dress.baseImage} alt={dress.name} className="w-full h-full object-cover mix-blend-multiply rounded-lg" />
            </div>
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">اختر اللون:</h3>
              <div className="flex flex-wrap gap-3">
                {dress.availableColors.map((c) => (
                  <button key={c} onClick={() => setSelectedColor(c)} className={`w-10 h-10 rounded-full border-2 transition-all duration-200 ${selectedColor === c ? 'border-gray-900 scale-110 ring-2 ring-offset-2 ring-amber-500' : 'border-gray-300'} bg-[${c}]`} />
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">وصف التصميم:</h3>
              <p className="text-gray-700 leading-relaxed">{dress.description}</p>
            </div>
          </div>

          {/* Order column */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 sticky top-24">
              <h1 className="text-3xl font-bold text-gray-900 mb-2">{dress.name}</h1>
              <p className="text-gray-500 text-md mb-6">من {dress.factory}</p>

              <div className="space-y-6">
                <div>
                  <label htmlFor="quantity" className="block text-sm font-medium text-gray-700 mb-2">الكمية المطلوبة</label>
                  <select id="quantity" value={quantity} onChange={(e) => setQuantity(Number(e.target.value))} className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent bg-white">
                    {quantityOptions.map(q => <option key={q} value={q}>{q} قطعة</option>)}
                  </select>
                  <p className="text-sm text-gray-500 mt-1">الحد الأدنى: {dress.minQuantity} قطعة</p>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 space-y-2">
                  <div className="flex justify-between items-center"><span className="text-gray-700">سعر القطعة:</span><span className="font-semibold">{formatCurrency(dress.pricePerPiece)}</span></div>
                  <div className="flex justify-between items-center"><span className="text-gray-700">إجمالي المنتج:</span><span className="font-semibold">{formatCurrency(totalProductPrice)}</span></div>
                  <div className="flex justify-between items-center"><span className="text-gray-700">عمولة الموقع:</span><span className="font-semibold">{formatCurrency(totalCommission)}</span></div>
                  <div className="flex justify-between items-center pt-3 mt-2 border-t border-gray-200"><span className="text-lg font-bold text-gray-900">الإجمالي النهائي:</span><span className="text-xl font-bold text-amber-600">{formatCurrency(grandTotal)}</span></div>
                </div>

                <button onClick={() => alert('تم إرسال الطلب بنجاح (محاكاة). سيتم التواصل معك قريباً.')} className="w-full bg-black text-white py-3 rounded-lg hover:bg-gray-800 transition-colors font-semibold text-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black">إرسال طلب التصنيع</button>

                <div className="bg-amber-50 p-4 rounded-lg border border-amber-200">
                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-amber-600 mr-2 shrink-0 mt-0.5" />
                    <p className="text-amber-800 text-sm">سيتم مراجعة طلبك من قبل الإدارة قبل إرساله للمصنع لضمان الجودة.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
