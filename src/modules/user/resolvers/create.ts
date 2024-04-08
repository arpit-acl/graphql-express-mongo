import { Context } from "vm"
import { App } from "@config/globals"
export default async ( __: any,
    { input }: any, Context: Context
    ) => {
        const newUser = App.Model.User.createUser(input);
        return {
            data: newUser,
            message: "User Created Successfully"
        }
}