import { useEffect} from "react";
import { useSearchParams } from "react-router-dom";
import { defaultFilters, type FilterState } from "../types/menu";
import { parseFiltersFromSearchParams, stringifyFilters } from '../utils/menuFilters';
import { useLocalStorage } from "./useLocalStorage";

export function useMenuFilters(){
    const [searchParams, setSearchParams] = useSearchParams();
    const [filters, setFilters] = useLocalStorage<FilterState>('menu-filters',
         parseFiltersFromSearchParams(searchParams) || defaultFilters
    );
    // synchro url
    useEffect(()=>{
        setSearchParams(stringifyFilters(filters), {replace: true});
    }, [filters]);

    const updateFilters = (newFilters: Partial<FilterState>) => {
        setFilters({...filters, ...newFilters});
    };
    const resetFilters = () => {
        setFilters(defaultFilters);
    };

    return {filters, updateFilters, resetFilters};
}