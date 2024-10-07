import PropTypes from "prop-types";

const BookDetails = ({ book }) => {
  return (
    <div>
      <h2>title: {book.title}</h2>
      <p>Author: {book.author}</p>
      <p>Year: {book.year}</p>
    </div>
  );
};

BookDetails.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
};

export default BookDetails;
