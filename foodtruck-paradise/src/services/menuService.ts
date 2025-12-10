import type { MenuItem } from '../types/menu';

const API_BASE_URL = '/api';

export const menuService = {
  async getAllMenuItems(): Promise<MenuItem[]> {
    try {
      const response = await fetch(`${API_BASE_URL}/menu`);
      if (!response.ok) {
        throw new Error('Erreur lors du chargement du menu');
      }
      const result = await response.json();
      return result.data || [];
    } catch (error) {
      console.error('Error fetching menu items:', error);
      throw error;
    }
  },

  async getMenuItemById(id: string): Promise<MenuItem | null> {
    try {
      const response = await fetch(`${API_BASE_URL}/menu/${id}`);
      if (!response.ok) {
        if (response.status === 404) return null;
        throw new Error('Erreur lors du chargement du plat');
      }
      const result = await response.json();
      return result.data || null;
    } catch (error) {
      console.error('Error fetching menu item:', error);
      throw error;
    }
  },

  async getMenuItemsByCategory(category: string): Promise<MenuItem[]> {
    try {
      const response = await fetch(`${API_BASE_URL}/menu?category=${category}`);
      if (!response.ok) {
        throw new Error('Erreur lors du chargement de la catégorie');
      }
      const result = await response.json();
      return result.data || [];
    } catch (error) {
      console.error('Error fetching category items:', error);
      throw error;
    }
  }
};
