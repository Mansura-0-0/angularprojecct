import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI;

const client = new MongoClient(uri);

let db;

try {
  const conn = await client.connect();
  db = conn.db("WP1");
  console.log("Connected to MongoDB");
} catch (err) {
  console.error(" MongoDB connection failed:", err);
  process.exit(1);
}

export default db; 