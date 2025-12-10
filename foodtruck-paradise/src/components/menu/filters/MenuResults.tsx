interface MenuResultsCounterProps {
  count?: number;
}

export default function MenuResultsCounter({ count }: MenuResultsCounterProps) {
  if (typeof count !== 'number') {
    return null;
  }

  return (
    <p className="text-sm text-gray-600 font-medium">
      {count} {count === 1 ? 'produit trouvé' : 'produits trouvés'}
    </p>
  );
}