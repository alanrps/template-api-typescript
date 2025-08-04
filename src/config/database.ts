import { DataSource } from "typeorm";

if (!process.env.DB_HOST || !process.env.DB_USER || !process.env.DB_PASS || !process.env.DB_NAME) {
  throw new Error("Database environment variables are not defined.");
}

export const dataSource = new DataSource({
    type: "mysql",
    port: 3306,
    host: process.env.DB_HOST,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    entities: [__dirname + "/../domain/entities/*.{ts,js}"],
    logging: false,
    extra: {
        max: 10, 
        idleTimeoutMillis: 30000, 
  },
})
