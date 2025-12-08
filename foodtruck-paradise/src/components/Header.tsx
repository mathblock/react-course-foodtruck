import { ShoppingCart } from "lucide-react";

type HeaderProps = {
    cartItemsCount: number;
};

export function Header({ cartItemsCount }: HeaderProps) {
    return (
        <div>
            <nav>
                <ul className="flex justify-between items-center">
                    <div className="flex items-center">
                        <img src="./logo.svg" className="w-25 h-25 mx-5" />
                        <div>
                            <h1 className="text-5xl font-bold">Food Truck Paradise</h1>
                            <h2 className="text-3xl">The best place to eat !</h2>
                        </div>
                    </div>
                    <li className="font-bold text-xl cursor-pointer">Menu</li>
                    <li className="font-bold text-xl cursor-pointer">À propos</li>
                    <li className="font-bold text-xl cursor-pointer">Contact</li>

                    <li className="relative cursor-pointer">
                        <a href="#Panier">
                            <ShoppingCart className="w-8 h-8" />
                            {cartItemsCount > 0 && (
                                <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full text-xs w-5 h-5 flex items-center justify-center">
                                    {cartItemsCount}
                                </span>
                            )}
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    );
}
