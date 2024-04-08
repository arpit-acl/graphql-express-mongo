import userSchema from '@module/user/schema';
import authSchema from '@module/auth/schema';

import { makeExecutableSchema } from '@graphql-tools/schema';
import resolvers from './resolvers';
const defaultQuery = `
	type Query {
		ping: Success!
		
	}

	type Mutation {
		ping: Success!
	}

	enum Success {
		SUCCESS
	}

	scalar Date
`

const defaultResolver = {
	Query: {
		ping: () => 'SUCCESS',
	},
	Mutation: {
		ping: () => {
			return 'SUCCESS'
		},
	},
}

export default makeExecutableSchema({
    typeDefs: [defaultQuery, userSchema, authSchema],
    resolvers: [defaultResolver, resolvers]
})
