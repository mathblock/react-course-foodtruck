interface ResetFiltersProps {
  onReset: () => void;
}

export default function ResetFilters({ onReset }: ResetFiltersProps) {
  return (
    <button
      onClick={onReset}
      className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-gray-300"
    >
      Réinitialiser les filtres
    </button>
  );
}