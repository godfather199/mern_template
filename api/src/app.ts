import {ENV} from './config/config'
import {successHandler, errorHandlerMorgan} from './config/morgan'
import { errorHandler  } from './middlewares/error.middleware'
import express, { NextFunction, Request, Response } from 'express'
import routes from './routes'
import helmet from 'helmet'
import mongoSanatize from 'express-mongo-sanitize'
import swaggerJSDoc from 'swagger-jsdoc'
import swaggerui from 'swagger-ui-express'



// Initialize express
const app = express()


// Morgan http-request logging
if (ENV !== 'test') {
  app.use(successHandler);
  app.use(errorHandlerMorgan);
}


// set security HTTP headers
app.use(helmet());


// parse json request body
app.use(express.json());


// parse urlencoded request body
app.use(express.urlencoded({ extended: true }));


// sanitize request data
app.use(mongoSanatize());



// Logging middleware



// Middleware


// Middleware



// Route middleware
app.use('/api', routes)


// Error middleware
app.use(errorHandler)


export default app




