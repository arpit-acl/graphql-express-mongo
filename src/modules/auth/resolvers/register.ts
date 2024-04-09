import { App } from "@config/globals"
import jwt from "jsonwebtoken";

interface singupInput {
    input : {
        email: string
        password: string    
    }
}

export default async (__: any, {input: {email, password}}: singupInput) => {
    try {
        const userExist = await App.Model.User.findOne({email});
        if(userExist) {
            throw new Error(App.messages.USER_ALREADY_REGISTERED)
        } 
        
        const newUser = App.Model.User.createUser({ email, password });
        const token = jwt.sign({email, _id: newUser._id}, App.config.JWT_SECRET);
        await App.Model.User.updateOne({email}, {token});
        return {message: App.messages.USER_REGISTERED_SUCCESS, data: {token}};    

    } catch (err: any) {
        throw new Error(err);
    } 
}             