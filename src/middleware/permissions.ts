import { rule, shield, and, or, not } from "graphql-shield"

// Rules

const isAuthenticated = rule({ cache: "contextual" })(async (
  parent,
  args,
  ctx,
  info,
) => {
  return (ctx.user?._id !== null && ctx.user !== undefined)
})

export default shield({
    Query : {
      userDetails : isAuthenticated
    }, 
    Mutation: {
      UserCreate : isAuthenticated
    }
})