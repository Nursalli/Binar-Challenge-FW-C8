// setup database here, change the values to suit your environment
module.exports = {
  HOST: "127.0.0.1",
  USER: "nursalli",
  PASSWORD: "nursalli123",
  DB: "db_challenge_fw_c8_dev",
  dialect: "postgres",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};
