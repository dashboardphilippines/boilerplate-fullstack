import { Db } from 'mongodb'
import { Database } from '../_types/database'
import { Test } from '../_types/test'
import { User } from '../_types/users'


export default (db: Db): Database => {
  return {
    tests: db.collection<Test>('tests'),
    users: db.collection<User>('users')
  }
}
