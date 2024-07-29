import express, { NextFunction, Request, Response } from 'express'
import { errorHandler } from './middlewares/error.middleware'
import routes from './routes'



// Initialize express
const app = express()



// Logging middleware



// Middleware



// Route middleware
app.use('/api', routes)


// Error middleware
app.use(errorHandler)


export default app