import '../../moduleconfig';
import 'mocha'
import { Database } from '../../src/config/database';
import {randomString} from '../../src/config/utils'
import {assert} from 'chai';
import mongoose from 'mongoose';

describe('Database connection Test', ()=> {
    it('Database Connection successfully',  async function(done) {
        const str = randomString(10);
        const dbObj = new Database('mongodb://localhost:27017/graphql-demo');
        console.log('dbObj', dbObj);
        str.length.should.equal(10)
        const connectionStatus = dbObj.connect().then(d => {
            console.log('connectionStatus', connectionStatus);
            // expect(await dbObj.connect()).to.equal(true);
            // expect(mongoose.connection.readyState).to.equal(1);
            done()    
        });
    }) 
    it('Database Connection should give error', function(done) {
        const dbObj = new Database('mysql://localhost/graphql-demo');
        assert.equal(dbObj.connect(), new Error('Database Connection Failed'));
        done()
    }) 
    
})
