import BookShow from './BookShow'
export default function BookList({ books, onDelete, onEdit }) {
  return (
    <div className="flex flex-wrap justify-center gap-6 p-6 bg-gray-50 min-h-screen pb-32">
      {books.map((book) => (
        <BookShow key={book.id} book={book} onDelete={onDelete} onEdit={onEdit} />
      ))}
    </div>
  );
}
