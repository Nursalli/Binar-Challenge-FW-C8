// setup database here, change the values to suit your environment
module.exports = {
  HOST: process.env.DATABASE_HOST,
  USER: process.env.DATABASE_USERNAME,
  PASSWORD: process.env.DATABASE_PASSWORD,
  DB: process.env.DATABASE_NAME,
  dialect: process.env.DATABASE_TYPE,
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};
