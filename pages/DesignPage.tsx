
import React, { useState } from 'react';
import { Upload, CheckCircle } from '../components/icons';

export const DesignPage: React.FC = () => {
  const [selectedFabric, setSelectedFabric] = useState('قطن 100%');
  const [sizes, setSizes] = useState({ S: true, M: true, L: true, XL: false, XXL: false });
  const [notes, setNotes] = useState('');
  const [fileName, setFileName] = useState<string | null>(null);
  const [quantity, setQuantity] = useState('100 - 500 قطعة');

  const toggleSize = (size: keyof typeof sizes) => {
    setSizes(prev => ({ ...prev, [size]: !prev[size] }));
  };
  
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFileName(e.target.files[0].name);
    } else {
      setFileName(null);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const selectedSizes = Object.keys(sizes).filter(k => sizes[k as keyof typeof sizes]);
    alert(`تم استلام طلب التصميم:\nالقماش: ${selectedFabric}\nالكمية: ${quantity}\nالمقاسات: ${selectedSizes.join(', ')}\nملاحظات: ${notes}\nملف: ${fileName || 'لا يوجد'}`);
  };

  return (
    <div className="bg-gray-50 py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">اطلب تصميمك الخاص</h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">لديك فكرة؟ أرسل لنا التفاصيل وسنتولى مهمة تحويلها إلى واقع ملموس مع أفضل المصانع.</p>
        </div>

        <div className="bg-white rounded-lg shadow-xl p-8">
          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">الكمية المطلوبة</label>
                <select value={quantity} onChange={e => setQuantity(e.target.value)} className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent bg-white">
                  <option>100 - 500 قطعة</option>
                  <option>501 - 1000 قطعة</option>
                  <option>1001 - 2000 قطعة</option>
                  <option>2001 - 5000 قطعة</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">نوع القماش</label>
                <select value={selectedFabric} onChange={(e) => setSelectedFabric(e.target.value)} className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent bg-white">
                  <option>قطن 100%</option>
                  <option>قطن مخلوط (مع بوليستر)</option>
                  <option>بوليستر 100%</option>
                  <option>جينز</option>
                  <option>كتان</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">المقاسات المطلوبة</label>
              <div className="flex flex-wrap gap-3">
                {Object.keys(sizes).map((size) => (
                  <label key={size} className={`flex items-center px-4 py-2 border rounded-lg cursor-pointer transition-colors ${sizes[size as keyof typeof sizes] ? 'bg-amber-100 border-amber-500 text-amber-900' : 'bg-white border-gray-300'}`}>
                    <input type="checkbox" checked={sizes[size as keyof typeof sizes]} onChange={() => toggleSize(size as keyof typeof sizes)} className="h-4 w-4 rounded border-gray-300 text-amber-600 focus:ring-amber-500" />
                    <span className="mr-2 font-medium">{size}</span>
                  </label>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">رفع التصميم</label>
              <label htmlFor="file-upload" className="relative cursor-pointer bg-white rounded-lg border-2 border-dashed border-gray-300 p-6 text-center hover:border-amber-500 transition-colors block">
                <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                <span className="text-amber-600 font-semibold">انقر لرفع التصميم</span>
                <span className="text-gray-600"> أو اسحب الملف هنا</span>
                <p className="text-xs text-gray-500 mt-2">يدعم JPG, PNG, PDF (حتى 10MB)</p>
                <input id="file-upload" name="file-upload" type="file" accept=".png,.jpg,.jpeg,.pdf" onChange={handleFileChange} className="sr-only" />
              </label>
              {fileName && <p className="mt-2 text-sm text-gray-700 font-medium">ملف مختار: {fileName}</p>}
            </div>

            <div>
              <label htmlFor="notes" className="block text-sm font-medium text-gray-700 mb-2">ملاحظات إضافية</label>
              <textarea id="notes" value={notes} onChange={(e) => setNotes(e.target.value)} rows={4} className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent" placeholder="أضف أي تفاصيل هامة مثل نوع التطريز، الطباعة، أو أي تعديلات خاصة..."></textarea>
            </div>
            
            <div className="bg-amber-50 p-4 rounded-lg border border-amber-200">
              <div className="flex items-start">
                <CheckCircle className="w-5 h-5 text-amber-600 mr-2 shrink-0 mt-0.5" />
                <p className="text-amber-800 text-sm">الحد الأدنى للطلب: 100 قطعة | العمولة: 150 جنيه لكل قطعة. السعر النهائي سيتم تحديده بعد مراجعة الطلب.</p>
              </div>
            </div>

            <button type="submit" className="w-full bg-black text-white py-3 rounded-lg hover:bg-gray-800 transition-colors font-semibold text-lg">إرسال الطلب للمراجعة</button>
          </form>
        </div>
      </div>
    </div>
  );
};
