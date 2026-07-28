const fs = require('fs/promises');
const path = require('path');


const dbPath = path.join(__dirname, '..', 'db', 'db.json');

async function readDB() {

    const data = await fs.readFile(dbPath, 'utf-8');

    return JSON.parse(data);

}

async function saveDB(data) {

    await fs.writeFile(dbPath, JSON.stringify(data,null,2));

}

module.exports = {
    readDB,
    saveDB,
}