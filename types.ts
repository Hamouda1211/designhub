
export interface Factory {
  id: number;
  name: string;
  city: string;
  rating: number;
  designs: number;
  image: string;
}

export interface DressDesign {
  id: number;
  name:string;
  factory: string;
  baseImage: string;
  availableColors: string[];
  minQuantity: number;
  maxQuantity: number;
  pricePerPiece: number;
  description: string;
}
