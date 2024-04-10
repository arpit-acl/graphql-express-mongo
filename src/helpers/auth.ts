import { App } from '@config/globals';
import jwt from 'jsonwebtoken';

export default (authToken: string) => {
    try {
        const decode: any = jwt.verify(authToken, App.config.JWT_SECRET)
        return {user: decode};
    } catch (err) {
        throw new Error(App.messages.TOKEN_EXPIRED);
    }
}