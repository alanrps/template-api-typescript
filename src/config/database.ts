import { DataSource } from "typeorm";

export const dataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "test",
    password: "test",
    database: "test",
    entities: ["../domain/entities/*.ts"],
    // Configuração do Pool de conexões
    extra: {
        max: 10, 
        idleTimeoutMillis: 30000, 
  },
})
