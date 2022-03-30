require('dotenv').config()
import 'graphql-import-node'

import {
  ApolloServer,
  AuthenticationError,
  ForbiddenError,
  UserInputError,
  ExpressContext
} from 'apollo-server-express'
import { GraphQLFormattedError, GraphQLError } from 'graphql'
import compression from 'compression'
import cors from 'cors'
import express from 'express'
import helmet from 'helmet'
import next from 'next'
import { parse } from 'url'
import { Database } from './backend/_types/database'
import _dbSetup from './backend/_utils/_dbSetup'

import { MongoClient } from 'mongodb'
import { resolvers, typeDefs } from './backend/controllers'
import { Context } from './backend/_types/context'
import { verifyJWT } from './backend/_utils/cloudflareJwt'

const MONGODB_URI: string = process.env.DB_URI || 'mongodb://localhost:27017'

const app = express()
app.set('trust proxy', true)
app.use(cors())
app.use(compression())

const dev = process.env.NODE_ENV !== 'production'
const nextJSApp = next({ dir: './src/frontend', dev })
const handle = nextJSApp.getRequestHandler()

const scriptSrc = [
  "'self'",
  'www.gstatic.com',
  '*.googleapis.com',
  'https://www.google-analytics.com/analytics.js',
  'https://www.googletagmanager.com/gtag/js'
]

nextJSApp.prepare().then(async () => {
  //IF USING CONNECTING A MONGO DATABASE, uncomment out lines 43, 44 and 53
  // const mongoClient: MongoClient = await MongoClient.connect(MONGODB_URI)
  // const db = mongoClient.db('')
  // const database: Database = _dbSetup(db)

  const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: async (context: ExpressContext): Promise<Context> => {
      const ip = context.req.headers['CF-Connecting-IP'] || context.req.headers['X-Forwarded-For'] || context.req.ip

      return {
        // database,
        ip
        // currentUserEmail: await verifyJWT(context.req.headers.accesstoken as string) uncomment if using Cloudflare Access
      }
    },
    formatError: (error: GraphQLError): GraphQLFormattedError => {
      if (
        !(
          error.originalError instanceof AuthenticationError ||
          error.originalError instanceof ForbiddenError ||
          error.originalError instanceof UserInputError
        )
      ) {
        console.error(error)
      }
      return error
    }
  })

  server.applyMiddleware({ app, path: '/graphql' })

  app.use((req, res) => {
    const parsedUrl = parse(req.url, true)
    handle(req, res, parsedUrl)
  })

  app.listen(process.env.PORT || 3000, () => {
    console.log(`Server Ready on port ${process.env.PORT || 3000}`)
  })
})
