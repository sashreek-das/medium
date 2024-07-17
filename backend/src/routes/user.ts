import { Hono } from 'hono';
import { sign, decode, verify } from 'hono/jwt'
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import { SignupInput } from '@sashreek-das/common'
const prisma = new PrismaClient()

// Create the main Hono app
export const userRouter = new Hono<{
    Bindings: {
        DATABASE_URL: string;
        JWT_SECRET: string;
    }
}>();
userRouter.get('/allUsers', async (c) => {
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate());

    const users = await prisma.user.findMany()

    return c.json({ users })
});
userRouter.post('/signup', async (c) => {
    const body = await c.req.json();
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate());

    if (!body.username && !body.password) {
        return c.text("wrong inputs")
    }

    else {
        const user = await prisma.user.create({
            data: {
                name: body.name,
                username: body.username,
                password: body.password,
            },
        });
        const token = await sign({ id: user.id }, c.env.JWT_SECRET)

        return c.json({
            jwt: token
        })
    }

})

userRouter.post('/signin', async (c) => {
    const prisma = new PrismaClient({
        datasourceUrl: c.env?.DATABASE_URL,
    }).$extends(withAccelerate());

    const body = await c.req.json();
    const user = await prisma.user.findUnique({
        where: {
            username: body.username,
            password: body.password
        }
    });

    if (!user) {
        c.status(403);
        return c.json({ error: "user not found" });
    }

    const jwt = await sign({ id: user.id }, c.env.JWT_SECRET);
    return c.json({ jwt });
})

userRouter.get("/yourBlogs", async (c) => {
    const prisma = new PrismaClient({
        datasourceUrl: c.env?.DATABASE_URL,
    }).$extends(withAccelerate());
    const yourPosts = await prisma.post.findMany({
        where:{
            
        }
    })
    return c.json({ yourPosts })
})