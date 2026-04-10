import { MongoClient } from "mongodb";

const connectionString = "mongodb://mansura:sYFJQOs2o9oQDl2m@ac-ilfdceg-shard-00-00.ow6bg9l.mongodb.net:27017,ac-ilfdceg-shard-00-01.ow6bg9l.mongodb.net:27017,ac-ilfdceg-shard-00-02.ow6bg9l.mongodb.net:27017/WP1?ssl=true&replicaSet=atlas-j8rs3r-shard-0&authSource=admin&retryWrites=true&w=majority";

const client = new MongoClient(connectionString);

let db;

try {
  const conn = await client.connect();
  db = conn.db("WP1");
  console.log(" Connected to MongoDB");
} catch (e) {
  console.error("MongoDB connection failed:", e);
  process.exit(1);
}

export default db;