import {config} from 'dotenv'
import Joi from 'joi';
import path from 'path';


config({ path: path.join(__dirname, '../../.env') });



const envVarSchema = Joi.object()
  .keys({
    NODE_ENV: Joi.string().valid('production', 'development', 'test').required(),
    PORT: Joi.number().default(5000),
    MONGODB_URL: Joi.string().required().description("Mongo DB url"),
    JWT_SECRET: Joi.string().required().description("JWT secret key"),
  })
  .unknown();


  const { value: envVars, error } = envVarSchema
    .prefs({ errors: { label: "key" } })
    .validate(process.env);


  if (error) {
    throw new Error(`Config validation error: ${error.message}`);
  }

  const ENV = envVars.NODE_ENV
  const PORT = envVars.PORT
  const DATABASE_URL = envVars.MONGODB_URL
  const JWT_SECRET = envVars.JWT_SECRET;

  
  export { PORT, DATABASE_URL, JWT_SECRET, ENV };