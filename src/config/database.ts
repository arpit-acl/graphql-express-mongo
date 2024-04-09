import { Logger } from '@config/logger'
import { connect, Schema } from 'mongoose'

export interface BaseModel {
	isDeleted?: boolean
	createdAt?: Date
	updatedAt?: Date
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
