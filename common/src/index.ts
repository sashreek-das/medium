import z from "zod"

export const signUpInput = z.object({
    username: z.string().email(),
    password: z.string().min(6),
    name: z.string().optional()
})

export const signInInput = z.object({
    username: z.string().email(),
    password: z.string().min(6),
})
export const createBlogInput = z.object({
    title: z.string(),
    content: z.string()
})

export const updateBlogInput = z.object({
    title: z.string(),
    content: z.string(),
    id: z.string()
})


export type SignupInput = z.infer<typeof signUpInput>
export type SigninInput = z.infer<typeof signInInput>
export type CreateblogInput = z.infer<typeof createBlogInput>
export type UpdateblogInput = z.infer<typeof updateBlogInput>