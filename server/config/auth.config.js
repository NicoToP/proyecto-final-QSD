import { config } from 'dotenv'
config()

export const SECRET = process.env.SECRET

export const ADMIN_EMAIL = process.env.ADMIN_EMAIL || 'admin@localhost'
export const ADMIN_USERNAME = process.env.ADMIN_USERNAME || 'admin'
export const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || 'admin'
