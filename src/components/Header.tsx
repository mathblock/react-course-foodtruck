import { Link } from "react-router-dom";
import { ShoppingBasket } from "lucide-react";
import type { NavigationMenu } from "@/types/utils";
import { useCart } from "./CardContext";

const navigations: NavigationMenu[] = [
  {
    chemin: "",
    classN: "text-yellow-900 hover:text-yellow-600 transition-colors",
    label: "Menu",
  },
  {
    chemin: "/about",
    classN: "text-yellow-900 hover:text-yellow-600 transition-colors",
    label: "À propos",
  },
  {
    chemin: "/contact",
    classN: "text-yellow-900 hover:text-yellow-600 transition-colors",
    label: "Contact",
  },
  {
    chemin: "/cart",
    classN:
      "relative flex items-center text-yellow-900 hover:text-yellow-600 transition-colors",
    label: "",
    cart: true,
    classN2:
      "absolute -top-2 -right-2 bg-green-500 text-white text-xs font-bold rounded-full px-2 py-0.5 shadow",
  },
];

function Header() {
  const { cartItemCount } = useCart();
  return (
    <header className="bg-yellow-50 shadow-md py-4 px-6 flex flex-col items-center">
      <div className="flex items-center gap-3 mb-2">
        <span className="text-3xl">🌮</span>
        <h1 className="text-2xl font-bold text-yellow-900">
          Food Truck Paradise
        </h1>
      </div>

      <p className="text-yellow-700 italic mb-4">
        Le paradis des saveurs nomades !
      </p>

      <nav>
        <ul className="flex gap-6 text-lg font-medium">
          {navigations.map((nav) =>
            "cart" in nav ? (
              <li key={nav.label}>
                <Link to={nav.chemin} className={nav.classN}>
                  {cartItemCount > 0 && (
                    <div>
                      <ShoppingBasket className="w-7 h-7" />
                      <span className={nav.classN2}>{cartItemCount}</span>
                    </div>
                  )}
                </Link>
              </li>
            ) : (
              <li key={nav.label}>
                <Link to={nav.chemin} className={nav.classN}>
                  {nav.label}
                </Link>
              </li>
            )
          )}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
