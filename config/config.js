require('dotenv').config()

const environment = {
  development: {
    password: null,
    url: process.env.POSTGRES_DB,
    dialect: "postgres"
  }
}

module.exports = environment