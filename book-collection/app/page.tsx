"use client";
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
    const response = await axios.post("/api/books", { title, author, description });
    fetchBooks(); // fetch the books after adding the new book
    setTitle(""); // clear the form after adding the new book
    setAuthor(""); // clear the form after adding the new book
    setDescription(""); // clear the form after adding the new book
  };

  const deleteBook = async (id) => {
    await axios.delete(`/api/books/${id}`);
    fetchBooks(); // fetch the books after deleting the book
  };

  const updateBook = async (id, newTitle, newAuthor, newDescription) => {
    await axios.put(`/api/books/${id}`, { title: newTitle, author: newAuthor, description: newDescription });
    fetchBooks();
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-4xl font-bold text-center mb-8">Book Collection</h1>
      <div className="bg-white p-6 rounded-lg shadow-md max-w-md mx-auto mb-8">
        <input
          className="w-full p-2 mb-2 border border-gray-300 rounded"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)} />
      </div>
    </div>
  );
}
