import { Hono } from 'hono';
import { sign, decode, verify } from 'hono/jwt'
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import { SignupInput } from '@sashreek-das/common'
const prisma = new PrismaClient()

// Create the main Hono app
export const userRouter  = new Hono<{
    Bindings: {
        DATABASE_URL: string;
        JWT_SECRET: string;
    }
}>();
// userRouter.get('/allUsers', async (c) => {
//     try {
//         const posts = await prisma.user.findUnique({
//             where:{
//                 id
//             }
//         });
//         return c.json(posts);
//     } catch (e) {
//         c.status(500);
//         return c.json({ error: 'Error fetching users' });
//     }
// });
userRouter.post('/signup', async (c) => {
    const body = await c.req.json();
    // const { success } = SignupInput.safeParse(body)
    // if(!success){
    //     c.status(411);
    //     return c.json({
    //         mssg: "wrong inputs"
    //     })
    // }
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate());


    const user = await prisma.user.create({
        data: {
            email: body.email,
            password: body.password,
        },
    });

    const token = await sign({ id: user.id }, c.env.JWT_SECRET)

    return c.json({
        jwt: token
    })
})

userRouter.post('/signin', async (c) => {
    const prisma = new PrismaClient({
        datasourceUrl: c.env?.DATABASE_URL,
    }).$extends(withAccelerate());

    const body = await c.req.json();
    const user = await prisma.user.findUnique({
        where: {
            email: body.email,
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