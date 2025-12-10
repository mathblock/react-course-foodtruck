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

  async getCartItems(): Promise<any[]> {
    // Pour l'instant, on retourne un panier vide car il n'y a pas de système d'authentification
    // TODO: Implémenter la gestion des paniers par utilisateur avec sessions/auth
    
    // Retourne les items de tous les paniers (temporaire, en attendant l'auth)
    const cartItems = await this.all<any>(`
      SELECT 
        ci.id as cart_item_id,
        ci.quantity,
        m.*,
        c.slug as category
      FROM cart_items ci
      JOIN menu_items m ON ci.menu_item_id = m.id
      JOIN categories c ON m.category_id = c.id
      ORDER BY ci.id DESC
    `);

    // Get allergens for each item
    for (const item of cartItems) {
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
    
    return cartItems;
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