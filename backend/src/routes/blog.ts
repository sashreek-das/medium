import { Hono } from 'hono';
import { sign, decode, verify } from 'hono/jwt'
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
const prisma = new PrismaClient()

export const bookRouter = new Hono<{
    Bindings: {
        DATABASE_URL: string;
        JWT_SECRET: string;
    },
    Variables: {
        userId: string
    }
}>();
bookRouter.get('/api/v1/blog/:id', (c) => {

    const id = c.req.param('id')

    console.log(id);
    return c.text('get blog route')
})

bookRouter.post('/api/v1/blog', (c) => {

    return c.text('signin route')
})

bookRouter.put('/api/v1/blog', (c) => {
    return c.text('signin route')
})
