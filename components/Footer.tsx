
import React from 'react';
import { useNavigate } from 'react-router-dom';

export const Footer: React.FC = () => {
    const navigate = useNavigate();

    return (
        <footer className="bg-gray-900 text-white">
            <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    <div>
                        <h3 className="text-lg font-semibold mb-4">DesignHub Egypt</h3>
                        <p className="text-gray-400">منصة B2B متخصصة تربط بين المصانع والتجار في مجال الملابس.</p>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold mb-4">روابط سريعة</h3>
                        <ul className="space-y-2">
                            <li><button onClick={() => navigate('/')} className="text-gray-400 hover:text-white">الرئيسية</button></li>
                            <li><button onClick={() => navigate('/dresses')} className="text-gray-400 hover:text-white">فساتين</button></li>
                            <li><button onClick={() => navigate('/design')} className="text-gray-400 hover:text-white">اطلب تصميمك</button></li>
                            <li><button onClick={() => navigate('/about')} className="text-gray-400 hover:text-white">عنّا</button></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold mb-4">قانوني</h3>
                        <ul className="space-y-2">
                            <li><button className="text-gray-400 hover:text-white">سياسة الخصوصية</button></li>
                            <li><button className="text-gray-400 hover:text-white">الشروط والأحكام</button></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold mb-4">تواصل معنا</h3>
                        <ul className="space-y-2 text-gray-400">
                            <li>info@designhub-egypt.com</li>
                            <li>0100-000-0000</li>
                            <li>القاهرة، مصر</li>
                        </ul>
                    </div>
                </div>
                <div className="mt-8 border-t border-gray-800 pt-8 text-center text-gray-500">
                    <p>&copy; {new Date().getFullYear()} DesignHub Egypt. جميع الحقوق محفوظة.</p>
                </div>
            </div>
        </footer>
    );
};
