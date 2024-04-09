import { Database } from '@config/database';
import config from '@config/config';
export default async () => {
    // create database connection
    await dbConnection();

    // start cron jobs
    await loadCrons();
}

const dbConnection  = async () => {
    const connection = new Database(config.DB_URL)
    await connection.connect()
}

const loadCrons = async () => {
    await import('@jobs/index');
}