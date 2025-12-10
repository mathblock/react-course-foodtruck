import { useLocalStorage } from "./useLocalStorage";

// src/hooks/useFavorites.ts
export function useFavorites() {
  const [favorites, setFavorites] = useLocalStorage<string[]>('favorites', []);
  
  const addFavorite = (itemId: string) => {
    if (!favorites.includes(itemId)) {
      setFavorites([...favorites, itemId]);
    }
  };
  
  const removeFavorite = (itemId: string) => {
    setFavorites(favorites.filter(id => id !== itemId));
  };
  
  const isFavorite = (itemId: string) => {
    return favorites.includes(itemId);
  };
  
  const toggleFavorite = (itemId: string) => {
    if (isFavorite(itemId)) {
      removeFavorite(itemId);
    } else {
      addFavorite(itemId);
    }
  };
  
  return {
    favorites,
    addFavorite,
    removeFavorite,
    isFavorite,
    toggleFavorite,
    count: favorites.length
  };
}