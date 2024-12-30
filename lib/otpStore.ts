// Replace in-memory store with a database solution
// Example using Redis or similar persistent store
import { Redis } from '@upstash/redis'

const redis = new Redis({
  url: process.env.REDIS_URL!,
  token: process.env.REDIS_TOKEN!,
})

export const otpStore = {
  async set(email: string, data: { otp: string; expiry: number }) {
    await redis.set(email, JSON.stringify(data), { ex: 300 }) // 5 minutes
  },
  async get(email: string) {
    return redis.get(email)
  },
  async delete(email: string) {
    await redis.del(email)
  }
}