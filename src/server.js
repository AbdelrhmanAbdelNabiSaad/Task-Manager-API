const config = require('./config/env');
const app = require('./app');
const connectDB = require('./config/db')

const port = config.port || 3000;

async function startServer() {

    await connectDB();

    app.listen(port, ()=> {

        console.log(`Server running on port ==>> ${port}`);

    })
}

startServer().catch((error) => {
    console.error('Failed to start server:', error.message);
    process.exit(1);
});
