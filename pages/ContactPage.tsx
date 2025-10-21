
import React from 'react';

export const ContactPage: React.FC = () => (
  <div className="bg-gray-50 py-16 md:py-24">
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">تواصل معنا</h1>
        <p className="text-lg text-gray-600">يسعدنا تلقي استفساراتكم واقتراحاتكم. فريقنا جاهز لمساعدتكم.</p>
      </div>
      <div className="grid md:grid-cols-2 gap-10">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-semibold mb-6 text-gray-900">أرسل لنا رسالة</h2>
          <form className="space-y-4 text-right">
            <input type="text" placeholder="الاسم الكامل" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500" required />
            <input type="email" placeholder="البريد الإلكتروني" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500" required />
            <textarea rows={5} placeholder="نص رسالتك..." className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500" required></textarea>
            <button type="submit" className="w-full bg-black text-white py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors">إرسال الرسالة</button>
          </form>
        </div>
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-semibold mb-6 text-gray-900">معلومات التواصل</h2>
          <div className="space-y-6 text-right">
            <div><h3 className="font-semibold text-gray-900 mb-1">خدمة العملاء</h3><p className="text-gray-600 text-lg">0100-000-0000</p></div>
            <div><h3 className="font-semibold text-gray-900 mb-1">واتساب للأعمال</h3><p className="text-gray-600 text-lg">0100-000-0000</p></div>
            <div><h3 className="font-semibold text-gray-900 mb-1">البريد الإلكتروني للدعم</h3><p className="text-gray-600 text-lg">support@designhub-egypt.com</p></div>
            <div><h3 className="font-semibold text-gray-900 mb-1">العنوان</h3><p className="text-gray-600 text-lg">القاهرة، جمهورية مصر العربية</p></div>
          </div>
        </div>
      </div>
    </div>
  </div>
);
