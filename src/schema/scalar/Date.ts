import {  GraphQLScalarType } from 'graphql';
import { Kind } from 'graphql/language';

export default new GraphQLScalarType({
    name: 'Date',
    description: 'Date type',
    parseValue(value: any) {
        // value comes from the client
        return new Date(value); // sent to resolvers
    },
    serialize(value: any) {
        // value comes from resolvers
        return value.toISOString(); // sent to the client
    }
});
