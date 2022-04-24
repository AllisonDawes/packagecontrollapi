import { createConnection } from "typeorm";

createConnection();

/*import "reflect-metadata";
import { DataSource } from "typeorm";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "packagecontroll",
  password: "docker",
  database: "packagecontrolldb",
  synchronize: true,
  logging: true,
  entities: ["./src/models/*.ts"],
  subscribers: [],
  migrations: ["./src/database/migrations/*.ts"],
});
*/
