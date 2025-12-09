import { useNavigate, useParams } from "react-router-dom";
import menuData from "@/data/menuData";
import type { MenuItem } from "@/types/menu";

export default function CategoryPage() {
  const params = useParams<{ categoryName: string }>();
  const categoryName: string | undefined = params.categoryName;
  const categorys: string[] = ["entrees", "plats", "desserts", "boissons"];
  const navigate = useNavigate();

  if (!categoryName || !categorys.includes(categoryName)) {
    setTimeout(() => navigate("*"), 0);
    return null;
  }

  return (
    <div className="max-w-2xl mx-auto p-6 bg-sdcn-blue-50 rounded-xl shadow-lg">
      <h1 className="text-3xl font-bold mb-6 text-sdcn-blue-700 capitalize">
        {categoryName !== "entrees" ? categoryName.slice(0, -1) : "entrée"}
      </h1>
      {menuData
        .filter((item: MenuItem) => item.category === categoryName)
        .map((filteredItem: MenuItem) => (
          <div className="flex items-center gap-4" key={filteredItem.id}>
            <img
              src={filteredItem.imageUrl}
              alt={filteredItem.name}
              className="w-20 h-20 object-cover rounded-md"
            />
            <div
              key={filteredItem.id}
              className="mb-6 pb-4 border-b border-sdcn-gray-200 last:border-b-0"
            >
              <h2 className="text-xl font-semibold text-sdcn-blue-600 mb-2">
                {filteredItem.name}
              </h2>
              <p className="text-sdcn-gray-700 mb-1">
                {filteredItem.description}
              </p>
              <p className="text-sdcn-green-600 font-bold">
                Prix : {filteredItem.price.toFixed(2)} €
              </p>
            </div>
          </div>
        ))}
    </div>
  );
}
