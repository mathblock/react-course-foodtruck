import { useEffect, useState } from 'react';
import type { MenuItem } from '../types/menu';

export default function MenuAdminPage() {
  const [items, setItems] = useState<MenuItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [editingItem, setEditingItem] = useState<MenuItem | null>(null);
  const [showCreateForm, setShowCreateForm] = useState(false);

  useEffect(() => {
    fetchMenuItems();
  }, []);

  const fetchMenuItems = async () => {
    try {
      const response = await fetch('http://localhost:3000/api/menu');
      if (!response.ok) {
        throw new Error('Failed to fetch menu items');
      }
      const data = await response.json();
      setItems(data.data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  const handleCreate = async (item: Omit<MenuItem, 'id'>) => {
    try {
      const newId = `item_${Date.now()}`;
      const response = await fetch('http://localhost:3000/api/menu', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...item, id: newId }),
      });
      if (!response.ok) throw new Error('Failed to create menu item');
      await fetchMenuItems();
      setShowCreateForm(false);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to create item');
    }
  };

  const handleUpdate = async (id: string, item: Partial<MenuItem>) => {
    try {
      const response = await fetch(`http://localhost:3000/api/menu/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(item),
      });
      if (!response.ok) throw new Error('Failed to update menu item');
      await fetchMenuItems();
      setEditingItem(null);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to update item');
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this menu item?')) return;
    try {
      const response = await fetch(`http://localhost:3000/api/menu/${id}`, {
        method: 'DELETE',
      });
      if (!response.ok) throw new Error('Failed to delete menu item');
      await fetchMenuItems();
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to delete item');
    }
  };

  if (loading) return <div>Loading menu...</div>;

  if (error) return <div className="text-red-500">Error: {error}</div>;

  return (
    <>
      <h1 className="text-3xl font-bold mb-6">Admin - Menu Items</h1>

      <div className="mb-4">
        <button
          onClick={() => setShowCreateForm(true)}
          className="admin-button"
        >
          Add New Item
        </button>
      </div>

      {showCreateForm && (
        <MenuItemForm
          onSubmit={handleCreate}
          onCancel={() => setShowCreateForm(false)}
        />
      )}

      {editingItem && (
        <MenuItemForm
          item={editingItem}
          onSubmit={(item) => handleUpdate(editingItem.id, item)}
          onCancel={() => setEditingItem(null)}
        />
      )}

      <div className="admin-card">
        <div className="admin-table-wrapper">
          <table className="min-w-full divide-y divide-gray-200 admin-table">
            <thead>
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium">ID</th>
                <th className="px-6 py-3 text-left text-xs font-medium">Name</th>
                <th className="px-6 py-3 text-left text-xs font-medium">Category</th>
                <th className="px-6 py-3 text-left text-xs font-medium">Price</th>
                <th className="px-6 py-3 text-left text-xs font-medium">Veg ?</th>
                <th className="px-6 py-3 text-left text-xs font-medium">Rating</th>
                <th className="px-6 py-3 text-left text-xs font-medium">Actions</th>
              </tr>
            </thead>
            <tbody>
              {items.map((it) => (
                <tr key={it.id}>
                  <td className="px-6 py-4 code">{it.id}</td>
                  <td className="px-6 py-4">{it.name}</td>
                  <td className="px-6 py-4">{it.category}</td>
                  <td className="px-6 py-4">€{it.price.toFixed(2)}</td>
                  <td className="px-6 py-4">
                    <span className={`role-badge ${it.isVegetarian ? 'veg-yes' : 'veg-no'}`}>
                      {it.isVegetarian ? 'Yes' : 'No'}
                    </span>
                  </td>
                  <td className="px-6 py-4">{it.rating} ({it.reviewCount})</td>
                  <td className="px-6 py-4 space-x-2">
                    <button
                      onClick={() => setEditingItem(it)}
                      className="admin-edit-button"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(it.id)}
                      className="admin-delete-button"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className="admin-meta">Total menu items: {items.length}</div>
    </>
  );
}

function MenuItemForm({
  item,
  onSubmit,
  onCancel
}: {
  item?: MenuItem;
  onSubmit: (item: any) => void;
  onCancel: () => void;
}) {
  const [formData, setFormData] = useState({
    name: item?.name || '',
    description: item?.description || '',
    price: item?.price || 0,
    category: item?.category || 'plats',
    isVegetarian: item?.isVegetarian || false,
    isNew: item?.isNew || false,
    allergens: item?.allergens?.join(', ') || '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const data = {
      ...formData,
      allergens: formData.allergens.split(',').map(a => a.trim()).filter(a => a),
    };
    onSubmit(data);
  };

  return (
    <div className="admin-form p-6 rounded-lg shadow-md mb-6">
      <h2 className="text-xl font-bold mb-4">{item ? 'Edit' : 'Create'} Menu Item</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1">Name</label>
          <input
            type="text"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full p-2"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Description</label>
          <textarea
            value={formData.description}
            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
            className="w-full p-2"
            rows={3}
          />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-1">Price</label>
            <input
              type="number"
              step="0.01"
              value={formData.price}
              onChange={(e) => setFormData({ ...formData, price: parseFloat(e.target.value) })}
              className="w-full p-2"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Category</label>
            <select
              value={formData.category}
              onChange={(e) => setFormData({ ...formData, category: e.target.value as MenuItem['category'] })}
              className="w-full p-2"
            >
              <option value="entrees">Entrées</option>
              <option value="plats">Plats</option>
              <option value="desserts">Desserts</option>
              <option value="boissons">Boissons</option>
            </select>
          </div>
        </div>
        <div className="flex space-x-4">
          <label className="flex items-center">
            <input
              type="checkbox"
              checked={formData.isVegetarian}
              onChange={(e) => setFormData({ ...formData, isVegetarian: e.target.checked })}
              className="mr-2"
            />
            Vegetarian
          </label>
          <label className="flex items-center">
            <input
              type="checkbox"
              checked={formData.isNew}
              onChange={(e) => setFormData({ ...formData, isNew: e.target.checked })}
              className="mr-2"
            />
            New
          </label>
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Allergens (comma-separated)</label>
          <input
            type="text"
            value={formData.allergens}
            onChange={(e) => setFormData({ ...formData, allergens: e.target.value })}
            className="w-full p-2"
            placeholder="gluten, lactose, etc."
          />
        </div>
        <div className="flex space-x-2">
          <button type="submit" className="px-4 py-2 rounded">
            {item ? 'Update' : 'Create'}
          </button>
          <button type="button" onClick={onCancel} className="px-4 py-2 rounded">
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}
