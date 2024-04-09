import { App } from "@config/globals"
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

interface loginInput {
    input: {
        email: string
        password: string    
    }
}

export default async (__: any, {input: {email, password}} : loginInput) => {
    try {
        const userData = await App.Model.User.findOne({email}, '+password');
        if(!userData) {
            throw new Error(App.messages.WRONG_CRED)
        } 

        const passMatch = bcrypt.compareSync(password, userData.password)
        if(!passMatch) {
            throw new Error(App.messages.WRONG_CRED)
        } 
        
        const token = jwt.sign({email, _id: userData._id}, App.config.JWT_SECRET);
        await App.Model.User.updateOne({email}, {token});
        return {message: App.messages.USER_LOGIN, data: {token}};    
    } catch (err: any) {
        throw new Error(err)
    }
}