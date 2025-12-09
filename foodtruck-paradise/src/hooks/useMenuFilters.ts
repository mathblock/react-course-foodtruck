import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { defaultFilters, type FilterState } from "../types/menu";
import { parseFiltersFromSearchParams, stringifyFilters } from '../utils/menuFilters';

export function useMenuFilters() {
    const [searchParams, setSearchParams] = useSearchParams();
    const [filters, setFilters] = useState<FilterState>(() => {
        return parseFiltersFromSearchParams(searchParams) || defaultFilters;
    });

    // Synchronisation URL → Filtres (quand l'URL change via navigation)
    useEffect(() => {
        const parsedFilters = parseFiltersFromSearchParams(searchParams);
        setFilters(parsedFilters || defaultFilters);
    }, [searchParams]);

    // Synchronisation Filtres → URL (quand les filtres changent via l'UI)
    const updateFilters = (newFilters: Partial<FilterState>) => {
        setFilters(prev => {
            const updated = { ...prev, ...newFilters };
            setSearchParams(stringifyFilters(updated), { replace: true });
            return updated;
        });
    };

    const resetFilters = () => {
        setFilters(defaultFilters);
        setSearchParams(stringifyFilters(defaultFilters), { replace: true });
    };

    return { filters, updateFilters, resetFilters };
}