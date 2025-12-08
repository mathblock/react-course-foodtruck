import {
    Card,
    CardDescription,
    CardHeader,
    CardTitle,
    CardContent,
    CardFooter,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "./ui/button";
import { ShoppingCart, Vegan } from "lucide-react";
import type { MenuItem } from "@/types/menu";
import { useState } from "react";

type MenuCardProps = {
    item: MenuItem;
    onAddToCart: (item: MenuItem) => void;
};

export function MenuCard({ item, onAddToCart }: MenuCardProps) {
    const [isAdding, setIsAdding] = useState(false);

    const handleAddToCart = () => {
        onAddToCart(item);
        setIsAdding(true);
        setTimeout(() => setIsAdding(false), 500);
    };


    return (
        <Card key={item.id} className="w-75 m-5 flex justify-between">
            <CardContent>
                <img className="rounded-lg m-b-5" src={item.imageURL} />
                <div className="flex my-5 gap-3">
                    {item.category == "entrees" ? (
                        <Badge>Entrée</Badge>
                    ) : item.category == "plats" ? (
                        <Badge>Plat</Badge>
                    ) : item.category == "desserts" ? (
                        <Badge>Dessert</Badge>
                    ) :
                        <Badge>Boissons</Badge>}
                    {item.isVegetarian && <Badge variant="default" className="bg-green-600"><Vegan />Vegetarian</Badge>}
                    {item.isNew && <Badge variant="default" className="bg-yellow-400 text-black">NEW</Badge>}
                </div>
            </CardContent>
            <CardHeader>
                <CardTitle className="text-2xl">{item.name}</CardTitle>
                <CardDescription>{item.description}</CardDescription>
            </CardHeader>
            <CardFooter className="justify-between">
                <p className="font-bold">{item.price} $</p>
                <Button className="cursor-pointer" onClick={handleAddToCart} >
                    <ShoppingCart className="mr-2" />
                    {isAdding ? "Ajouté " : "Ajouter au panier"}
                </Button>
            </CardFooter>

        </Card >
    )
}