import { useLayoutEffect, useRef, useState } from "react";

export const Quoute = ({ quote, author }) => {
  const blockquoteStyle = {
    display: "flex",
  };

  const [boxSize, setBoxSize] = useState({ width: 0, height: 0 });

  const pRef = useRef();

  useLayoutEffect(() => {
    console.log(pRef.current.getBoundingClientRect());
    const { width, height } = pRef.current.getBoundingClientRect();
    setBoxSize({ width, height });
  }, [quote]);

  return (
    <>
      <blockquote className="blockquote text-right" style={blockquoteStyle}>
        <p ref={pRef} className="mb-4">
          {quote}
        </p>
        <footer className="blockquote-footer"> {author} </footer>
      </blockquote>

      <code> {JSON.stringify(boxSize)}</code>
    </>
  );
};
