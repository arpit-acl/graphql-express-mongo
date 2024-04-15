// import 'mocha'
// import { isAuthenticated } from '../../src/middleware/permissions';
// import { assert, expect } from 'chai';
// import mongoose from 'mongoose';
// import { graphql } from 'graphql';
// import { applyMiddleware } from 'graphql-middleware';
// import { makeExecutableSchema } from '@graphql-tools/schema';

// // Define your schema
// const typeDefs = `
//   type Query {
//     sensitiveData: String @isAuthenticated
//   }
// `;

// const resolvers = {
//   Query: {
//     sensitiveData: () => "Sensitive information",
//   },
// };

// // Set up your test suite
// describe('GraphQL Shield Rules', () => {
//     it('allows access if user is authenticated', async () => {
//       // Mock context with authenticated user
//       const ctx = { user: { id: '123', role: 'user' } };
  
//       // Create a shield schema with the rule applied
//       const shieldedSchema = applyMiddleware(
//         makeExecutableSchema({ typeDefs, resolvers }),
//         isAuthenticated,
//       );
  
//       // Execute GraphQL query
//       const query = `
//         {
//           sensitiveData
//         }
//       `;
  
//       const result = await graphql(shieldedSchema, query, {}, ctx);
  
//       // Assert that the query was successful
//       expect(result).toMatchObject({ data: { sensitiveData: "Sensitive information" } });
//     });
  
//     it('denies access if user is not authenticated', async () => {
//       // Mock context without authenticated user
//       const ctx = { user: null };
  
//       // Create a shield schema with the rule applied
//       const shieldedSchema = applyMiddleware(
//         makeExecutableSchema({ typeDefs, resolvers }),
//         isAuthenticated,
//       );
  
//       // Execute GraphQL query
//       const query = `
//         {
//           sensitiveData
//         }
//       `;
  
//       const result = await graphql(shieldedSchema, query, {}, ctx);
  
//       // Assert that the query failed
//       expect(result.errors).toBeDefined();
//       expect(result.errors[0].message).toEqual('Not Authorised!');
//     });
//   });
