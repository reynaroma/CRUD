import mongoose from "mongoose";

const MONGODB_URL = process.env.MONGODB_URL;

if(!MONGODB_URL) { // Check if MONGODB_URL is defined
  throw new Error(
    'Please define the MONGODB_URL environment variable inside .env.local'
  )
};

