import express, { Request } from "express"
import {createHandler}   from "graphql-http/lib/use/express"
import path from 'path'

if (path.extname(__filename) === '.js') {
	require('module-alias/register')
}


import Schema from "@schema/index" 
import bootstarpApp from "@config/bootstrap"
import config from "@config/config"
import { Logger } from "@config/logger"
import validateAuthUser from '@helpers/auth';


(async () => {
  await bootstarpApp();

  const app = express()
  
  const contextRequest = ({headers: {authorization}}: Request) => {
    if (authorization) return validateAuthUser(authorization)
    return {};
  };

  const customErrorFormat = (err: Error) => {
    Logger.error(`Error ${err}`)
    return { message: err.message, statusCode: 500, name: 'Error' }
  };

   app.all(
    "/graphql",
    createHandler({
      rootValue: {},
      schema: Schema,
      formatError: customErrorFormat,
      context : contextRequest
    })
  )
  
  await startServer(app);
})();


async function startServer(app: any) {
    app.listen(config.PORT, config.HOST, () => {
      Logger.info(`Server Started At ${config.HOST}:${config.PORT}`)
    });
}
