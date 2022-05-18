module.exports = {
  type: 'postgres',
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  synchronize: process.env.NODE_ENV !== 'production',
  dropSchema: process.env.NODE_ENV === 'test',
  entities:
    process.env.NODE_ENV === 'test'
      ? ['src/**/*.entity.ts']
      : ['dist/**/*.entity.js'],
};
