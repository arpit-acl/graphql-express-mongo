import express from "express"
import {createHandler}   from "graphql-http/lib/use/express"
import Schema from "@schema/index" 
import bootstarpApp from "@config/bootstrap"
import config from "@config/config"
import { Logger } from "@config/logger"


(async () => {
  await bootstarpApp();

  var root = {} 
  var app = express()
  
  // Create and use the GraphQL handler.
  app.use(
    "/graphql",
    createHandler({
      schema: Schema,
      rootValue: root,
      formatError: (err) => {
        Logger.error(`Error ${err.message}`)
        // const error = getErrorCode(err.message)
        return ({ message: err.message, statusCode: 500, name: 'Error' })
      }
    })
  )

  await startServer(app);
})();


async function startServer(app: any) {
  // if (dbConnection.connection) {
    app.listen(config.PORT, config.HOST, () => {
      Logger.info(`Server Started At ${config.HOST}:${config.PORT}`)
    });
  // } else {
  //   process.exit(0);
  // }
  // return app;
}
