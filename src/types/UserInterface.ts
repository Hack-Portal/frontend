import { Api_CreateAccountRequestBody, Api_CreateAccountResponses, Api_GetAccountResponses } from "@/api/@types";

export interface UserInterface {
    fetchAll: () => Promise<Api_GetAccountResponses>;
    fetchById: (id: string) => Promise<Api_GetAccountResponses>;
    create: (body:Api_CreateAccountRequestBody) => Promise<Api_CreateAccountResponses>;
}


