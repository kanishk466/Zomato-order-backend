const swaggerJsdoc = require("swagger-jsdoc");

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Zomato orders backend",
      version: "1.0.0",
      description: "API for getting order",
    },
    servers: [
      {
        url: "http://localhost:8080", // Update with your Server
        description: "Development Server",
      },
    ],
    components: {
      securitySchemes: {
        bearerAuth: {
          type: "http"
        },
      },
      Developed:{
        type: "object",
        properties:{
          name:"Kanishk Singh Maurya",
          email:"kanishkas466@gmail.com",
          linkedIn:"https://www.linkedin.com/in/kanishk007/"
        }
      }
    },
  },
  apis: [
    "./src/routes/apiOrder.js"
  ],
};

const swaggerSpec = swaggerJsdoc(options);

module.exports = swaggerSpec;