import { useMemo } from 'react';
import { useMenuFilters } from '../hooks/useMenuFilters';
import MenuFilters from '../components/menu/MenuFilters';
import { menuItems } from '../data/menuData';
import type { FilterState, MenuItem } from '../types/menu';

function applyFilters(items: MenuItem[], f: FilterState) {
    return items
        .filter(i => {
            // Filtre par catégorie
            if (f.category && f.category !== 'all' && i.category !== f.category) return false;
            
            // Filtre par prix
            if (i.price < f.minPrice) return false;
            if (i.price > f.maxPrice) return false;
            
            // Filtre végétarien
            if (f.isVegetarian && !i.isVegetarian) return false;
            
            // Filtre allergènes - exclure les items qui contiennent un allergène sélectionné
            if (f.allergens.length > 0) {
                for (const allergen of f.allergens) {
                    if (i.allergens.includes(allergen)) return false;
                }
            }
            
            return true;
        })
        .sort((a, b) => {
            switch (f.sortBy) {
                case 'price-asc':
                    return a.price - b.price;
                case 'price-desc':
                    return b.price - a.price;
                case 'name':
                    return a.name.localeCompare(b.name);
                case 'rating':
                    return b.rating - a.rating;
                default:
                    return 0;
            }
        });
}

function MenuPage() {
    const { filters } = useMenuFilters();
    
    const filteredItems = useMemo(() => applyFilters(menuItems, filters), [filters]);

    return (
        <div className="menu-page p-6">
            <h2 className="text-3xl font-bold mb-6">Menu</h2>
            
            <div className="flex gap-6 items-start">
                <aside className="w-80 flex-shrink-0">
                    <MenuFilters resultCount={filteredItems.length} />
                </aside>

                <main className="flex-1">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {filteredItems.map(item => (
                            <article 
                                key={item.id} 
                                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-200"
                            >
                                <img 
                                    src={item.imageUrl} 
                                    alt={item.name} 
                                    className="w-full h-40 object-cover"
                                />
                                <div className="p-4">
                                    <div className="flex justify-between items-start mb-2">
                                        <h4 className="font-bold text-lg">{item.name}</h4>
                                        <span className="text-blue-600 font-semibold">{item.price}€</span>
                                    </div>
                                    <p className="text-sm text-gray-600 mb-3">{item.description}</p>
                                    
                                    <div className="flex items-center justify-between text-xs text-gray-500">
                                        <div className="flex items-center gap-1">
                                            <span>⭐ {item.rating}</span>
                                            <span>({item.reviewCount})</span>
                                        </div>
                                        {item.isVegetarian && (
                                            <span className="bg-green-100 text-green-700 px-2 py-1 rounded">
                                                🌱 Végétarien
                                            </span>
                                        )}
                                        {item.isNew && (
                                            <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded">
                                                Nouveau
                                            </span>
                                        )}
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>
                    
                    {filteredItems.length === 0 && (
                        <div className="text-center py-12">
                            <p className="text-gray-500 text-lg">
                                Aucun produit ne correspond à vos critères de recherche.
                            </p>
                            <p className="text-gray-400 text-sm mt-2">
                                Essayez de modifier vos filtres.
                            </p>
                        </div>
                    )}
                </main>
            </div>
        </div>
    );
}
export default MenuPage;