import { trimEnd, trimStart } from "../string/trim.js";

const baseUrl = import.meta.env.VITE_API_URL || "";
// const baseUrl = "";

export const request = async <Output, Input = object>(
    path: string,
    webAppInitData: string,
    method: "GET" | "POST" | "PUT" | "DELETE" | "PATCH" = "GET",
    body?: Input,
): Promise<Output> => {
    const endpoint = `${trimEnd(baseUrl, "/")}/${trimStart(path, "/")}`;
    console.log(endpoint);
    const response = await fetch(endpoint, {
        method,
        body: body ? JSON.stringify(body) : undefined,
        headers: {
            hash: webAppInitData,
        },
    });
    if (response.status === 200) {
        return response.json() as Output;
    }
    throw new Error(
        `Non-successful status: ${response.status
        }. Endpoint: ${endpoint}. Error: ${await response.text()}`,
    );
};