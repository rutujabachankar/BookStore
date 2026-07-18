# BookStore
# 📚 Book Store API

A simple RESTful Book Store API built using **Node.js**, **Express.js**, and **MongoDB** following the **MVC Architecture**. This API allows users to perform complete CRUD (Create, Read, Update, Delete) operations on books.

---

## 🚀 Features

- Add a new book
- Get all books
- Get a single book by ID
- Update book details
- Delete a book
- MongoDB database integration using Mongoose
- RESTful API structure
- MVC Architecture

---

## 🛠️ Tech Stack

- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- Dotenv

---

## 📂 Project Structure

```
Book-Store-API/
│
├── controllers/
│   └── book-controller.js
│
├── database/
│   └── db.js
│
├── model/
│   └── book.js
│
├── routes/
│   └── book-route.js
│
├── .env
├── server.js
├── package.json
└── README.md
```

---

## 📦 Installation

### 1. Clone the repository

```bash
git clone https://github.com/your-username/book-store-api.git
```

### 2. Navigate to the project folder

```bash
cd book-store-api
```

### 3. Install dependencies

```bash
npm install
```

### 4. Create a `.env` file

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
```

### 5. Start the server

```bash
node server.js
```

The server will start at:

```
http://localhost:5000
```

---

## 📚 API Endpoints

### Add Book

**POST**

```
/api/book/add
```

Request Body

```json
{
  "title": "Atomic Habits",
  "author": "James Clear",
  "year": 2018
}
```

---

### Get All Books

**GET**

```
/api/book/getall
```

---

### Get Book By ID

**GET**

```
/api/book/get/:id
```

---

### Update Book

**PUT**

```
/api/book/update/:id
```

Request Body

```json
{
  "title": "Updated Title",
  "author": "Updated Author",
  "year": 2024
}
```

---

### Delete Book

**DELETE**

```
/api/book/delete/:id
```

---

## 📖 Book Schema

| Field | Type | Required |
|--------|------|----------|
| title | String | ✅ |
| author | String | ✅ |
| year | Number | ✅ |
| createdAt | Date | Auto |

---

## 🧪 Testing

You can test the API using:

- Postman
- Thunder Client
- Insomnia

---

## 📌 Future Improvements

- User Authentication (JWT)
- Role-Based Authorization
- Pagination
- Search & Filter
- Input Validation
- Error Handling Middleware
- API Documentation using Swagger

---

## 👩‍💻 Author

**rutuja bachankar**


---

## 📄 License

This project is licensed under the MIT License.
