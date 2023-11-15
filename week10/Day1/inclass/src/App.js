import React from "react";
import MyContext from "./context/MyContext";
import MyComponent from "./component/MyComponen";
import UserContext from "./context/UserContext";
import { DynamicContextProvider} from "./context/DynamicContex";

function App() {
  const sharedState = {
    data: "This is shared data",
  };
  const userState = {
    name: "John Doe",
    email: "john@example.com",
  };
  return (
    <>
      <MyContext.Provider value={sharedState}>
        <MyComponent/>
      </MyContext.Provider>
      <UserContext.Provider value={userState}>
        {/* Your component tree goes here */}

      </UserContext.Provider>

      <DynamicContextProvider/>
    </>

  );
}

export default App;