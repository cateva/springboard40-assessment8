import React from "react";

function Madlib({n1, n2, adj, color, handleRemove}) {
  const remove = () => handleRemove();
  return (
    <div>
    <h3>there was a {color} {n1} who love a {adj} {n2} </h3>
      <button onClick={remove}>Restart!</button>
    </div>
  );
}

export default Madlib;

//n1 = "slug", n2 = "butterfly", adj = "hungry", color = "blue",
