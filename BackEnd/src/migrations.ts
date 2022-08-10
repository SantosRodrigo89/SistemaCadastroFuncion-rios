import knex, { Knex } from "knex";
import dotenv from "dotenv";

dotenv.config();

const connection: Knex = knex({
  client: "mysql",
  connection: {
    host: process.env.DB_HOST,
    port: 3306,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    multipleStatements: true,
  },
});

connection
  .raw(
    `
    CREATE TABLE IF NOT EXISTS CDC_EMPLOYEE (
        id INT PRIMARY KEY AUTO_INCREMENT,
        nome VARCHAR(255) NOT NULL,
        cpf VARCHAR(255) NOT NULL,
        nascimento VARCHAR(255) NOT NULL,
        salario VARCHAR(255) NOT NULL,
        departamento VARCHAR(255) NOT NULL
    );
`
  )
  .then(console.log)
  .catch(console.log);
