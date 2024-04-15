import 'mocha'
import { generateToken, randomString } from '../../src/config/utils';
import { assert, expect } from 'chai';
import mongoose from 'mongoose';

describe('Util functions Test', () => {
    it('Generate 10 character random string', async function () {
        const str = randomString(10);
        expect(str.length).to.equal(10);
    });

    it('Generate 15 character random string', async function () {
        const str = randomString(15);
        expect(str.length).to.equal(15);
    });
    
    it('It should generate jwt token', async function () {
        const tokenData = {
            email: 'test@gmail.com',
            _id: new mongoose.Types.ObjectId().toString()
        }
        const AuthToken = generateToken(tokenData)
        assert.typeOf(AuthToken, 'string');
    });
    
})  
