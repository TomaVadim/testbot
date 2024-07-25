import { createClient } from "@supabase/supabase-js";
import { Env } from "./env/env-schema";
import { TestUserTypeDb, testUsersSchema } from "./db/test/test-schema";
import { createJsonResponse } from "./lib/response/createJsonResponse";

// Import or define the PagesFunction type
// import { PagesFunction } from '@cloudflare/workers-types'; // Uncomment if using Cloudflare Workers

type PagesFunction<Env = any> = (context: {
  env: Env;
  request: Request;
  // Add other properties as needed
}) => Promise<Response>;

export type MyTestResponse = {
  users: TestUserTypeDb[];
};

export const onRequest: PagesFunction<Env> = async (context) => {
  const supabase = createClient(
    context.env.SUPABASE_URL,
    context.env.SUPABASE_KEY
  );
  const { data } = await supabase.from("users").select("*");

  return createJsonResponse<MyTestResponse>({
    users: testUsersSchema.parse(data),
  });
};
