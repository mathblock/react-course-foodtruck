import { menuItems } from "@/data/menuData";
import { MenuCard } from "./MenuCard";
import type { MenuItem } from "@/types/menu";
import { useState } from "react";
import { X } from "lucide-react";
import { Button } from "./ui/button";

type MenuProps = {
    onAddToCart: (item: MenuItem) => void;
};

export function Menu({ onAddToCart }: MenuProps) {
    const [activeCategory, setActiveCategory] = useState<"tous" | "entrees" | "plats" | "desserts" | "boissons">("tous");
    const [searchTerm, setSearchTerm] = useState("");

    const categories = [
        { key: "tous", label: "Tous" },
        { key: "entrees", label: "Entrées" },
        { key: "plats", label: "Plats Principaux" },
        { key: "desserts", label: "Desserts" },
        { key: "boissons", label: "Boissons" },
    ] as const;

    const filteredItems = menuItems
        .filter(
            (item) => activeCategory === "tous" || item.category === activeCategory
        )
        .filter(
            (item) =>
                item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                item.description.toLowerCase().includes(searchTerm.toLowerCase())
        );

    return (
        <div className="menu space-y-6 p-10">
            <div className="flex justify-center w-full">
                <div className="w-full max-w-md">
                    <div className="flex items-center gap-2 bg-gray-100 border border-gray-300 rounded-full px-4 py-2 shadow-sm">
                        <input
                            type="text"
                            placeholder="Search"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="bg-transparent flex-1 outline-none text-sm text-gray-700 placeholder:text-gray-400"
                        />
                        {searchTerm && (
                            <button
                                onClick={() => setSearchTerm("")}
                                className="rounded-full p-1 hover:bg-gray-200 transition"
                            >
                                <X className="w-4 h-4 text-gray-500" />
                            </button>
                        )}
                    </div>
                </div>
            </div>

            <div className="flex justify-center gap-3 flex-wrap">
                {categories.map((category) => (
                    <Button
                        key={category.key}
                        variant={activeCategory === category.key ? "default" : "outline"}
                        onClick={() => setActiveCategory(category.key)}
                    >
                        {category.label}
                    </Button>
                ))}
            </div>

            <section className="menu-section mt-4">
                <h2 className="text-2xl font-bold tracking-[0.15em] uppercase text-slate-900 inline-block relative mb-4 text-center w-full">
                    {categories.find((c) => c.key === activeCategory)?.label ?? "Menu"}
                </h2>

                {filteredItems.length === 0 ? (
                    <p className="text-center text-gray-500 mt-4">
                        Aucun résultat trouvé.
                    </p>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                        {filteredItems.map((item) => (
                            <MenuCard
                                key={item.id}
                                item={item}
                                onAddToCart={onAddToCart}
                            />
                        ))}
                    </div>
                )}
            </section>
        </div>
    );
}
