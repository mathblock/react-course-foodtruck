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

import type { MenuItem } from "@/types/menu";

function MenuCard(menuProps: MenuItem) {
  return (
    <div>
      <Card>
        <div className="relative mb-2 flex flex-col items-center">
          <img
            src={menuProps.imageUrl}
            alt={menuProps.name}
            className="w-32 h-32 object-cover rounded-xl shadow"
          />
          {menuProps.isNew && (
            <Badge className="absolute top-2 left-2 bg-green-500 text-white">
              Nouveau
            </Badge>
          )}
        </div>

        <CardContent>
          <CardHeader className="flex items-center justify-between">
            <CardTitle>{menuProps.name}</CardTitle>
            {menuProps.isVegetarian && (
              <Badge className="bg-green-200 text-green-800 ml-2">🌱Végé</Badge>
            )}
          </CardHeader>

          <CardDescription>{menuProps.description}</CardDescription>
        </CardContent>

        <CardFooter className="flex items-center justify-between">
          <p className="font-bold text-yellow-900">{menuProps.price.toFixed(2)} €</p>
          <CardAction>
            <button className="bg-yellow-500 text-white px-4 py-1 rounded hover:bg-yellow-600 transition-colors">
              Ajouter
            </button>
          </CardAction>
        </CardFooter>
      </Card>
    </div>
  );
}

export default MenuCard;