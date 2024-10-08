import PropTypes from "prop-types";
import styled from "styled-components";

const BookDetails = ({ book }) => {
  return (
    <BookContainer>
      <TitleContainer>title: {book.title}</TitleContainer>
      <p>Author: {book.author}</p>
      <YearContainer>Year: {book.year}</YearContainer>
    </BookContainer>
  );
};

BookDetails.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
};

const BookContainer = styled.div`
  background-color: #f0f0f0;
  width: 400px;
  margin: auto;
`;

const TitleContainer = styled.h2`
  padding-top: 30px;
`;
const YearContainer = styled.p`
  padding-bottom: 50px;
`;
export default BookDetails;
