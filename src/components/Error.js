import React from "react";
import { useRouteError } from "react-router-dom";

function Error() {
  const err = useRouteError();
  console.log(err);
  return (
    <div>
      <h1>OOPS!!!</h1>
      <h2>Something went wrong!!</h2>
      <h3>
        {err.status} : {err.statusText}
      </h3>
      <h2>{err.data}</h2>
    </div>
  );
}

export default Error;
