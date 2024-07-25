import { request } from "../lib/request/request.ts";
import { MyTestResponse } from "../../functions/test.ts"

export const getTestDataRequest = (webAppInitData: string) => {
    return request<MyTestResponse>(`/test`, webAppInitData);
};