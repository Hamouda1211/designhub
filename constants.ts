
import type { Factory, DressDesign } from './types';

export const factories: Factory[] = [
  {
    id: 1,
    name: "مصنع النخبة للملابس",
    city: "القاهرة",
    rating: 4.8,
    designs: 156,
    image: "https://picsum.photos/seed/factory1/800/600"
  },
  {
    id: 2,
    name: "صناعات الأزياء الحديثة",
    city: "الإسكندرية",
    rating: 4.6,
    designs: 203,
    image: "https://picsum.photos/seed/factory2/800/600"
  },
  {
    id: 3,
    name: "مصنع الذهب للتيشيرتات",
    city: "الجيزة",
    rating: 4.9,
    designs: 89,
    image: "https://picsum.photos/seed/factory3/800/600"
  }
];

export const dressDesigns: DressDesign[] = [
  {
    id: 1,
    name: "فستان أنيق",
    factory: "مصنع النخبة",
    baseImage: "https://picsum.photos/seed/dress1/600/800",
    availableColors: ['#000000', '#ffffff', '#ff6b6b', '#4ecdc4', '#45b7d1', '#96ceb4'],
    minQuantity: 100,
    maxQuantity: 5000,
    pricePerPiece: 250,
    description: "تصميم أنيق مناسب للمناسبات والسهرات بخامات عالية الجودة."
  },
  {
    id: 2,
    name: "فستان كاجوال",
    factory: "صناعات الأزياء",
    baseImage: "https://picsum.photos/seed/dress2/600/800",
    availableColors: ['#2c3e50', '#e74c3c', '#3498db', '#2ecc71', '#f39c12', '#9b59b6'],
    minQuantity: 100,
    maxQuantity: 5000,
    pricePerPiece: 200,
    description: "تصميم يومي عملي ومريح يناسب الأسواق المحلية."
  },
  {
    id: 3,
    name: "فستان رسمي",
    factory: "مصنع الذهب",
    baseImage: "https://picsum.photos/seed/dress3/600/800",
    availableColors: ['#000000', '#8b4513', '#2f4f4f', '#4b0082', '#800000', '#006400'],
    minQuantity: 100,
    maxQuantity: 5000,
    pricePerPiece: 350,
    description: "خامة فاخرة وقصّة مناسبة للمناسبات الرسمية."
  },
  {
    id: 4,
    name: "فستان صيفي",
    factory: "مصنع النخبة",
    baseImage: "https://picsum.photos/seed/dress4/600/800",
    availableColors: ['#ffeb3b', '#ff9800', '#e91e63', '#9c27b0', '#673ab7', '#3f51b5'],
    minQuantity: 100,
    maxQuantity: 5000,
    pricePerPiece: 180,
    description: "خفيف ومناسب لفصول الصيف والأجواء الدافئة."
  }
];
