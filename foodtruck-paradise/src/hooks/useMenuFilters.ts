import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { defaultFilters, type FilterState } from "../types/menu";
import { parseFiltersFromSearchParams, stringifyFilters } from '../utils/menuFilters';

export function useMenuFilters(){
    const [searchParams, setSearchParams] = useSearchParams();
    const [filters, setFilters] = useState<FilterState>(()=> {
        return parseFiltersFromSearchParams(searchParams) || defaultFilters;
    });
    // synchro url
    useEffect(()=>{
        setSearchParams(stringifyFilters(filters), {replace: true});
    }, [filters, setSearchParams]);

    const updateFilters = (newFilters: Partial<FilterState>) => {
        setFilters(prev => ({...prev, ...newFilters}));
    };
    const resetFilters = () => {
        setFilters(defaultFilters);
    };

    return {filters, updateFilters, resetFilters};
}