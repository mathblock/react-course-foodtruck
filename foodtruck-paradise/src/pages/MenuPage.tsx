import { useEffect, useState } from "react";
import { type MenuItem } from "../types/menu";
import { menuService } from "../services/menuService";
import { useCart } from "../context/CartContext";
import "../styles/MenuPage.css";

function MenuPage() {
  const [menuItems, setMenuItems] = useState<MenuItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const { addToCart } = useCart();

  useEffect(() => {
    const fetchMenu = async () => {
      try {
        setLoading(true);
        const items = await menuService.getAllMenuItems();
        setMenuItems(items);
        setError(null);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Erreur inconnue");
        setMenuItems([]);
      } finally {
        setLoading(false);
      }
    };

    fetchMenu();
  }, []);

  const categories = [
    { id: "all", label: "Tous les plats" },
    { id: "entrees", label: "Entrées" },
    { id: "plats", label: "Plats" },
    { id: "desserts", label: "Desserts" },
    { id: "boissons", label: "Boissons" },
  ];

  const filteredItems =
    selectedCategory === "all"
      ? menuItems
      : menuItems.filter((item) => item.category === selectedCategory);

  if (loading) {
    return (
      <div className="menu-page">
        <div className="menu-loading">Chargement du menu...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="menu-page">
        <div className="menu-error">
          <p>{error}</p>
          <p>Veuillez réessayer plus tard.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="menu-page">
      <div className="menu-header">
        <h1>Notre Menu</h1>
        <p>Découvrez nos délicieuses spécialités</p>
      </div>

      <div className="menu-filters">
        {categories.map((category) => (
          <button
            key={category.id}
            className={`filter-btn ${
              selectedCategory === category.id ? "active" : ""
            }`}
            onClick={() => setSelectedCategory(category.id)}
          >
            {category.label}
          </button>
        ))}
      </div>

      <div className="menu-items">
        {filteredItems.length > 0 ? (
          filteredItems.map((item) => (
            <div key={item.id} className="menu-item">
              <div className="item-image">
                <img src={item.imageUrl} alt={item.name} />
                {item.isNew && <span className="badge-new">Nouveau</span>}
                {item.isVegetarian && (
                  <span className="badge-vegetarian">Végétarien</span>
                )}
              </div>
              <div className="item-content">
                <h3>{item.name}</h3>
                <p className="item-description">{item.description}</p>

                <div className="item-meta">
                  <div className="rating">
                    <span className="stars">{item.rating}</span>
                    <span className="reviews">({item.reviewCount} avis)</span>
                  </div>
                  {item.allergens.length > 0 && (
                    <div className="allergens">
                      <span className="allergen-label">Allergènes:</span>
                      {item.allergens.map((allergen) => (
                        <span key={allergen} className="allergen-tag">
                          {allergen}
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                <div className="item-footer">
                  <span className="item-price">{item.price}€</span>
                  <button 
                    className="btn-add-cart"
                    onClick={() => addToCart(item, 1)}
                  >
                    Ajouter au panier
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="no-items">
            <p>Aucun plat disponible dans cette catégorie</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default MenuPage;
