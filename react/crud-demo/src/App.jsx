import { useState } from "react"
import BookCreate from "./components/BookCreate"
import BookList from "./components/BookList"

export default function App() {
  const [books, setBooks] = useState([]);

  const editBookById = (id, newtitle) => {
    setBooks((prev) =>
      prev.map((book) => (book.id === id ? { ...book, title: newtitle } : book))
    );
  };

  const deleteBookById = (id) => {
    setBooks((prev) => prev.filter((book) => book.id !== id));
  };

  const bookCreate = (title) => {
    setBooks((prev) => [...prev, { id: Math.random(), title }]);
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <BookList books={books} onDelete={deleteBookById} onEdit={editBookById} />
      <BookCreate onCreate={bookCreate} />
    </div>
  );
}
