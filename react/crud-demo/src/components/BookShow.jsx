import { useState } from "react";
import BookEdit from "./BookEdit";

export default function BookShow({ book, onDelete, onEdit }) {
  const [showEdit, setShowEdit] = useState(false);

  const handleSubmit = (id, newTitle) => {
    onEdit(id, newTitle);
    setShowEdit(false);
  };

  let content = <h3 className="text-lg font-semibold text-gray-800">{book.title}</h3>;
  if (showEdit) {
    content = <BookEdit book={book} onSubmit={handleSubmit} />;
  }

  return (
    <div className="relative rounded-2xl mx-4 my-4 p-5 bg-white shadow-lg border border-gray-200 w-[250px] h-[150px] flex flex-col justify-start gap-3 transition hover:shadow-xl hover:scale-[1.02]">
      <button
        onClick={() => setShowEdit(!showEdit)}
        className="absolute top-3 right-12 text-gray-500 hover:text-blue-600 transition"
      >
        ✏️
      </button>
      <button
        onClick={() => onDelete(book.id)}
        className="absolute top-3 right-4 text-gray-500 hover:text-red-600 transition"
      >
        &times;
      </button>
      <div className="mt-6">{content}</div>
    </div>
  );
}
