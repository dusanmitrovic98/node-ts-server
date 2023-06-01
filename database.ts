import { MongoClient, Db } from "mongodb";

let db: Db;

export async function connectDatabase(): Promise<void> {
  const url = "mongodb://localhost:27017";
  const dbName = "database-test";

  const client = new MongoClient(url);

  try {
    await client.connect();
    console.log("Connected to MongoDB");
    db = client.db(dbName);
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
}
