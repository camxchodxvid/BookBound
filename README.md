# BookBound 📚

BookBound is a full-stack MERN application that allows users to search for books using the Google Books API and save their favorites to a personalized dashboard. The application has been refactored from a RESTful API to a GraphQL API with Apollo Server for improved performance and developer experience.

## Description

BookBound is your literary compass in the vast world of books. This intuitive book search engine connects readers with their next great read, allowing them to:
- Search for books using the Google Books API
- View detailed information about each book
- Create an account and log in securely
- Save favorite books to a personal collection
- Remove books from their saved collection

## Table of Contents

- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [Screenshots](#screenshots)
- [API Reference](#api-reference)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## Technologies Used

- **Frontend:**
  - React
  - Apollo Client
  - Bootstrap
  - React Router
  
- **Backend:**
  - Node.js
  - Express.js
  - Apollo Server
  - GraphQL
  - MongoDB
  - Mongoose
  
- **Authentication:**
  - JWT (JSON Web Tokens)
  - bcrypt

- **APIs:**
  - Google Books API

## Installation

To run this application locally:

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/bookbound.git
   cd bookbound
   ```

2. Install dependencies for both server and client:
   ```bash
   npm install
   cd client
   npm install
   cd ..
   ```

3. Create a `.env` file in the root directory and add your MongoDB connection string:
   ```
   MONGODB_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   ```

4. Start the development server:
   ```bash
   npm run develop
   ```

## Usage

1. Navigate to the application in your browser at `http://localhost:3000`
2. Search for books using the search bar
3. Create an account or log in to save books
4. View and manage your saved books in the dashboard
5. Log out when finished

## Features

- **Book Search:** Search the Google Books API for any title, author, or keyword
- **Detailed Results:** View book covers, titles, authors, descriptions, and links
- **User Authentication:** Create an account, log in, and maintain a secure session
- **Personalized Book Collection:** Save books to your account for future reference
- **Responsive Design:** Enjoy a seamless experience on devices of all sizes
- **GraphQL API:** Benefit from optimized data fetching and improved performance

## API Reference

### GraphQL Queries

```graphql
# Get the current user's profile and saved books
query {
  me {
    _id
    username
    email
    bookCount
    savedBooks {
      bookId
      authors
      description
      title
      image
      link
    }
  }
}
```

### GraphQL Mutations

```graphql
# Add a new user
mutation AddUser($username: String!, $email: String!, $password: String!) {
  addUser(username: $username, email: $email, password: $password) {
    token
    user {
      _id
      username
    }
  }
}

# Login a user
mutation Login($email: String!, $password: String!) {
  login(email: $email, password: $password) {
    token
    user {
      _id
      username
    }
  }
}

# Save a book to the user's collection
mutation SaveBook($bookData: BookInput!) {
  saveBook(bookData: $bookData) {
    _id
    username
    email
    savedBooks {
      bookId
      authors
      description
      title
      image
      link
    }
  }
}

# Remove a book from the user's collection
mutation RemoveBook($bookId: String!) {
  removeBook(bookId: $bookId) {
    _id
    username
    email
    savedBooks {
      bookId
      authors
      description
      title
      image
      link
    }
  }
}
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Contact

Julio David Gonzalez 

Project Link: [https://github.com/yourusername/bookbound](https://github.com/yourusername/bookbound)

---

BookBound: Your Literary Compass 📚
