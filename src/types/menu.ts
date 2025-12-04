interface MenuItem {
  id: number; //identifiant unique (string)
  name: string; //nom du plat (string)
  description: string; //description du plat (string)
  price: number; //prix (number)
  category: "entrees" | "plats" | "desserts" | "boissons"; //catégorie parmi 'entrees', 'plats', 'desserts', 'boissons'
  imageUrl: string; //URL de l'image (string)
  isVegetarian: boolean; //indicateur végétarien (boolean)
  isNew?: boolean; //indicateur nouveauté (boolean, optionnel)
}

export type { MenuItem };
