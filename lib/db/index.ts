import mongoose from "mongoose"

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const cashed = (global as any).mongoose || { conn: null, promise: null }

export const connectToDB = async (MONGODB_URI = process.env.MONGODB_URI)=>{
  if (cashed.conn) return cashed.conn
  
  if(!MONGODB_URI) throw new Error('MONGODB_URI is missing')

  cashed.promise = cashed.promise || await mongoose.connect(MONGODB_URI)

  cashed.conn = await cashed.promise

  return cashed.conn
}