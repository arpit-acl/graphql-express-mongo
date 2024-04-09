import { App } from '@config/globals';
import UserCreate from './resolvers/create';
import { UserDoc } from '@models/user';


export const Query = {
    userDetails : async (__: any, input: any, context: any ) => {
        const user = await App.Model.User.findOne({email: context.user.email});
        return user
    },

}

export const Mutation = {
    UserCreate,
 
}

export const User = {
    name: (userObj: { firstName: string; lastName: string }) => Promise.resolve(`${userObj.firstName} ${userObj.lastName}` ),
    createdBy : async (userObj: UserDoc) => {
        return App.Model.User.findOne({
            _id: userObj.createdBy
        });
    }
}