import Redis from "ioredis";
import dotenv from "dotenv";

dotenv.config();

console.log("DEBUG: Connecting to Redis at:", process.env.UPSTASH_REDIS_URL);
export const redis = new Redis(process.env.UPSTASH_REDIS_URL);
