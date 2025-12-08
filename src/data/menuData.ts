import { MenuItem } from '../types/menu';

export const menuItems: MenuItem[] = [
  // Entrées
  {
    id: '1',
    name: 'Salade César',
    description: 'Salade fraîche avec poulet grillé, parmesan et croûtons croustillants',
    price: 8.50,
    category: 'entrees',
    imageUrl: 'https://images.unsplash.com/photo-1546793665-c74683f339c1?w=400',
    isVegetarian: false,
    isNew: true
  },
  {
    id: '2',
    name: 'Soupe du Jour',
    description: 'Soupe maison préparée avec des légumes frais de saison',
    price: 6.00,
    category: 'entrees',
    imageUrl: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?w=400',
    isVegetarian: true
  },
  {
    id: '3',
    name: 'Nachos Supreme',
    description: 'Chips tortilla avec fromage fondu, jalapeños, guacamole et crème',
    price: 9.50,
    category: 'entrees',
    imageUrl: 'https://images.unsplash.com/photo-1513456852971-30c0b8199d4d?w=400',
    isVegetarian: true,
    isNew: true
  },
  {
    id: '4',
    name: 'Ailes de Poulet',
    description: 'Ailes croustillantes avec sauce BBQ ou Buffalo',
    price: 10.00,
    category: 'entrees',
    imageUrl: 'https://images.unsplash.com/photo-1608039755401-742074f0548d?w=400',
    isVegetarian: false
  },

  // Plats Principaux
  {
    id: '5',
    name: 'Tacos Carnitas',
    description: 'Trois tacos au porc effiloché avec oignons, coriandre et lime',
    price: 12.50,
    category: 'plats',
    imageUrl: 'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=400',
    isVegetarian: false
  },
  {
    id: '6',
    name: 'Burger Classique',
    description: 'Burger juteux avec fromage, laitue, tomate et sauce maison',
    price: 11.00,
    category: 'plats',
    imageUrl: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400',
    isVegetarian: false,
    isNew: true
  },
  {
    id: '7',
    name: 'Pizza Margherita',
    description: 'Pizza traditionnelle avec mozzarella, tomates et basilic frais',
    price: 13.00,
    category: 'plats',
    imageUrl: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=400',
    isVegetarian: true
  },
  {
    id: '8',
    name: 'Wrap Végétarien',
    description: 'Wrap complet avec légumes grillés, houmous et feta',
    price: 10.50,
    category: 'plats',
    imageUrl: 'https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=400',
    isVegetarian: true,
    isNew: true
  },
  {
    id: '9',
    name: 'Quesadilla au Poulet',
    description: 'Tortilla grillée farcie de poulet, fromage et poivrons',
    price: 11.50,
    category: 'plats',
    imageUrl: 'https://images.unsplash.com/photo-1618040996337-56904b7850b9?w=400',
    isVegetarian: false
  },
  {
    id: '10',
    name: 'Fish & Chips',
    description: 'Poisson pané croustillant avec frites maison et sauce tartare',
    price: 14.00,
    category: 'plats',
    imageUrl: 'https://images.unsplash.com/photo-1579208575657-c595a05383b7?w=400',
    isVegetarian: false
  },

  // Desserts
  {
    id: '11',
    name: 'Brownie au Chocolat',
    description: 'Brownie fondant servi chaud avec glace vanille',
    price: 6.50,
    category: 'desserts',
    imageUrl: 'https://images.unsplash.com/photo-1607920591413-4ec007e70023?w=400',
    isVegetarian: true
  },
  {
    id: '12',
    name: 'Glace Artisanale',
    description: 'Trois boules de glace au choix: vanille, chocolat, fraise',
    price: 5.50,
    category: 'desserts',
    imageUrl: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=400',
    isVegetarian: true,
    isNew: true
  },
  {
    id: '13',
    name: 'Churros',
    description: 'Churros croustillants avec sauce au chocolat',
    price: 7.00,
    category: 'desserts',
    imageUrl: 'https://images.unsplash.com/photo-1599599810769-bcde5a160d32?w=400',
    isVegetarian: true
  },

  // Boissons
  {
    id: '14',
    name: 'Soda',
    description: 'Coca-Cola, Sprite ou Fanta',
    price: 3.00,
    category: 'boissons',
    imageUrl: 'https://images.unsplash.com/photo-1581006852262-e4307cf6283a?w=400',
    isVegetarian: true
  },
  {
    id: '15',
    name: 'Jus Frais',
    description: 'Jus d\'orange, pomme ou ananas pressé',
    price: 4.50,
    category: 'boissons',
    imageUrl: 'https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=400',
    isVegetarian: true
  },
  {
    id: '16',
    name: 'Thé Glacé',
    description: 'Thé glacé maison au citron ou pêche',
    price: 3.50,
    category: 'boissons',
    imageUrl: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=400',
    isVegetarian: true,
    isNew: true
  }
];
