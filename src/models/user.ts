import { Schema, model, Model, Document, ObjectId } from 'mongoose'
import bcrypt from 'bcryptjs';
import config from '@config/config'
import { BaseModel } from '@config/database';



const { ObjectId } = Schema.Types
export interface profileDoc {
    _id? : ObjectId;
	firstName? : string
	lastName? : string
	email :string
	token? : string
	profilePic?: string
	createdBy?: ObjectId
}

export interface UserDoc extends profileDoc , BaseModel {
	password: string
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
			select: false,
			required: true
		},
		token: String,
		profilePic: {
			type: String,
			default: ''
		},
		createdBy: {
			type: ObjectId,
			ref: 'users'
		},
		isDeleted: {
			type: Boolean,
			default: false,
		},
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
