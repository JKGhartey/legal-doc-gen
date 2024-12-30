// In-memory storage (replace with database in production)
export const otpStore = new Map<string, { otp: string; expiry: number }>();