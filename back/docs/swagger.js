const path = require("path");

const options = {
  definition: {
    openapi: "3.0.3",
    info: {
      title: "API De Geek Central Store",
      description:
        "Esta API se encarga de manejar los datos en Geek Central Store",
      version: "1.0.0",
    },
  },
  servers: [
    {
      url: "http://localhost:3001",
    },
  ],
  apis: [
    path.resolve(__dirname, "./user-routes.js"),
    path.resolve(__dirname, "./product-routes.js"),
  ],
};

module.exports = options;
