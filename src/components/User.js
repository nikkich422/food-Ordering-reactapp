import React, { useState } from "react";

const User = (props) => {
  const [count] = useState(0);
  const [count2] = useState(2);

  const { name, location } = props;

  return (
    <div>
      <h2>Count: {count}</h2>
      <h2>Count2: {count2}</h2>
      <h1>Name: {name}</h1>
      <h3>Location: {location}</h3>
      <h4>Instagram: @royal__nikk_</h4>
    </div>
  );
};

export default User;
