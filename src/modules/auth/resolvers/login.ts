import { Context } from "vm";

interface loginInput {
    email: String
    password: String
}
export default async (__: any, {}: loginInput, Context: Context) => {
    
}