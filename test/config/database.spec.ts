import 'mocha'
import { Database } from '../../src/config/database';
import { assert, expect } from 'chai';
import config from '../../src/config/config';

describe('Database connection Test', () => {
    it('Database Connection successfully', async function () {
        const dbObj = new Database(config.DB_URL);
        const status = await dbObj.connect();
        expect(status).to.equal(true);
    });

    it('Database Connection Should Failed', async function () {
        const dbObj = new Database('mysql://localhost:27017/graphql-demo');
        const status = await dbObj.connect();
        expect(status).to.equal(false);
    });
    
})  
