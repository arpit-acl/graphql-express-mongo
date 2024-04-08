// import { App } from '@core/globals'
import { Schema, model, Model, Document } from 'mongoose'
import bcrypt from 'bcryptjs';
// import { BaseModel } from '@core/database'
// import { Password } from '@helpers/password'
import config from '@config/config'
import { App } from '@config/globals'
const { ObjectId } = Schema.Types

export interface UserDoc {
	firstName: string
	lastName: string
	email:string
	password: string
	token: string
}

interface UserMethods {
}

interface UserStatics extends Model<UserDoc, {}, UserMethods> {
	createUser(attrs: UserDoc): UserDoc,

}

const UserSchema = new Schema<UserDoc, UserMethods, UserStatics>(
	{
		firstName: {
			type: String,
			default: '',
			trim: true,
		},
		lastName: {
			type: String,
			default: '',
			trim: true,
		},
		email: {
			type: String,
			default: '',
			required: true,
			unique: true,
			trim: true,
			lowercase: true,
		},
		password: {
			type: String,
			required: true
		},
		token: String,
	},
	{
		collection: config.MODELS.USERS,
		autoIndex: true,
		versionKey: false,
		timestamps: true,
	}
)


// Before Save Hook
UserSchema.pre('save', async function (next) {
	if (this.isModified('password')) {
		const hashed = await bcrypt.hash(this.get('password'), 10).then(d => d);
		this.set('password', hashed)
		this.set('passwordChangedAt', new Date())
	}	
	next()
})


UserSchema.statics.createUser = async (attrs: UserDoc) => {
	const user = new User(attrs);
	await user.save();
	return user;
}
export const User = model<UserDoc, UserStatics>(config.MODELS.USERS, UserSchema)
