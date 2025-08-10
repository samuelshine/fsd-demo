import { useState } from "react"


export default function BookCreate({ onCreate }) {
  const [title, setTitle] = useState("");

  const formOnSubmit = (event) => {
    event.preventDefault();
    onCreate(title);
    setTitle("");
  };

  const changeHandle = (event) => {
    setTitle(event.target.value);
  };

  return (
    <div className="fixed bottom-0 w-full bg-white/80 backdrop-blur-md shadow-lg p-6 border-t border-gray-200">
      <form onSubmit={formOnSubmit} className="flex flex-col sm:flex-row items-center gap-4">
        <label className="text-lg font-medium text-gray-800">Add a Book</label>
        <input
          onChange={changeHandle}
          value={title}
          className="flex-1 border border-gray-300 px-4 py-2 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
          placeholder="Enter book title..."
        />
        <button
          type="submit"
          className="bg-gradient-to-r from-blue-500 to-blue-600 text-white font-medium px-6 py-2 rounded-xl shadow hover:shadow-md transition hover:scale-105"
        >
          Add
        </button>
      </form>
    </div>
  );
}
