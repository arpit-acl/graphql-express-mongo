export default `
  extend type Query {
    hello: String
    userDetails: User!
  }
  
  extend type Mutation {
    create(input: createUser!) : UserResponse!
  }

  type UserResponse {
    message: String
    data: User!
  }
  
  type User {
    firstName: String
    lastName: String
    name: String
    email: String
    password: String
    token: String
  }

  input createUser {
    firstName: String
    lastName: String
    email: String
    password: String
  }
`