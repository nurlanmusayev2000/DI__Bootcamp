import React, { useContext } from "react";
import MyContext from "../context/MyContext";

function MyComponent() {
  const sharedState = useContext(MyContext);

  return (
    <div>
      <p>{sharedState.data}</p>
    </div>
  );
}
export default MyComponent