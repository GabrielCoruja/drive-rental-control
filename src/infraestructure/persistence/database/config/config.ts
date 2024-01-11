import { Dialect, Options } from 'sequelize';

// Config to use MySQL in project
// const config: Options = {
//   username: process.env.DB_USER || 'root',
//   password: process.env.DB_PASSWORD || 'password',
//   database: process.env.DB_NAME || 'rental_car_db',
//   host: process.env.DB_HOST || 'localhost',
//   port: Number(process.env.DB_PORT) || 3306,
//   dialect: process.env.DIALECT as Dialect || 'mysql',
// };

const config: Options = {
  dialect: 'sqlite',
  storage: process.env.DB_STORAGE || './sqlite-database.db',  // Adiciona o caminho para o arquivo SQLite
};

export = config;
