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

export function MenuCard({ item }: { item: MenuItem }) {
    return (
        <Card key={item.id} className="w-75 m-5">
            <CardContent>
                <img src={item.imageURL} />
                <div className="flex gap-3">
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
                <Button>
                    <ShoppingCart className="mr-2" />
                    Add to basket
                </Button>
            </CardFooter>

        </Card >
    )
}