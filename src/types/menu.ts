export default interface  Menu {
    id: number;
    name: string;
    description: string;
    price: number;
    category: 'entrees' | 'plats' | 'desserts' | 'boissons';
    imageUrl: string;
    isVegetarian: boolean;
    isNew?: boolean;
}