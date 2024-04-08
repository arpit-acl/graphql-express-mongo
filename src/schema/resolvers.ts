import {Query as UserQuery , User, Mutation as UserMutation} from '@module/user/resolvers'
import {Mutation as AuthMutation } from '@module/auth/resolvers';
export default {
    Query : {
        ...UserQuery,
    },
    Mutation: {
        ...UserMutation,
        ...AuthMutation
    },
    User
}
