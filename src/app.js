const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const compression = require('compression');
const swaggerUi = require('swagger-ui-express')
const swaggerSpec = require('./config/swagger');
const connectDB = require('./config/db');
const app = express();
const router = require('./routes/task.routes');
const errorMiddleware = require('./middlewares/error.middelware')


app.use(helmet());

app.use(async (req, res, next) => {
    try {
        await connectDB();
        next();
    } catch (error) {
        next(error);
    }
});


app.use(cors({
    origin: '*',
}));


app.use(compression());
app.use(morgan('dev'));



app.use(express.json());


app.get('/', (req, res) => {
    res.redirect('/api-docs');
});

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.use('/tasks', router);

app.use(errorMiddleware)

module.exports = app;