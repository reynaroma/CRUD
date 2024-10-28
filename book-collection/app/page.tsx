import axios from "axios";
import { useState, useEffect } from "react";

export default function Home() {
  const [books, setBooks] = useState([]);
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => { 
    fetchBooks();
  }, []);

  // create a function to call the api routes
  const fetchBooks = async () => {
    const response = await axios.get("/api/books");
    setBooks(response.data.data);
  };

  const addBook = async () => {
    const response = await axios.post("/api/books", {title, author, description});
    fetchBooks(); // fetch the books after adding the new book
    setTitle(""); // clear the form after adding the new book
    setAuthor(""); // clear the form after adding the new book
    setDescription(""); // clear the form after adding the new book
  };

  const deleteBook = async (id) => {
    await axios.delete(`/api/books/${id}`);
    fetchBooks(); // fetch the books after deleting the book
  };

  return (

  );
}
