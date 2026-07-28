const swaggerJsdoc = require("swagger-jsdoc");

const options = {
  definition: {
    openapi: "3.0.0",

    info: {
      title: "Task Manager API",
      version: "1.0.0",
      description:
        "REST API built with Node.js and Express for managing tasks.",
    },

    servers: [
      {
        url: process.env.VERCEL_URL
          ? `https://${process.env.VERCEL_URL}`
          : "http://localhost:3000",
        description: process.env.VERCEL_URL
          ? "Production Server"
          : "Development Server",
      },
    ],

    tags: [
      {
        name: "Tasks",
        description: "Task Management APIs",
      },
    ],

    components: {
      schemas: {
        Task: {
          type: "object",
          properties: {
            id: {
              type: "integer",
              example: 1,
            },

            title: {
              type: "string",
              example: "Learn Express",
            },

            description: {
              type: "string",
              example: "Finish CRUD API",
            },

            status: {
              type: "string",
              enum: ["pending", "completed"],
              example: "pending",
            },

            createdAt: {
              type: "string",
              format: "date-time",
              example: "2026-07-25T20:30:00.000Z",
            },
          },
        },

        Error: {
          type: "object",

          properties: {
            success: {
              type: "boolean",
              example: false,
            },

            message: {
              type: "string",
              example: "Task not found",
            },
          },
        },
      },
    },
  },

  apis: ["./src/routes/*.js"],
};

module.exports = swaggerJsdoc(options);