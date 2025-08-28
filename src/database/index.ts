import { createConnection } from "typeorm";

createConnection()
.then(() => console.log("Conexão com PostgreSQL OK!"))
.catch((err) => console.error("Erro ao conectar:", err));