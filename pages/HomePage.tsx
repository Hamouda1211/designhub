
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Users, Shield, TrendingUp, Truck } from '../components/icons';
import { dressDesigns } from '../constants';
import { DressCard } from '../components/DressCard';

export const HomePage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-white">
      <section className="relative bg-gradient-to-br from-gray-800 to-black text-white">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-40 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight tracking-tight">صمّم. نفّذ. اربح.</h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-10 max-w-3xl mx-auto">منصة B2B متكاملة تربط بين المصممين، التجار، وأفضل مصانع الملابس في مصر.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button onClick={() => navigate('/dresses')} className="bg-amber-500 text-black px-8 py-4 rounded-full text-lg font-semibold hover:bg-amber-400 transition-transform transform hover:scale-105 shadow-lg">تصفح التصاميم الجاهزة</button>
            <button onClick={() => navigate('/design')} className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-black transition-colors">اطلب تصميمك الخاص</button>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">لماذا DesignHub Egypt؟</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">نحن نُسهل عملية تصنيع الملابس بالجملة، مع ضمان الجودة والأمان لكلا الطرفين.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
            <div className="text-center p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-amber-100 text-amber-600 rounded-full flex items-center justify-center mx-auto mb-5"><Users className="w-8 h-8" /></div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">ربط مباشر</h3>
              <p className="text-gray-600">تواصل مباشر بين المصانع والتجار دون وسطاء لزيادة الكفاءة والأرباح.</p>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-amber-100 text-amber-600 rounded-full flex items-center justify-center mx-auto mb-5"><Shield className="w-8 h-8" /></div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">دفع آمن</h3>
              <p className="text-gray-600">نظام دفع آمن (Escrow) يضمن حقوق الطرفين حتى إتمام الصفقة بنجاح.</p>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-amber-100 text-amber-600 rounded-full flex items-center justify-center mx-auto mb-5"><TrendingUp className="w-8 h-8" /></div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">أرباح مضمونة</h3>
              <p className="text-gray-600">عمولة ثابتة وواضحة تضمن تحقيق الأرباح للمصممين والتجار.</p>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-amber-100 text-amber-600 rounded-full flex items-center justify-center mx-auto mb-5"><Truck className="w-8 h-8" /></div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">تسليم مضمون</h3>
              <p className="text-gray-600">متابعة دقيقة لجميع مراحل عملية التصنيع والشحن لضمان التسليم في الوقت المحدد.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">أحدث تصاميم الفساتين</h2>
            <p className="text-gray-600 text-lg">ابدأ تصنيع مجموعتك بكميات تبدأ من 100 قطعة فقط.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {dressDesigns.slice(0, 4).map((dress) => (
              <DressCard key={dress.id} dress={dress} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
