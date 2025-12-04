import { menuItems } from '@/data/menuData'
import { MenuCard } from './MenuCard'

export function Menu() {
    return (
        <div className="m-10">
            <div>
                <h3 className="text-2xl font-bold tracking-[0.15em] uppercase text-slate-900 inline-block relative mb-4">
                    Entrées
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                    {menuItems
                        .filter((item) => item.category === "entrees")
                        .map((card) => (
                            <MenuCard key={card.id} item={card} />
                        ))}
                </div>
            </div>

            <div>
                <h3 className="text-2xl font-bold tracking-[0.15em] uppercase text-slate-900 inline-block relative mb-4">
                    Plats
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                    {menuItems
                        .filter((item) => item.category === "plats")
                        .map((card) => (
                            <MenuCard key={card.id} item={card} />
                        ))}
                </div>
            </div>

            <div>
                <h3 className="text-2xl font-bold tracking-[0.15em] uppercase text-slate-900 inline-block relative mb-4 text-center w-full">
                    Boissons

                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                    {menuItems
                        .filter((item) => item.category === "boissons")
                        .map((card) => (
                            <MenuCard key={card.id} item={card} />
                        ))}
                </div>
            </div>

            <div>
                <h3 className="text-2xl font-bold tracking-[0.15em] uppercase text-slate-900 inline-block relative mb-4">
                    Desserts
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                    {menuItems
                        .filter((item) => item.category === "desserts")
                        .map((card) => (
                            <MenuCard key={card.id} item={card} />
                        ))}
                </div>
            </div>
        </div>

    )
}