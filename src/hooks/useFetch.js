import { useEffect, useState } from "react";

export const useFetch = (url) => {
  const [quote, setQuote] = useState({
    data: null,
    isLoading: true,
    hasError: null,
  });

  const getQuote = async () => {
    try {
      setQuote({
        ...quote,
        isLoading: true,
      });

      const resp = await fetch(url);
      const data = await resp.json();

      setQuote({
        ...quote,
        data: data[0],
        isLoading: false,
      });
    } catch (error) {
      setQuote({
        ...quote,
        isLoading: false,
        hasError: error.message,
      });
    }
  };

  useEffect(() => {
    console.log("useFetch URL Hook");
    getQuote();
  }, [url]);

  return {
    ...quote,
  };
};
