import sqlite3 from "sqlite3";
import { promisify } from "util";
import fs from "fs";
import path from "path";

const dbPath = process.env.DATABASE_PATH || "./database/foodtruck.db";
const schemaPath = path.join(__dirname, "../../database/schema.sql");
const seedsPath = path.join(__dirname, "../../database/seeds.sql");

export class Database {
  private db: sqlite3.Database;

  constructor() {
    // Ensure database directory exists
    const dbDir = path.dirname(dbPath);
    if (!fs.existsSync(dbDir)) {
      fs.mkdirSync(dbDir, { recursive: true });
    }

    this.db = new sqlite3.Database(dbPath, (err) => {
      if (err) {
        console.error("Error opening database:", err);
        throw err;
      }
      console.log("✅ Connected to SQLite database");
    });
  }

  private run(sql: string, params: any[] = []): Promise<void> {
    return new Promise((resolve, reject) => {
      this.db.run(sql, params, function (err) {
        if (err) reject(err);
        else resolve();
      });
    });
  }

  private all<T>(sql: string, params: any[] = []): Promise<T[]> {
    return new Promise((resolve, reject) => {
      this.db.all(sql, params, (err, rows) => {
        if (err) reject(err);
        else resolve(rows as T[]);
      });
    });
  }

  private get<T>(sql: string, params: any[] = []): Promise<T | undefined> {
    return new Promise((resolve, reject) => {
      this.db.get(sql, params, (err, row) => {
        if (err) reject(err);
        else resolve(row as T);
      });
    });
  }

  async initialize(): Promise<void> {
    try {
      // Check if database is already initialized
      const tables = await this.all<{ name: string }>(
        "SELECT name FROM sqlite_master WHERE type='table' AND name='menu_items'"
      );

      if (tables.length > 0) {
        console.log("✅ Database already initialized");
        return;
      }

      console.log("📦 Initializing database...");

      // Read and execute schema
      const schema = fs.readFileSync(schemaPath, "utf-8");
      await this.exec(schema);
      console.log("✅ Schema created");

      // Read and execute seeds
      const seeds = fs.readFileSync(seedsPath, "utf-8");
      await this.exec(seeds);
      console.log("✅ Seed data inserted");

      console.log("🎉 Database initialization complete!");
    } catch (error) {
      console.error("❌ Error initializing database:", error);
      throw error;
    }
  }

  private exec(sql: string): Promise<void> {
    return new Promise((resolve, reject) => {
      this.db.exec(sql, (err) => {
        if (err) reject(err);
        else resolve();
      });
    });
  }

  // Menu queries
  async getAllMenuItems(): Promise<any[]> {
    const items = await this.all<any>(`
      SELECT 
        m.*,
        c.slug as category
      FROM menu_items m
      JOIN categories c ON m.category_id = c.id
      ORDER BY m.created_at DESC
    `);

    // Get allergens for each item
    for (const item of items) {
      const allergens = await this.all<{ name: string }>(
        `
        SELECT a.name
        FROM allergens a
        JOIN menu_item_allergens mia ON a.id = mia.allergen_id
        WHERE mia.menu_item_id = ?
      `,
        [item.id]
      );

      item.allergens = allergens.map((a) => a.name);
      item.isVegetarian = Boolean(item.is_vegetarian);
      item.isNew = Boolean(item.is_new);
      item.imageUrl = item.image_url;

      // Remove snake_case properties
      delete item.is_vegetarian;
      delete item.is_new;
      delete item.image_url;
      delete item.category_id;
      delete item.created_at;
    }

    return items;
  }

  async createMenuItem(item: {
    id: string;
    name: string;
    description?: string;
    price: number;
    category: string;
    imageUrl?: string;
    isVegetarian: boolean;
    isNew: boolean;
    rating?: number;
    reviewCount?: number;
    allergens?: string[];
  }): Promise<void> {
    // Get category id from slug
    const category = await this.get<{ id: string }>(
      "SELECT id FROM categories WHERE slug = ?",
      [item.category]
    );
    if (!category) throw new Error("Category not found");

    await this.run(`
      INSERT INTO menu_items (id, name, description, price, category_id, image_url, is_vegetarian, is_new, rating, review_count)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `, [
      item.id,
      item.name,
      item.description || null,
      item.price,
      category.id,
      item.imageUrl || null,
      item.isVegetarian ? 1 : 0,
      item.isNew ? 1 : 0,
      item.rating || 0,
      item.reviewCount || 0
    ]);

    // Add allergens
    if (item.allergens && item.allergens.length > 0) {
      for (const allergenName of item.allergens) {
        // Get or create allergen
        let allergen = await this.get<{ id: string }>(
          "SELECT id FROM allergens WHERE name = ?",
          [allergenName]
        );
        if (!allergen) {
          const allergenId = `allergen_${allergenName.toLowerCase().replace(/\s+/g, '_')}`;
          await this.run("INSERT INTO allergens (id, name) VALUES (?, ?)", [allergenId, allergenName]);
          allergen = { id: allergenId };
        }
        await this.run(
          "INSERT INTO menu_item_allergens (menu_item_id, allergen_id) VALUES (?, ?)",
          [item.id, allergen.id]
        );
      }
    }
  }

  async updateMenuItem(id: string, item: {
    name?: string;
    description?: string;
    price?: number;
    category?: string;
    imageUrl?: string;
    isVegetarian?: boolean;
    isNew?: boolean;
    allergens?: string[];
  }): Promise<void> {
    const updates: string[] = [];
    const params: any[] = [];

    if (item.name !== undefined) {
      updates.push("name = ?");
      params.push(item.name);
    }
    if (item.description !== undefined) {
      updates.push("description = ?");
      params.push(item.description);
    }
    if (item.price !== undefined) {
      updates.push("price = ?");
      params.push(item.price);
    }
    if (item.category !== undefined) {
      const category = await this.get<{ id: string }>(
        "SELECT id FROM categories WHERE slug = ?",
        [item.category]
      );
      if (!category) throw new Error("Category not found");
      updates.push("category_id = ?");
      params.push(category.id);
    }
    if (item.imageUrl !== undefined) {
      updates.push("image_url = ?");
      params.push(item.imageUrl);
    }
    if (item.isVegetarian !== undefined) {
      updates.push("is_vegetarian = ?");
      params.push(item.isVegetarian ? 1 : 0);
    }
    if (item.isNew !== undefined) {
      updates.push("is_new = ?");
      params.push(item.isNew ? 1 : 0);
    }

    if (updates.length > 0) {
      params.push(id);
      await this.run(`UPDATE menu_items SET ${updates.join(", ")} WHERE id = ?`, params);
    }

    // Update allergens if provided
    if (item.allergens !== undefined) {
      // Remove existing allergens
      await this.run("DELETE FROM menu_item_allergens WHERE menu_item_id = ?", [id]);

      // Add new allergens
      for (const allergenName of item.allergens) {
        let allergen = await this.get<{ id: string }>(
          "SELECT id FROM allergens WHERE name = ?",
          [allergenName]
        );
        if (!allergen) {
          const allergenId = `allergen_${allergenName.toLowerCase().replace(/\s+/g, '_')}`;
          await this.run("INSERT INTO allergens (id, name) VALUES (?, ?)", [allergenId, allergenName]);
          allergen = { id: allergenId };
        }
        await this.run(
          "INSERT INTO menu_item_allergens (menu_item_id, allergen_id) VALUES (?, ?)",
          [id, allergen.id]
        );
      }
    }
  }

  async deleteMenuItem(id: string): Promise<void> {
    await this.run("DELETE FROM menu_items WHERE id = ?", [id]);
  }

  async getMenuItemById(id: string): Promise<any | undefined> {
    const item = await this.get<any>(
      `
      SELECT 
        m.*,
        c.slug as category
      FROM menu_items m
      JOIN categories c ON m.category_id = c.id
      WHERE m.id = ?
    `,
      [id]
    );

    if (!item) return undefined;

    // Get allergens
    const allergens = await this.all<{ name: string }>(
      `
      SELECT a.name
      FROM allergens a
      JOIN menu_item_allergens mia ON a.id = mia.allergen_id
      WHERE mia.menu_item_id = ?
    `,
      [id]
    );

    item.allergens = allergens.map((a) => a.name);
    item.isVegetarian = Boolean(item.is_vegetarian);
    item.isNew = Boolean(item.is_new);
    item.imageUrl = item.image_url;

    // Remove snake_case properties
    delete item.is_vegetarian;
    delete item.is_new;
    delete item.image_url;
    delete item.category_id;
    delete item.created_at;

    return item;
  }

  async getMenuItemsByCategory(category: string): Promise<any[]> {
    const items = await this.all<any>(
      `
      SELECT 
        m.*,
        c.slug as category
      FROM menu_items m
      JOIN categories c ON m.category_id = c.id
      WHERE c.slug = ?
      ORDER BY m.created_at DESC
    `,
      [category]
    );

    // Get allergens for each item
    for (const item of items) {
      const allergens = await this.all<{ name: string }>(
        `
        SELECT a.name
        FROM allergens a
        JOIN menu_item_allergens mia ON a.id = mia.allergen_id
        WHERE mia.menu_item_id = ?
      `,
        [item.id]
      );

      item.allergens = allergens.map((a) => a.name);
      item.isVegetarian = Boolean(item.is_vegetarian);
      item.isNew = Boolean(item.is_new);
      item.imageUrl = item.image_url;

      // Remove snake_case properties
      delete item.is_vegetarian;
      delete item.is_new;
      delete item.image_url;
      delete item.category_id;
      delete item.created_at;
    }

    return items;
  }

  // User queries
  async getAllUsers(): Promise<any[]> {
    const users = await this.all<any>(`
      SELECT id, email, first_name, last_name, phone, avatar, role, created_at
      FROM users
      ORDER BY created_at DESC
    `);

    return users.map(user => ({
      id: user.id,
      email: user.email,
      firstName: user.first_name,
      lastName: user.last_name,
      phone: user.phone,
      avatar: user.avatar,
      role: user.role,
      createdAt: user.created_at,
    }));
  }

  async upsertUser(user: {
    id: string;
    email: string;
    firstName: string;
    lastName: string;
    avatar?: string;
    role?: string;
  }): Promise<void> {
    await this.run(`
      INSERT INTO users (id, email, first_name, last_name, avatar, role, created_at)
      VALUES (?, ?, ?, ?, ?, ?, CURRENT_TIMESTAMP)
      ON CONFLICT(id) DO UPDATE SET
        email = excluded.email,
        first_name = excluded.first_name,
        last_name = excluded.last_name,
        avatar = excluded.avatar,
        role = excluded.role
    `, [user.id, user.email, user.firstName, user.lastName, user.avatar || null, user.role || 'customer']);
  }

  // Promo code queries
  async getAllPromoCodes(): Promise<any[]> {
    const codes = await this.all<any>(`
      SELECT id, code, discount_percent, description, min_amount, expires_at
      FROM promo_codes
      ORDER BY code
    `);

    return codes.map(code => ({
      id: code.id,
      code: code.code,
      discount: code.discount_percent,
      description: code.description,
      minAmount: code.min_amount,
      expiresAt: code.expires_at,
    }));
  }

  async createPromoCode(code: {
    id: string;
    code: string;
    discount: number;
    description: string;
    minAmount?: number;
    expiresAt?: string;
  }): Promise<void> {
    await this.run(`
      INSERT INTO promo_codes (id, code, discount_percent, description, min_amount, expires_at)
      VALUES (?, ?, ?, ?, ?, ?)
    `, [
      code.id,
      code.code,
      code.discount,
      code.description,
      code.minAmount || null,
      code.expiresAt || null
    ]);
  }

  async updatePromoCode(id: string, code: {
    code?: string;
    discount?: number;
    description?: string;
    minAmount?: number;
    expiresAt?: string;
  }): Promise<void> {
    const updates: string[] = [];
    const params: any[] = [];

    if (code.code !== undefined) {
      updates.push("code = ?");
      params.push(code.code);
    }
    if (code.discount !== undefined) {
      updates.push("discount_percent = ?");
      params.push(code.discount);
    }
    if (code.description !== undefined) {
      updates.push("description = ?");
      params.push(code.description);
    }
    if (code.minAmount !== undefined) {
      updates.push("min_amount = ?");
      params.push(code.minAmount);
    }
    if (code.expiresAt !== undefined) {
      updates.push("expires_at = ?");
      params.push(code.expiresAt);
    }

    if (updates.length > 0) {
      params.push(id);
      await this.run(`UPDATE promo_codes SET ${updates.join(", ")} WHERE id = ?`, params);
    }
  }

  async deletePromoCode(id: string): Promise<void> {
    await this.run("DELETE FROM promo_codes WHERE id = ?", [id]);
  }

  close(): void {
    this.db.close((err) => {
      if (err) {
        console.error("Error closing database:", err);
      } else {
        console.log("Database connection closed");
      }
    });
  }
}

// Singleton instance
let dbInstance: Database | null = null;

export function getDatabase(): Database {
  if (!dbInstance) {
    dbInstance = new Database();
  }
  return dbInstance;
}
