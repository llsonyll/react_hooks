import useCounter from "../hooks/useCounter";
import useFetch from "../hooks/useFetch";

export const MultipleCustomHook = () => {
  const { counter, increase } = useCounter(1);
  const { data, hasError, isLoading } = useFetch(
    `https://www.breakingbadapi.com/api/quotes/${counter}`
  );

  const { quote, author } = !!data && data;

  return (
    <>
      <h1>Breaking Bad</h1>
      <hr />

      {isLoading ? (
        <div className="loading alert alert-info text-center">Loading...</div>
      ) : (
        <blockquote className="blockquote text-right">
          <p className="mb-4"> {quote} </p>
          <footer className="blockquote-footer"> {author} </footer>
        </blockquote>
      )}

      <button className="btn btn-primary" onClick={() => increase()}>
        Next Quote
      </button>
    </>
  );
};
