require('dotenv').config();

module.exports = {
    port: process.env.PORT,
    appName: process.env.APP_NAME,
    db_url:process.env.DB_URL
}