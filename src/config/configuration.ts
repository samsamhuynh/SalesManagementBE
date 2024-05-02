export default () => ({
  port: +(process.env.PORT || '3000'),
  database: {
    type: 'postgres',
    host: process.env.DATABASE_HOST,
    port: +(process.env.DATABASE_PORT || '5432'),
    username: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE,
    entities: [`${__dirname}/../domain/**/*.entity{.ts,.js}`],
    synchronize: false,
    logging: Boolean(process.env.DATABASE_LOGGING),
    migrations: [`${__dirname}/../**/migrations/*{.ts,.js}`],
    migrationsTableName: 'migrations',
  },
});
