import books from "./booksData";
import BookDetails from "./BookDetails";

const Booklist = () => {
  return (
    <>
      {books.map((book) => (
        <BookDetails key={book.key} book={book}></BookDetails>
      ))}
    </>
  );
};

export default Booklist;
