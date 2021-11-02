import { Database } from './database'

export interface Context {
  ip?: string | string[]
  currentUserEmail?: string
  database?: Database
}
