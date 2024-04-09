import userSchema from '@module/user/schema';
import authSchema from '@module/auth/schema';
import { makeExecutableSchema } from '@graphql-tools/schema';
import resolvers from './resolvers';
import { buildSchema, GraphQLSchema, GraphQLObjectType, GraphQLString, GraphQLDirective, DirectiveLocation, defaultFieldResolver }  from'graphql';


const defaultQuery = `
	
	directive @isAuth on FIELD_DEFINITION 

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

class IsAuthDirective extends GraphQLDirective {
	constructor() {
		console.log('in construct');
	  super({
		name: 'isAuth',
		locations: [DirectiveLocation.FIELD_DEFINITION]
	  });
	}
  
	// Logic for directive
	visitFieldDefinition(field: any) {
		console.log(field);
	  const { resolve = defaultFieldResolver } = field;
	  field.resolve = async function (...args : any) {
		const [, , context] = args;
		// Check if user is authenticated
		if (!context.user) {
		  throw new Error('Not authenticated');
		}
		// If authenticated, execute the original resolver
		return resolve.apply(this, args);
	  };
	}

  }
  

const schema = makeExecutableSchema({
    typeDefs: [defaultQuery, userSchema, authSchema],
    resolvers: [defaultResolver, resolvers],
})

export default new GraphQLSchema({
	query: schema.getQueryType(),
	mutation: schema.getMutationType(),
	directives: [
		new IsAuthDirective()
	], // Add custom directive to the schema
  });
