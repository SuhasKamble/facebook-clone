import React from "react";
import Feed from "./Feed";
import "./App.css";
import Login from "./Login";
import { useStateValue } from "./StateProvider";
import Header from "./Header";

function App() {
  const [{ user }, dispatch] = useStateValue();

  return (
    <div className="app">
      <div className="app__body">
        {!user ? (
          <Login />
        ) : (
          <>
            <Header />
            <Feed />
          </>
        )}
      </div>
    </div>
  );
}

export default App;
