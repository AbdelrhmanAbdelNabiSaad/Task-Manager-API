# Task Manager API

A RESTful Task Manager API built with **Node.js**, **Express.js**, and **MongoDB (Mongoose)** following the **MVC Architecture**.

This project demonstrates how to build a clean and scalable backend application with CRUD operations, validation, search, filtering, sorting, and interactive API documentation using Swagger.

---

## Features

* RESTful API Design
* MVC Architecture
* CRUD Operations
* MongoDB Database
* Mongoose ODM
* Input Validation
* Async Error Handling
* Search Tasks
* Filter Tasks by Status
* Sort Tasks
* Swagger API Documentation

---

## Technologies Used

* Node.js
* Express.js
* MongoDB
* Mongoose
* Swagger UI Express
* Swagger JSDoc
* JavaScript (ES6)

---

## Project Structure

```text
src
├── config
│   ├── db.js
│   ├── env.js
│   └── swagger.js
│
├── controllers
│   └── task.controller.js
│
├── middlewares
│   ├── validateTask.middleware.js
│   ├── validateUpdateTask.middleware.js
│   └── error.middleware.js
│
├── models
│   └── task.model.js
│
├── routes
│   └── task.routes.js
│
├── services
│   └── task.service.js
│
├── utils
│   └── asyncHandler.js
│   └── error.js
│
├── app.js
└── server.js
```

---

## API Endpoints

| Method | Endpoint     | Description       |
| ------ | ------------ | ----------------- |
| GET    | `/tasks`     | Get all tasks     |
| GET    | `/tasks/:id` | Get a single task |
| POST   | `/tasks`     | Create a new task |
| PATCH  | `/tasks/:id` | Update a task     |
| DELETE | `/tasks/:id` | Delete a task     |

---

## Query Parameters

### Search

```http
GET /tasks?search=node
```

Searches by task title or description.

---

### Filter

```http
GET /tasks?status=completed
```

Available values:

* pending
* completed

---

### Sort

Ascending order

```http
GET /tasks?sort=asc
```

Descending order

```http
GET /tasks?sort=desc
```

---

You can combine them together:

```http
GET /tasks?search=node&status=completed&sort=desc
```



##  API Documentation

Swagger UI


## Sample Task

```json
{
  "_id": "6886c2f2d4b3f123456789ab",
  "title": "Learn MongoDB",
  "description": "Practice Mongoose CRUD operations",
  "status": "pending",
  "createdAt": "2026-07-28T12:30:00.000Z",
  "updatedAt": "2026-07-28T12:30:00.000Z"
}
```

---

##  Future Improvements

* JWT Authentication
* User Accounts
* Pagination
* Rate Limiting
* Unit Testing
* Docker Support
* File Upload
* Role-Based Authorization

---

##  Author

**Abdelrhman Saad** ==>> Full Stack Developer using Node.js