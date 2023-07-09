import React, { useContext } from "react";
import BookShow from "./BookShow";
import BooksContext from "../context/Books";

function BookList() {
  const { books } = useContext(BooksContext);

  const renderBooks = books.map((book) => {
    return <BookShow key={book.id} book={book} />;
  });

  return <div className="book-list">{renderBooks}</div>;
}

export default BookList;
