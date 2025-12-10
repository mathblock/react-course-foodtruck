interface ResetFiltersProps {
  onReset: () => void;
  className?: string;
}

export default function ResetFilters({ onReset, className }: ResetFiltersProps) {
  return (
    <button
      onClick={onReset}
      className={className ? className : "text-sm text-blue-600 hover:underline"}>
      Réinitialiser les filtres
    </button>
  );
}