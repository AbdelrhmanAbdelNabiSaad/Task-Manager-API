const mongoose = require('mongoose');
const config = require('./env');
const db = config.db_url;

let isConnected = false;

async function connectDB() {

    if (isConnected) {
        return;
    }

    try {

        await mongoose.connect(db);
        isConnected = true;
        console.log(`MongoDB Connection Successfully`);

    } catch (error) {

        console.log('DataBase Connection Failed');
        console.log(error.message);

       
        throw error;

    }

}

module.exports = connectDB;
