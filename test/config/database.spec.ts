import 'mocha'
import { Database } from '../../src/config/database';
import { assert, expect } from 'chai';

describe('Database connection Test', () => {
    it('Database Connection successfully', async function () {
        const dbObj = new Database('mongodb://localhost:27017/graphql-demo');
        const status = await dbObj.connect();
        expect(status).to.equal(true);
    });

    it('Database Connection Should Failed', async function () {
        const dbObj = new Database('mysql://localhost:27017/graphql-demo');
        const status = await dbObj.connect();
        expect(status).to.equal(false);
    });
    
})  
