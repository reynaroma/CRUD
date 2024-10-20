import mongoose from "mongoose";

const MONGODB_URL = process.env.MONGODB_URL;

if(!MONGODB_URL) { // Check if MONGODB_URL is defined
  throw new Error(
    'Please define the MONGODB_URL environment variable inside .env.local'
  )
};

let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null}
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