import axios from "axios";
import { useState, useEffect } from "react";

export default function Home() {
  const [books, setBooks] = useState([]);
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [description, setDescription] = useState("");

  // create a function to call the api routes
  const fetchBooks = async () => {
    const response = await axios.get("/api/books");
  }
  return (

  );
}
