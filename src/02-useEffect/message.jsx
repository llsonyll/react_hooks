import { useEffect } from "react";

export const Message = () => {
  const handleMouseMoveEvent = (event) => {
    console.log(event);
  };

  useEffect(() => {
    console.log("Message mount");
    window.addEventListener("mousemove", handleMouseMoveEvent);

    return () => {
      console.log("Message unmounted");
      window.removeEventListener("mousemove", handleMouseMoveEvent);
    };
  }, []);

  return (
    <>
      <h3>Usuario ya existe</h3>
    </>
  );
};
