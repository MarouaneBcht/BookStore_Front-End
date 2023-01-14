import React from 'react';
import Header from './components/Header';
import { Route, Routes, Navigate } from 'react-router-dom';
import Main from './components/Main';
import Signup from './components/Signup';
import Login from './components/Login';
import Home from './components/Home';
import AddBook from './components/AddBook';
import Books from './components/Book/Books';
import About from './components/About';
import BookDetail from './components/Book/BookDetail';



function App() {
  const user = localStorage.getItem("token")
  return (
    <React.Fragment>
      <header>
        <Header />
      </header>
      <main>
        <Routes>
          {user && <Route path="/" exact element={<Home />} />}
          {user && <Route path="/account" exact element={<Main />} />}
          <Route path="/signup" exact element={<Signup />} />
          <Route path="/login" exact element={<Login />} />
          <Route path="/" exact element={<Navigate replace to="/login" />} />
          {user && <Route path="/add" exact element={<AddBook />} />}
          {user && <Route path="/books" exact element={<Books />} />}
          {user && <Route path="/about" exact element={<About />} />}
          {user && <Route path="/books/:id" exact element={<BookDetail />} />}
        </Routes>
      </main>
    </React.Fragment>
  );
}

export default App;
