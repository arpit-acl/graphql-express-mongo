import { applyMiddleware } from 'graphql-middleware'
import { makeExecutableSchema } from '@graphql-tools/schema';
import userSchema from '@module/user/schema';
import authSchema from '@module/auth/schema';
import resolvers from './resolvers';
import permissions from '@middlewares/permissions';


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
const schema = makeExecutableSchema({
    typeDefs: [defaultQuery, userSchema, authSchema],
    resolvers: [defaultResolver, resolvers],
})

export default applyMiddleware(schema, permissions)