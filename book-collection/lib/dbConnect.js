import mongoose from "mongoose";

const MONGODB_URL = process.env.MONGODB_URL;

if (!MONGODB_URL) { // Check if MONGODB_URL is defined
  throw new Error(
    'Please define the MONGODB_URL environment variable inside .env.local'
  )
};

// cached is a global variable that stores the mongoose connection and a promise that resolves when the connection is established
// It is used to prevent multiple connections to the same database
// The connection is stored in the global scope so that it can be reused across the application
// The promise is stored so that it can be awaited when the connection is established
let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null }
}

async function dbConnect() {
  if (cached.conn) {
    return cached.conn;
  }
  if (!cached.promise) {
    cached.promise = mongoose.connect(MONGODB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }).then((mongoose) => {
      return mongoose;
    })
  }
  cached.conn = await cached.promise;
  return cached.conn;
}
export default dbConnect;