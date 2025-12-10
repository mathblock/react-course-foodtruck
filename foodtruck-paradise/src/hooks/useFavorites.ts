import { useLocalStorage } from "./useLocalStorage";

// src/hooks/useFavorites.ts
export function useFavorites() {
  const [favorites,setFavorites,loadStoredValue] = useLocalStorage<string[]>('favorites', []);
  
  const addFavorite = (itemId: string) => {
    if (!favorites.includes(itemId)) {
      const favs= loadStoredValue() as string[];
      setFavorites([...favs, itemId]);
    }
  };
  
  const removeFavorite = (itemId: string) => {
    const favs= loadStoredValue() as string[];
    setFavorites(favs.filter(id => id !== itemId));
  };
  
  const isFavorite = (itemId: string) => {
    const favs= loadStoredValue() as string[];
    return favs.includes(itemId);
  };
  
  const toggleFavorite = (itemId: string) => {
    if (isFavorite(itemId)) {
      removeFavorite(itemId);
    } else {
      addFavorite(itemId);
    }
  };
  
  return {
    favorites:loadStoredValue()??[],
    addFavorite,
    removeFavorite,
    isFavorite,
    toggleFavorite,
    count: ()=>{
      return loadStoredValue()?.length||0;
    }
  };
}