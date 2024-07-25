import { z } from "zod";

export const testUserSchema = z.object({
    id: z.number(),
    username: z.string(),
    email: z.string().email(),
    created_at: z.string(),
});

export const testUsersSchema = z.array(testUserSchema);

export type TestUserTypeDb = z.infer<typeof testUserSchema>;