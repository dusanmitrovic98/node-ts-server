import { MongoClient, Db } from "mongodb";

let db: Db;

export async function connectDatabase(): Promise<void> {
  const url = "mongodb://localhost:27017";
}