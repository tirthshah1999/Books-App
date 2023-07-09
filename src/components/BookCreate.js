import React, { useState } from "react";

function BookCreate({ onCreate }) {
  const [title, setTitle] = useState("");

  const handleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onCreate(title);
    setTitle("");
  };

  return (
    <div className="book-create">
      <form onSubmit={handleSubmit}>
        <h3>Add a book</h3>
        <input
          className="input"
          type="text"
          value={title}
          onChange={handleChange}
        />
        <button className="button">Submit</button>
      </form>
    </div>
  );
}

export default BookCreate;
