import { useState } from "react";

export const  useLocalStorage = <T>(key: string, initialValue: T): [T, (value: T | ((prev: T) => T)) => void,()=>T|undefined] => {
  const [storedValue, setStoredValue] = useState<T>(() => {
    try {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error(error);
      return initialValue;
    }
  });

  const setValue = (value: T | ((prev: T) => T)) => {
    try {
      const valueToStore = value instanceof Function ? value(storedValue) : value;
      localStorage.setItem(key, JSON.stringify(valueToStore));
      setStoredValue(valueToStore);
    } catch (error) {
      console.error(error);
    }
  };

  const loadStoredValue=():T|undefined=>{
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : undefined;
  };

  return [storedValue, setValue,loadStoredValue ];
};