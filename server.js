const express = require('express');

const bodyParser = require("body-parser");
const apiOrder   = require('./src/routes/apiOrder')



const swaggerUi = require("swagger-ui-express")
const swaggerSpec = require("./swaggerConfig")


const app = express();
const port = 8080;

// Parse JSON bodies (as sent by API clients)
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.use("/api/orders" , apiOrder);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
// Start the server
app.listen(port, () => console.log(`App listening on port ${port}!`));

module.exports = app;