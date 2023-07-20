// 'name' => 'required|string|max:255',
//                 'state' => 'required|string|max:255',
//                 'init_date' => 'required|date',
//                 'due_date' => 'required|date',
//                 'lifetime' => 'required|boolean',
//                 'due_date' => 'after:init_date',

import { GetWithAuthorization, PostWithAuthorization } from "@/services/publicServices";

const getPlans = async (token: string) => {

    const response = await GetWithAuthorization('/plans/showall', token)

    console.log(response.data)

    return response.data
}

interface Plan {
    name: string,
    state: string,
    init_date: string,
    due_date: string,
    lifetime: boolean,
}

const createPlans = async (token:string, data: Plan) => {
    console.log(data)
    const response = await PostWithAuthorization('/plans/create', data, token)
    return response
}

// const updatePlans = async (url: string, data: any) => {
//     const response = await Put(url, data)
//     return response
// }

// const deletePlans = async (url: string) => {
//     const response = await Delete(url)
//     return response
// }

export { createPlans, getPlans };

