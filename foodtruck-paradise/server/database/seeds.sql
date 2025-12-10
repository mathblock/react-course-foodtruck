-- Seed data for FoodTruck Paradise

-- Insert categories
INSERT INTO categories (id, name, slug) VALUES
  ('cat_entrees', 'Entrées', 'entrees'),
  ('cat_plats', 'Plats', 'plats'),
  ('cat_desserts', 'Desserts', 'desserts'),
  ('cat_boissons', 'Boissons', 'boissons');

-- Insert allergens
INSERT INTO allergens (id, name) VALUES
  ('allergen_gluten', 'gluten'),
  ('allergen_lactose', 'lactose'),
  ('allergen_soja', 'soja'),
  ('allergen_oeufs', 'œufs'),
  ('allergen_fruits_coque', 'fruits à coque');

-- Insert menu items from menuData.ts
INSERT INTO menu_items (id, name, description, price, category_id, image_url, is_vegetarian, is_new, rating, review_count) VALUES
  ('1', 'Tacos Poulet', 'Tortilla garnie de poulet mariné, légumes frais et sauce maison', 8.50, 'cat_plats', 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=500', 0, 1, 4.5, 28),
  ('2', 'Burger Végétarien', 'Steak végétal, tomates, salade, oignons rouges', 9.00, 'cat_plats', 'https://images.unsplash.com/photo-1520072959219-c595dc870360?w=500', 1, 0, 4.7, 42),
  ('3', 'Pizza Margherita', 'Tomate, mozzarella, basilic frais', 12.00, 'cat_plats', 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=500', 1, 0, 4.8, 56),
  ('4', 'Salade César', 'Laitue, poulet grillé, parmesan, croûtons, sauce césar', 7.50, 'cat_entrees', 'https://images.unsplash.com/photo-1546793665-c74683f339c1?w=500', 0, 0, 4.3, 34),
  ('5', 'Nachos', 'Chips de maïs, fromage fondu, guacamole, salsa', 6.00, 'cat_entrees', 'https://images.unsplash.com/photo-1513456852971-30c0b8199d4d?w=500', 1, 0, 4.6, 45),
  ('6', 'Tiramisu', 'Biscuit imbibé, crème mascarpone, cacao', 5.50, 'cat_desserts', 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=500', 1, 0, 4.9, 67),
  ('7', 'Brownie', 'Chocolat noir intense, noix de pécan', 4.50, 'cat_desserts', 'https://images.unsplash.com/photo-1607920591413-4ec007e70023?w=500', 1, 0, 4.7, 53),
  ('8', 'Coca-Cola', 'Boisson gazeuse rafraîchissante - 33cl', 2.50, 'cat_boissons', 'https://images.unsplash.com/photo-1554866585-cd94860890b7?w=500', 1, 0, 4.2, 89),
  ('9', 'Jus d''Orange Pressé', '100% pur jus d''orange fraîchement pressé - 25cl', 3.50, 'cat_boissons', 'https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=500', 1, 0, 4.8, 71),
  ('10', 'Café Espresso', 'Café serré italien', 2.00, 'cat_boissons', 'https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?w=500', 1, 0, 4.5, 92);

-- Link menu items with allergens
INSERT INTO menu_item_allergens (menu_item_id, allergen_id) VALUES
  -- Tacos Poulet: gluten
  ('1', 'allergen_gluten'),
  -- Burger Végétarien: gluten, soja
  ('2', 'allergen_gluten'),
  ('2', 'allergen_soja'),
  -- Pizza Margherita: gluten, lactose
  ('3', 'allergen_gluten'),
  ('3', 'allergen_lactose'),
  -- Salade César: lactose, gluten
  ('4', 'allergen_lactose'),
  ('4', 'allergen_gluten'),
  -- Nachos: lactose
  ('5', 'allergen_lactose'),
  -- Tiramisu: gluten, lactose, œufs
  ('6', 'allergen_gluten'),
  ('6', 'allergen_lactose'),
  ('6', 'allergen_oeufs'),
  -- Brownie: gluten, lactose, fruits à coque
  ('7', 'allergen_gluten'),
  ('7', 'allergen_lactose'),
  ('7', 'allergen_fruits_coque');
