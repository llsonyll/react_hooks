import { useCounter, useFetch } from "../hooks";
import { Loading, Quoute } from "../components";

export const Layout = () => {
  const { counter, increase } = useCounter(1);
  const { data, hasError, isLoading } = useFetch(
    `https://www.breakingbadapi.com/api/quotes/${counter}`
  );

  const { quote, author } = !!data && data;

  return (
    <>
      <h1>Breaking Bad</h1>
      <hr />

      {isLoading ? <Loading /> : <Quoute quote={quote} author={author} />}
      <button className="btn btn-primary" onClick={() => increase()}>
        Next Quote
      </button>
    </>
  );
};
