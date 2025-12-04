// src/data/menuData.ts

import type { MenuItem, Category } from '../types/menu'; // Utilisation de 'import type'

export const menuItems: MenuItem[] = [

  {
    id: 'e1',
    name: 'Nachos Suprêmes',
    description: 'Tortilla chips, fromage fondu, jalapeños, guacamole et crème sure maison.',
    price: 9.50,
    category: 'entrees' as Category,
    
    imageUrl: '', 
    isVegetarian: true,
  },
  {
    id: 'e2',
    name: 'Salade César du Chef',
    description: 'Laitue romaine croquante, croûtons à l\'ail, parmesan et vinaigrette crémeuse.',
    price: 8.00,
    category: 'entrees' as Category,
  
    imageUrl: '',
    isVegetarian: true,
  },
  {
    id: 'e3',
    name: 'Soupe du Jour Artisanale',
    description: 'Servie chaude, préparée avec des légumes de saison. Demandez la saveur du jour!',
    price: 6.50,
    category: 'entrees' as Category,
    
    imageUrl: '',
    isVegetarian: true, 
    isNew: true,
  },
  
  {
    id: 'p1',
    name: 'Tacos Al Pastor Authentiques',
    description: '3 Tacos de porc mariné à l\'achiote, servis avec ananas, coriandre et oignons.',
    price: 15.00,
    category: 'plats' as Category,
    
    imageUrl: '',
    isVegetarian: false,
    isNew: true,
  },
  {
    id: 'p2',
    name: 'Burger Végétal Extrême',
    description: 'Galette de haricots noirs, avocat, tomate, et oignons caramélisés. Servi avec frites.',
    price: 14.50,
    category: 'plats' as Category,
  
    imageUrl: '',
    isVegetarian: true,
  },
  {
    id: 'p3',
    name: 'Wrap Poulet Pesto & Feta',
    description: 'Lanières de poulet grillé, sauce pesto, roquette fraîche et morceaux de feta dans un wrap.',
    price: 13.00,
    category: 'plats' as Category,

    imageUrl: '',
    isVegetarian: false,
  },
  {
    id: 'p4',
    name: 'Pizza Margherita Classique',
    description: 'Sauce tomate San Marzano, mozzarella fraîche, basilic. Un délice intemporel.',
    price: 12.50,
    category: 'plats' as Category,
    
    imageUrl: '',
    isVegetarian: true,
  },
  {
    id: 'p5',
    name: 'Fish & Chips à la Bière',
    description: 'Filet de poisson blanc frit dans une pâte à bière, servi avec frites et sauce tartare.',
    price: 17.00,
    category: 'plats' as Category,
    // URL simplifiée
    imageUrl: '',
    isVegetarian: false,
    isNew: true,
  },
  {
    id: 'p6',
    name: 'Bol Végétarien de Quinoa',
    description: 'Quinoa, avocat, maïs, haricots noirs, tomates cerises et vinaigrette au citron vert.',
    price: 14.00,
    category: 'plats' as Category,
  
    imageUrl: '',
    isVegetarian: true,
  },

  {
    id: 'd1',
    name: 'Brownie Double Chocolat',
    description: 'Fondant et riche, servi tiède avec une boule de glace vanille.',
    price: 5.50,
    category: 'desserts' as Category,
    // URL simplifiée
    imageUrl: '',
    isVegetarian: true,
  },
  {
    id: 'd2',
    name: 'Churros Classiques',
    description: 'Servis croustillants avec un choix de sauce au chocolat noir ou caramel salé.',
    price: 7.00,
    category: 'desserts' as Category,
    // URL simplifiée
    imageUrl: 'https://images.unsplash.com/photo-1566736453144-8d96b92f7c22',
    isVegetarian: true,
  },
  {
    id: 'd3',
    name: 'Cheesecake New-Yorkais',
    description: 'Crémieux et classique, sur un fond de biscuits graham. Le dessert signature.',
    price: 7.50,
    category: 'desserts' as Category,
    // URL simplifiée
    imageUrl: 'https://images.unsplash.com/photo-1588047970726-2810842e4782',
    isVegetarian: true,
    isNew: true,
  },
  
  {
    id: 'b1',
    name: 'Thé Glacé à la Pêche Maison',
    description: 'Infusion de thé noir et de sirop de pêche, très rafraîchissant.',
    price: 3.50,
    category: 'boissons' as Category,
    
    imageUrl: 'https://images.unsplash.com/photo-1563229648-936d85949d29',
    isVegetarian: true,
  },
  {
    id: 'b2',
    name: 'Limonade Artisanale',
    description: 'Citrons fraîchement pressés, eau pétillante et une touche de menthe.',
    price: 4.00,
    category: 'boissons' as Category,
    // URL simplifiée
    imageUrl: 'https://images.unsplash.com/photo-1561754024-531e84a2781b',
    isVegetarian: true,
  },
  {
    id: 'b3',
    name: 'Café Glacé Latte',
    description: 'Double shot d\'espresso, lait et glace. Le remontant idéal.',
    price: 4.50,
    category: 'boissons' as Category,

    imageUrl: 'https://images.unsplash.com/photo-1563185366-23193e2448fd',
    isVegetarian: true,
  },
  {
    id: 'b4',
    name: 'Jus de Fruits Rouges Bio',
    description: 'Mélange de fraises, framboises et myrtilles sans sucres ajoutés.',
    price: 5.00,
    category: 'boissons' as Category,
    
    imageUrl: 'https://images.unsplash.com/photo-1553530182-1811776595ae',
    isVegetarian: true,
  },
];