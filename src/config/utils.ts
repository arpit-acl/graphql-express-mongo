import jwt from 'jsonwebtoken';
import { App } from './globals';

export const randomString = (length: number) : string => {
    let result = ''
	const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
	const charactersLength = characters.length
	for (let i = 0; i < length; i++) {
		result += characters.charAt(Math.floor(Math.random() * charactersLength))
	}
	return result
}

export const generateToken = ({email, _id} : {email: string, _id: string}) : string => {
	return jwt.sign({email, _id}, App.config.JWT_SECRET);
}