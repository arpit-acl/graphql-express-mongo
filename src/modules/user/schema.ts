export default `

directive @isAuth on FIELD_DEFINITION 

  extend type Query {
    hello: String
    userDetails: User! @isAuth
  }
  
  extend type Mutation {
    UserCreate(input: createUser!) : UserResponse! @isAuth
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

  input updateUser {
    userId: String
    firstName: String
    lastName: String
  }
`