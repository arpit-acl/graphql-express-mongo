import { App } from '@config/globals';
import jwt, { JwtPayload } from 'jsonwebtoken';
interface tokenData extends JwtPayload{
    email: string
    _id: string
}
export default (authToken: string) => {
    try {
        const decode: any = jwt.verify(authToken, App.config.JWT_SECRET)
        return {user: decode};
    } catch (err) {
        throw new Error('Token Expired');
    }
}