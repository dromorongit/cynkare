import { MongoClient } from 'mongodb';

const globalForMongo = globalThis as unknown as {
  mongoClient: MongoClient | undefined;
};

const uri = process.env.DATABASE_URL;
if (!uri) {
  throw new Error('DATABASE_URL environment variable is not set');
}

export const mongoClient = globalForMongo.mongoClient ?? new MongoClient(uri, {
  maxPoolSize: 10,
  minPoolSize: 0,
  maxIdleTimeMS: 30000,
});

globalForMongo.mongoClient = mongoClient;