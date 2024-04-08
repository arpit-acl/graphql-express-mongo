import { Logger } from '@config/logger'
import { connect, Schema } from 'mongoose'
const ObjectId = Schema.Types.ObjectId

export interface BaseModel {
	isDeleted: boolean
	createdAt?: Date
	updatedAt?: Date
	createdById?: typeof ObjectId
	updatedById?: typeof ObjectId
}

export class Database {
	private url: string

	constructor(url: string) {
		this.url = url
	}

	async connect(): Promise<void> {
		await connect(this.url.toString())
		Logger.info('Database Connected Successfully')
	}
}
