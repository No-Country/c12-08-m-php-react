import { PostWithAuthorization } from "../publicServices";

export const createMeds = async (data: any, token: string) => {
    const response = await PostWithAuthorization("/items/create", data, token);
    return response;
}

