import { Collection } from 'mongodb'
import { User } from './users'
import { Test } from './tests'

export interface Database {
  tests: Collection<Test>
  users: Collection<User>
}
