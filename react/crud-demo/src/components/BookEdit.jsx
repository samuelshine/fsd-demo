import { useState } from "react";

export default function BookEdit({ book, onSubmit }) {
  const [title, setTitle] = useState(book.title);

  const onHandleSubmit = (event) => {
    event.preventDefault();
    onSubmit(book.id, title);
  };

  const changeHandle = (event) => {
    setTitle(event.target.value);
  };

  return (
    <form
      onSubmit={onHandleSubmit}
      className="bg-white p-4 rounded-xl shadow-md border border-gray-200"
    >
      <label className="block font-medium mb-2 text-gray-700">Edit the Title</label>
      <input
        onChange={changeHandle}
        value={title}
        className="w-full border border-gray-300 px-4 py-2 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 transition mb-3"
        placeholder="Enter new title"
      />
      <button className="bg-gradient-to-r from-green-500 to-green-600 text-white px-5 py-2 rounded-lg shadow hover:scale-105 transition">
        Save
      </button>
    </form>
  );
}
