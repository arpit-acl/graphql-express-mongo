import { Context } from "vm"
import { App } from "@config/globals"
import {randomString} from "@config/utils";
interface UserCreateInput {
    input: {
        firstName: string
        lastName: string
        email: string
    }
}

export default async (__: any,
    { input: {
        firstName, lastName, email
    } }: UserCreateInput, Context: any
) => {

    const isEmailAlreadyRegistered = await App.Model.User.findOne({email});
    if(isEmailAlreadyRegistered) {
        throw new Error(App.messages.USER_ALREADY_REGISTERED)
    }

    const password = randomString(10);
    const newUser = await App.Model.User.createUser({firstName, lastName, email, password, createdBy: Context.user._id});
    return {
        data: newUser,
        message: "User Created Successfully"
    }
}