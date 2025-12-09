import { type MenuItem } from '../types/menu';

export const menuItems: MenuItem[] = [
  {
    id: '1',
    name: 'Tacos Poulet',
    description: 'Tortilla garnie de poulet mariné, légumes frais et sauce maison',
    price: 8.50,
    category: 'plats',
    imageUrl: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=500',
    isVegetarian: false,
    allergens: ['gluten'],
    rating: 4.5,
    reviewCount: 28,
    isNew: true
  },
  {
    id: '2',
    name: 'Burger Végétarien',
    description: 'Steak végétal, tomates, salade, oignons rouges',
    price: 9.00,
    category: 'plats',
    imageUrl: 'https://images.unsplash.com/photo-1520072959219-c595dc870360?w=500',
    isVegetarian: true,
    allergens: ['gluten', 'soja'],
    rating: 4.7,
    reviewCount: 42,
    isNew: true
  },
  {
    id: '3',
    name: 'Pizza Margherita',
    description: 'Tomate, mozzarella, basilic frais',
    price: 12.00,
    category: 'plats',
    imageUrl: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=500',
    isVegetarian: true,
    allergens: ['gluten', 'lactose'],
    rating: 4.8,
    reviewCount: 56
  },
  {
    id: '4',
    name: 'Salade César',
    description: 'Laitue, poulet grillé, parmesan, croûtons, sauce césar',
    price: 7.50,
    category: 'entrees',
    imageUrl: 'https://images.unsplash.com/photo-1546793665-c74683f339c1?w=500',
    isVegetarian: false,
    allergens: ['lactose', 'gluten'],
    rating: 4.3,
    reviewCount: 34
  },
  {
    id: '5',
    name: 'Nachos',
    description: 'Chips de maïs, fromage fondu, guacamole, salsa',
    price: 6.00,
    category: 'entrees',
    imageUrl: 'https://images.unsplash.com/photo-1513456852971-30c0b8199d4d?w=500',
    isVegetarian: true,
    allergens: ['lactose'],
    rating: 4.6,
    reviewCount: 45
  },
  {
    id: '6',
    name: 'Tiramisu',
    description: 'Biscuit imbibé, crème mascarpone, cacao',
    price: 5.50,
    category: 'desserts',
    imageUrl: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=500',
    isVegetarian: true,
    allergens: ['gluten', 'lactose', 'œufs'],
    rating: 4.9,
    reviewCount: 67
  },
  {
    id: '7',
    name: 'Brownie',
    description: 'Chocolat noir intense, noix de pécan',
    price: 4.50,
    category: 'desserts',
    imageUrl: 'https://images.unsplash.com/photo-1607920591413-4ec007e70023?w=500',
    isVegetarian: true,
    allergens: ['gluten', 'lactose', 'fruits à coque'],
    rating: 4.7,
    reviewCount: 53
  },
  {
    id: '8',
    name: 'Coca-Cola',
    description: 'Boisson gazeuse rafraîchissante - 33cl',
    price: 2.50,
    category: 'boissons',
    imageUrl: 'https://images.unsplash.com/photo-1554866585-cd94860890b7?w=500',
    isVegetarian: true,
    allergens: [],
    rating: 4.2,
    reviewCount: 89
  },
  {
    id: '9',
    name: 'Jus d\'Orange Pressé',
    description: '100% pur jus d\'orange fraîchement pressé - 25cl',
    price: 3.50,
    category: 'boissons',
    imageUrl: 'https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=500',
    isVegetarian: true,
    allergens: [],
    rating: 4.8,
    reviewCount: 71
  },
  {
    id: '10',
    name: 'Café Espresso',
    description: 'Café serré italien',
    price: 2.00,
    category: 'boissons',
    imageUrl: 'https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?w=500',
    isVegetarian: true,
    allergens: [],
    rating: 4.5,
    reviewCount: 92
  }
];
