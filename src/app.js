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



app.use(helmet({
    contentSecurityPolicy: false,
}));


const ensureDB = async (req, res, next) => {
    try {
        await connectDB();
        next();
    } catch (error) {
        next(error);
    }
};


app.use(cors({
    origin: '*',
}));


app.use(compression());
app.use(morgan('dev'));



app.use(express.json());


app.get('/', (req, res) => {
    res.redirect('/api-docs');
});


const SWAGGER_UI_VERSION = '5.32.11';
const swaggerUiOptions = {
    customCssUrl: `https://cdn.jsdelivr.net/npm/swagger-ui-dist@${SWAGGER_UI_VERSION}/swagger-ui.min.css`,
    customJs: [
        `https://cdn.jsdelivr.net/npm/swagger-ui-dist@${SWAGGER_UI_VERSION}/swagger-ui-bundle.min.js`,
        `https://cdn.jsdelivr.net/npm/swagger-ui-dist@${SWAGGER_UI_VERSION}/swagger-ui-standalone-preset.min.js`,
    ],
};

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec, swaggerUiOptions));

app.use('/tasks', ensureDB, router);

app.use(errorMiddleware)

module.exports = app;