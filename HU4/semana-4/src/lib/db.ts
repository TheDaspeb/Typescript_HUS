import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI || "";

if (!MONGODB_URI) {
    throw new Error("Define MONGODB_URI en el archivo .env");
}

type Cache = {
    conn: typeof mongoose | null;
    promise: Promise<typeof mongoose> | null;
};

const globalCache = globalThis as typeof globalThis & {
    mongoose: Cache | undefined;
};

const cached: Cache =
    globalCache.mongoose ||
    (globalCache.mongoose = {
        conn: null,
        promise: null,
    });

export async function connectDB() {
    if (cached.conn) {
        return cached.conn;
    }

    if (!cached.promise) {
        cached.promise = mongoose.connect(MONGODB_URI);
    }

    cached.conn = await cached.promise;
    return cached.conn;
}
