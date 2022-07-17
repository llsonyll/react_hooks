export const Quoute = ({ quote, author }) => {
  return (
    <>
      <blockquote className="blockquote text-right">
        <p className="mb-4"> {quote} </p>
        <footer className="blockquote-footer"> {author} </footer>
      </blockquote>
    </>
  );
};
