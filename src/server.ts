import 'reflect-metadata'
import { User } from './models/User'
import { AppDataSouce } from './data-source'

AppDataSouce.initialize().then(() => console.log('AppDataSouce init')).catch((err) => console.log(err))

async function createUser() {
  const user = new User()

  user.email = 'bruno.hfabre@gmail.com'

  AppDataSouce.manager.save(user)
}

createUser()