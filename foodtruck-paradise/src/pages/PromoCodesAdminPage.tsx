import { useEffect, useState } from 'react';
import type { PromoCode } from '../data/promoCodes';

export default function PromoCodesAdminPage() {
  const [codes, setCodes] = useState<PromoCode[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [editingCode, setEditingCode] = useState<PromoCode | null>(null);
  const [showCreateForm, setShowCreateForm] = useState(false);

  useEffect(() => {
    fetchPromoCodes();
  }, []);

  const fetchPromoCodes = async () => {
    try {
      const response = await fetch('http://localhost:3000/api/promo');
      if (!response.ok) {
        throw new Error('Failed to fetch promo codes');
      }
      const data = await response.json();
      setCodes(data.data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  const handleCreate = async (code: Omit<PromoCode, 'code'> & { code: string }) => {
    try {
      const newId = `promo_${Date.now()}`;
      const response = await fetch('http://localhost:3000/api/promo', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...code, id: newId }),
      });
      if (!response.ok) throw new Error('Failed to create promo code');
      await fetchPromoCodes();
      setShowCreateForm(false);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to create promo code');
    }
  };

  const handleUpdate = async (id: string, code: Partial<PromoCode>) => {
    try {
      const response = await fetch(`http://localhost:3000/api/promo/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(code),
      });
      if (!response.ok) throw new Error('Failed to update promo code');
      await fetchPromoCodes();
      setEditingCode(null);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to update promo code');
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this promo code?')) return;
    try {
      const response = await fetch(`http://localhost:3000/api/promo/${id}`, {
        method: 'DELETE',
      });
      if (!response.ok) throw new Error('Failed to delete promo code');
      await fetchPromoCodes();
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to delete promo code');
    }
  };

  if (loading) {
    return <div>Loading promo codes...</div>;
  }

  if (error) {
    return <div className="text-red-500">Error: {error}</div>;
  }

  return (
    <>
      <h1 className="text-3xl font-bold mb-6">Admin - Promo Codes</h1>

      <div className="mb-4">
        <button
          onClick={() => setShowCreateForm(true)}
          className="admin-button"
        >
          Add New Promo Code
        </button>
      </div>

      {showCreateForm && (
        <PromoCodeForm
          onSubmit={handleCreate}
          onCancel={() => setShowCreateForm(false)}
        />
      )}

      {editingCode && (
        <PromoCodeForm
          code={editingCode}
          onSubmit={(code) => handleUpdate(editingCode.id!, code)}
          onCancel={() => setEditingCode(null)}
        />
      )}

      <div className="admin-card">
        <div className="admin-table-wrapper">
          <table className="min-w-full divide-y divide-gray-200 admin-table">
            <thead>
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium">Code</th>
                <th className="px-6 py-3 text-left text-xs font-medium">Discount</th>
                <th className="px-6 py-3 text-left text-xs font-medium">Description</th>
                <th className="px-6 py-3 text-left text-xs font-medium">Min amount</th>
                <th className="px-6 py-3 text-left text-xs font-medium">Expires At</th>
                <th className="px-6 py-3 text-left text-xs font-medium">Actions</th>
              </tr>
            </thead>
            <tbody>
              {codes.map((c) => (
                <tr key={c.code}>
                  <td className="px-6 py-4 code">{c.code}</td>
                  <td className="px-6 py-4">{Math.round(c.discount * 100)}%</td>
                  <td className="px-6 py-4">{c.description}</td>
                  <td className="px-6 py-4">{c.minAmount ? `€${c.minAmount}` : '—'}</td>
                  <td className="px-6 py-4">{c.expiresAt ? new Date(c.expiresAt).toLocaleDateString() : '—'}</td>
                  <td className="px-6 py-4 space-x-2">
                    <button
                      onClick={() => setEditingCode({ ...c, id: c.code })}
                      className="admin-edit-button"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(c.id!)}
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
      <div className="admin-meta">Total promo codes: {codes.length}</div>
    </>
  );
}

function PromoCodeForm({
  code,
  onSubmit,
  onCancel
}: {
  code?: PromoCode;
  onSubmit: (code: any) => void;
  onCancel: () => void;
}) {
  const [formData, setFormData] = useState({
    code: code?.code || '',
    discount: code?.discount || 0,
    description: code?.description || '',
    minAmount: code?.minAmount || '',
    expiresAt: code?.expiresAt ? new Date(code.expiresAt).toISOString().split('T')[0] : '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const data = {
      ...formData,
      discount: parseFloat(formData.discount.toString()),
      minAmount: formData.minAmount ? parseFloat(formData.minAmount.toString()) : undefined,
      expiresAt: formData.expiresAt || undefined,
    };
    onSubmit(data);
  };

  return (
    <div className="admin-form p-6 rounded-lg shadow-md mb-6">
      <h2 className="text-xl font-bold mb-4">{code ? 'Edit' : 'Create'} Promo Code</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1">Code</label>
          <input
            type="text"
            value={formData.code}
            onChange={(e) => setFormData({ ...formData, code: e.target.value.toUpperCase() })}
            className="w-full p-2"
            required
          />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-1">Discount (%)</label>
            <input
              type="number"
              min="0"
              max="1"
              step="0.01"
              value={formData.discount}
              onChange={(e) => setFormData({ ...formData, discount: parseFloat(e.target.value) })}
              className="w-full p-2"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Min Amount (€)</label>
            <input
              type="number"
              min="0"
              step="0.01"
              value={formData.minAmount}
              onChange={(e) => setFormData({ ...formData, minAmount: e.target.value })}
              className="w-full p-2"
            />
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Description</label>
          <input
            type="text"
            value={formData.description}
            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
            className="w-full p-2"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Expires At</label>
          <input
            type="date"
            value={formData.expiresAt}
            onChange={(e) => setFormData({ ...formData, expiresAt: e.target.value })}
            className="w-full p-2"
          />
        </div>
        <div className="flex space-x-2">
          <button type="submit" className="px-4 py-2 rounded">
            {code ? 'Update' : 'Create'}
          </button>
          <button type="button" onClick={onCancel} className="px-4 py-2 rounded">
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}
