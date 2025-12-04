export interface MenuItem {
    id: string,
    name: string,
    description: string,
    price: number,
    category: "entrees" | "plats" | "desserts" | "boissons",
    imageURL: string,
    isVegetarian: boolean,
    isNew: boolean
}