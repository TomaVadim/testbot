import { createClient } from "@supabase/supabase-js";
import { Env } from "./env/env-schema";
import { TestUserTypeDb, testUsersSchema } from "./db/test/test-schema";
import { createJsonResponse } from "./lib/response/createJsonResponse";

export type MyTestResponse = {
    users: TestUserTypeDb[];
}

export const onRequest: PagesFunction<Env> = async (context) => {

    const supabase = createClient(context.env.SUPABASE_URL, context.env.SUPABASE_KEY);
    const { data } = await supabase.from("users").select("*");

    return createJsonResponse<MyTestResponse>({
        users: testUsersSchema.parse(data)
    });
}
