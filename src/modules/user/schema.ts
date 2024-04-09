export default `
  extend type Query {
    hello: String
    userDetails: User!
  }
  
  extend type Mutation {
    UserCreate(input: createUser!) : UserResponse!
  }

  type UserResponse {
    message: String
    data: User!
  }
  
  type User {
    _id: String
    firstName: String
    lastName: String
    name: String
    email: String
    token: String
    profilePic: String
    createdBy: User
  }

  input createUser {
    firstName: String
    lastName: String
    email: String
  }
`