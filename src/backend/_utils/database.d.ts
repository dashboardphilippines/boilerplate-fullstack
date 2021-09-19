import { Collection } from 'mongodb'
import { User } from './users'
import { SendgridTemplate } from './sendgridTemplates'

export interface Database {
  sendgrid_templates: Collection<SendgridTemplate>
  users: Collection<User>
}
