import create from './resolvers/login';
export const Query = {
    userDetails : () => {
        throw Error('Exception in user details fetch')
    }
}

export const Mutation = {
    create,
}

export const User = {
    name: (userObj: { firstName: string; lastName: string }) => Promise.resolve(`${userObj.firstName} ${userObj.lastName}` )
}