import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
  CardAction,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "./ui/button";
import { useState } from "react";
import type { MenuCardProps } from "@/types/utils";

function MenuCard(menuCardProp: MenuCardProps) {
  const [added, setAdded] = useState<boolean>(false);

  function handleAddToCart() {
    menuCardProp.onAddToCart(menuCardProp.item);
    setAdded(true);
    setTimeout(() => setAdded(false), 500);
  }

  return (
    <div>
      <Card>
        <div className="relative mb-2 flex flex-col items-center">
          <img
            src={menuCardProp.item.imageUrl}
            alt={menuCardProp.item.name}
            className="w-32 h-32 object-cover rounded-xl shadow"
          />
          {menuCardProp.item.isNew && (
            <Badge className="absolute top-2 left-2 bg-green-500 text-white">
              Nouveau
            </Badge>
          )}
        </div>

        <CardContent>
          <CardHeader className="flex items-center justify-between">
            <CardTitle>{menuCardProp.item.name}</CardTitle>
            {menuCardProp.item.isVegetarian && (
              <Badge className="bg-green-200 text-green-800 ml-2">🌱Végé</Badge>
            )}
          </CardHeader>

          <CardDescription>{menuCardProp.item.description}</CardDescription>
        </CardContent>

        <CardFooter className="flex items-center justify-between">
          <p className="font-bold text-yellow-900">
            {menuCardProp.item.price.toFixed(2)} €
          </p>
          <CardAction>
            <Button onClick={handleAddToCart} size="lg" disabled={added}>
              {added ? "Ajouté !" : "Ajouter au panier"}
            </Button>
          </CardAction>
        </CardFooter>
      </Card>
    </div>
  );
}

export default MenuCard;
