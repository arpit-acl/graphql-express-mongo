import 'mocha'
import { generateToken } from '../../src/config/utils';
import { assert, expect } from 'chai';
import authValidator from '../../src/helpers/auth';
import mongoose from 'mongoose';

describe('Auth Helper Test', () => {
    let token : string;
    before('It should generate jwt token', async function () {
        const tokenData = {
            email: 'test@gmail.com',
            _id: new mongoose.Types.ObjectId().toString()
        }
        const AuthToken = generateToken(tokenData)
        token = AuthToken;
    });
    
    it('It should validate jwt token', async function () {
        const validateToken = authValidator(token);
        assert.typeOf(validateToken, 'Object');
        expect(validateToken).to.have.property('user');
        expect(validateToken.user).to.have.property('email');
        expect(validateToken.user).to.have.property('_id');
        expect(validateToken.user.email).to.equals('test@gmail.com');
    });
    
})  
