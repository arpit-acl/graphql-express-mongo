export default `
  
  extend type Mutation {
    login(input: loginInput) : authResponse!
    register(input: signupInput) : authResponse!
  }

  input loginInput {
    email: String
    password: String
  }

  input signupInput {
    email: String,
    password: String,
  }

  type authResponse {
    message: String
    data: User!
  }
    
`