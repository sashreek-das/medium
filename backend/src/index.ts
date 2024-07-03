import { Hono } from 'hono';
import { sign, decode, verify } from 'hono/jwt'
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import { userRouter } from './routes/user';
import { blogRouter } from './routes/blog';
const prisma = new PrismaClient()

// Create the main Hono app
export const app = new Hono<{
  Bindings: {
      DATABASE_URL: string;
      JWT_SECRET: string;
  }
}>();

app.route('/api/v1/user',userRouter)
app.route('/api/v1/blog',blogRouter)
export default app;
