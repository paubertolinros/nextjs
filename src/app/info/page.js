import React from "react";

const SSRComponent = ({ searchParams }) => {
  if (!searchParams || !searchParams.nombre)
    return <h2>There is no name in the params!</h2>;

  return (
    <div>
      <h2>Your name is: {searchParams.nombre}</h2>
    </div>
  );
};

export default SSRComponent;
