import books from "./booksData";
import BookDetails from "./BookDetails";
import styled from "styled-components";

const Booklist = () => {
  return (
    <div>
      {books.map((book) => (
        <BookDetails key={book.key} book={book}></BookDetails>
      ))}
    </div>
  );
};

export default Booklist;
