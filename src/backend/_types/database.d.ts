import { Collection } from 'mongodb'
import { Test } from 'test'

export interface Database {
  tests: Collection<Test>
  users: Collection<User>
}
