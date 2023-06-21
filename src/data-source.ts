import { DataSource } from "typeorm";

export const AppDataSouce = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'docker',
  password: 'docker',
  database: 'typeorm',
  entities: [`${__dirname}/src/models/*.ts`],
  migrations: [`${__dirname}/src/migrations/*.ts`],
})