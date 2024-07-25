import { z } from "zod";

export const envSchema = z.object({
    BOT_TOKEN: z.string(),
    BOT_INFO: z.string(),
    SUPABASE_KEY: z.string(),
    SUPABASE_URL: z.string(),
    TELEGRAM_BOT_SECRET_TOKEN: z.string().min(1).max(256)
});


export type Env = z.infer<typeof envSchema>;