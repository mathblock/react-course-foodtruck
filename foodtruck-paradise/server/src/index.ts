import express, { Application, Request, Response } from "express";
import cors from "cors";
import dotenv from "dotenv";
import { getDatabase } from "./config/database";
import menuRoutes from "./routes/menuRoutes";

// Load environment variables
dotenv.config();

const app: Application = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(
  cors({
    origin: "http://localhost:5173", // Vite dev server
    credentials: true,
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Request logging middleware
app.use((req: Request, res: Response, next) => {
  console.log(`${new Date().toISOString()} - ${req.method} ${req.path}`);
  next();
});

// API Routes
app.use("/api/menu", menuRoutes);

// Health check endpoint
app.get("/health", (req: Request, res: Response) => {
  res.json({
    status: "ok",
    message: "FoodTruck Paradise API is running",
    timestamp: new Date().toISOString(),
  });
});

// Root endpoint
app.get("/", (req: Request, res: Response) => {
  res.json({
    message: "Welcome to FoodTruck Paradise API",
    version: "1.0.0",
    endpoints: {
      health: "/health",
      menu: "/api/menu",
      menuById: "/api/menu/:id",
    },
  });
});

// 404 handler
app.use((req: Request, res: Response) => {
  res.status(404).json({
    success: false,
    error: "Route not found",
  });
});

// Error handler
app.use((err: Error, req: Request, res: Response, next: any) => {
  console.error("Error:", err.stack);
  res.status(500).json({
    success: false,
    error: "Internal server error",
  });
});

// Initialize database and start server
async function startServer() {
  try {
    console.log("🚀 Starting FoodTruck Paradise API...");

    // Initialize database
    const db = getDatabase();
    await db.initialize();

    // Start Express server
    app.listen(PORT, () => {
      console.log(`\n✅ Server is running on http://localhost:${PORT}`);
      console.log(`📊 API Documentation: http://localhost:${PORT}`);
      console.log(`🏥 Health check: http://localhost:${PORT}/health`);
      console.log(`🍔 Menu API: http://localhost:${PORT}/api/menu\n`);
    });
  } catch (error) {
    console.error("❌ Failed to start server:", error);
    process.exit(1);
  }
}

// Handle graceful shutdown
process.on("SIGINT", () => {
  console.log("\n⏹️  Shutting down gracefully...");
  const db = getDatabase();
  db.close();
  process.exit(0);
});

process.on("SIGTERM", () => {
  console.log("\n⏹️  Shutting down gracefully...");
  const db = getDatabase();
  db.close();
  process.exit(0);
});

// Start the server
startServer();
